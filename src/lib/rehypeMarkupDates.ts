import { parse } from 'chrono-node'
import { findAndReplace } from 'hast-util-find-and-replace'
import type { Node } from 'hast-util-find-and-replace/lib/index'
import { h } from 'hastscript'
import { Element } from 'hastscript/lib/core'
import { Plugin } from 'unified'

// For examples, see:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values
// https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats

/** Month string: MM-DD */
const monthPattern = /[01][1-9]-[0-3][1-9]/

/** Week string: YYYY-WXX */
const weekPattern = /\d{4}-W\d?\d/

/** Time string, with optional timezone: HH:MM:SS+HH:MM */
const timePattern = /([0-2]?\d:\d\d(:\d\d(\.\d+)?)?( ?(AM|am|PM|pm))?(Z|( (UTC|GMT) ?)[+-]\d\d:?\d\d| ?[A-Z]{2,4})?)/
const onlyTimePattern = new RegExp('^' + timePattern.source + '$')

/** Date or datetime string, with optional timezone: YYYY-MM-DD HH:MM:SS+HH:MM */
const dateTimePattern = /\d{4}-\d{2}(-\d{2}([ T]?[0-2]?\d:\d\d(:\d\d(\.\d+)?)?(Z|[+-]\d\d:?\d\d)?)?)?/

/** Fiscal year with optional quarter or half */
const fiscalYearPattern = /FY[ '-]?(\d{2,4})(?:[ '-]?(?:F?Q([1-4])|H([12])))?/

/** Fiscal quarter only */
const fiscalQuarterPattern = /F?Q([1-4])/

const datePattern = new RegExp(
    '\\b(' +
        [
            monthPattern.source,
            weekPattern.source,
            timePattern.source,
            dateTimePattern.source,
            fiscalYearPattern.source,
            fiscalQuarterPattern.source,
        ].join('|') +
        ')\\b',
    'g'
)

/**
 * Rehype plugin to wrap various datetime strings with `<time>` elements with a programmatically readable `datetime` attribute.
 */
// eslint-disable-next-line unicorn/consistent-function-scoping
export const rehypeMarkupDates: Plugin = () => root =>
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    findAndReplace(root as Node, datePattern, (argument1: unknown): Element | string => {
        const match = argument1 as string
        const fiscalInterval = parseFiscalInterval(match)
        if (fiscalInterval) {
            return h('time', { datetime: fiscalInterval.start, 'data-interval-end': fiscalInterval.end }, match)
        }
        let dateTime = match

        if (onlyTimePattern.test(match)) {
            // Use a parser to handle timezone name references like UTC, PST, MT, ET, CET, CEST, ...
            const parsed = parse(match)?.[0]?.start
            if (!parsed) {
                return match
            }
            dateTime = `${formatInt(parsed.get('hour')!, 2)}:${formatInt(parsed.get('minute')!, 2)}`
            if (parsed.isCertain('second')) {
                dateTime += `:${parsed.get('second')!}`
            }
            if (parsed.isCertain('timezoneOffset')) {
                dateTime += `${formatTimezoneOffset(parsed.get('timezoneOffset')!)}`
            }
        }

        return h('time', { datetime: dateTime }, match)
    })

function formatTimezoneOffset(totalMinutes: number): string {
    const hours = Math.trunc(totalMinutes / 60)
    const minutes = Math.abs(totalMinutes) % 60
    return `${totalMinutes >= 0 ? '+' : ''}${formatInt(hours, 2)}:${formatInt(minutes, 2)}`
}

const fiscalIntervalPattern = new RegExp(`^(?:${fiscalYearPattern.source}|${fiscalQuarterPattern.source})$`)

/**
 * Parses a fiscal interval like `FY22`, `FY22`, `FY22Q3`, `FY22H2`, `FQ3`, `Q3`
 */
function parseFiscalInterval(input: string): { start: string; end: string } | null {
    const match = input.match(fiscalIntervalPattern)
    if (!match) {
        return null
    }

    let durationMonths = 3

    let [, startFiscalYearString, startQuarterString, startYearHalfString, startOnlyQuarterString] = match
    if (!startQuarterString && !startOnlyQuarterString) {
        durationMonths = 12
    }
    if (!startFiscalYearString) {
        startQuarterString = startOnlyQuarterString
    }
    if (!startQuarterString && startYearHalfString) {
        startQuarterString = startYearHalfString === '1' ? '1' : '3'
        durationMonths = 6
    }

    const startFiscalQuarter = +startQuarterString || 1

    // Start month of the quarter.
    // The fiscal year starts on February 1st.
    const startMonth = 2 + (startFiscalQuarter - 1) * 3
    const endMonth = (startMonth + durationMonths - 1) % 12
    const endDay = endMonth === 4 ? 30 : 31

    if (!startFiscalYearString) {
        // return MM-DD string
        return {
            start: `${formatInt(startMonth, 2)}-01`,
            end: `${formatInt(endMonth, 2)}-${endDay}`,
        }
    }

    // return YYYY-MM-DD string
    if (startFiscalYearString.length === 2) {
        startFiscalYearString = '20' + startFiscalYearString
    }

    const startYear = parseInt(startFiscalYearString, 10) - 1
    const endYear = Math.floor(startYear + (startMonth + durationMonths) / 12)

    return {
        start: `${formatInt(startYear, 4)}-${formatInt(startMonth, 2)}-01`,
        end: `${formatInt(endYear, 4)}-${formatInt(endMonth, 2)}-${endDay}`,
    }
}

function formatInt(int: number, digits: number): string {
    let formatted = Math.abs(int).toString().padStart(digits, '0')
    if (int < 0) {
        formatted = `-${formatted}`
    }
    return formatted
}
