import { parse } from 'chrono-node'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

export function registerDateTooltips(): void {
    tippy('time', {
        content: element => getDateTooltip(element as HTMLTimeElement),
        placement: 'bottom-start',
        arrow: false,
        duration: 0,
        offset: [0, 6],
        theme: 'light',
    })
}

function getDateTooltip(timeElement: HTMLTimeElement): string {
    let tooltip = formatDateTime(timeElement.dateTime)
    if (timeElement.dataset.intervalEnd) {
        tooltip += ` — ${formatDateTime(timeElement.dataset.intervalEnd)}`
    }
    return tooltip
}

function formatDateTime(dateTime: string): string {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values for possible values of `timeElement.dateTime`.

    // Handle MM-DD reference
    if (/^\d\d-\d\d$/.test(dateTime)) {
        return new Date(`${new Date().getFullYear()}-${dateTime}T00:00:00`).toLocaleString(undefined, {
            month: 'long',
            day: 'numeric',
        })
    }

    // Handle all other possible values with a lenient parser.
    const parsed = parse(dateTime)?.[0]?.start
    if (!parsed) {
        return dateTime
    }

    // Only include the parts of the date that we know about
    const options: Intl.DateTimeFormatOptions = {
        year: parsed.isCertain('year') ? 'numeric' : undefined,
        month: parsed.isCertain('month') ? 'long' : undefined,
        day: parsed.isCertain('day') ? 'numeric' : undefined,
        weekday: parsed.isCertain('day') ? 'long' : undefined,
        hour: parsed.isCertain('hour') ? 'numeric' : undefined,
        minute: parsed.isCertain('minute') ? 'numeric' : undefined,
        second: parsed.isCertain('second') ? 'numeric' : undefined,
        timeZoneName: parsed.isCertain('hour') ? 'long' : undefined,
    }
    return parsed.date().toLocaleString(undefined, options)
}
