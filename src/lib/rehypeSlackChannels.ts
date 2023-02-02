import { ElementContent } from 'hast'
import { defaultIgnore, findAndReplace } from 'hast-util-find-and-replace'
import type { Node } from 'hast-util-find-and-replace/lib/index'
import { h } from 'hastscript'
import { Plugin } from 'unified'

const slackChannelPattern = /(^|\W)#([\d_a-z-]{1,80})(\W|$)/g
const slackOrg = 'sourcegraph'

/**
 * Rehype plugin to wrap Slack channel names in links with the CSS class `slack-channel`.
 */
// eslint-disable-next-line unicorn/consistent-function-scoping
export const rehypeSlackChannels: Plugin = () => root =>
    findAndReplace(
        root as Node,
        slackChannelPattern,
        (...args: unknown[]): ElementContent[] => {
            const [, prefix, channelName, suffix] = args as string[]
            return [
                { type: 'text', value: prefix },
                h(
                    'a',
                    {
                        class: 'slack-channel',
                        href: `https://${slackOrg}.slack.com/archives/${channelName}`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                    },
                    `#${channelName}`
                ),
                { type: 'text', value: suffix },
            ]
        },
        {
            ignore: [...defaultIgnore, 'code', 'a'],
        }
    )
