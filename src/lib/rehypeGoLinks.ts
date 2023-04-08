import { ElementContent } from 'hast'
import { defaultIgnore, findAndReplace } from 'hast-util-find-and-replace'
import type { Node } from 'hast-util-find-and-replace/lib/index'
import { h } from 'hastscript'
import { Plugin } from 'unified'

// goLinksPattern matches go/something links, e.g. go/sg or go/sg-frontend
// It only matches the beginning of a string or preceded by whitespace
// to avoid the case where this-is-not-a-go/link is matched
const goLinksPattern = /(^|\s)go\/([\w-]+)(\W|$)/g

// eslint-disable-next-line unicorn/consistent-function-scoping
export const rehypeGoLinks: Plugin = () => root =>
    findAndReplace(
        root as Node,
        goLinksPattern,
        (...args: unknown[]): ElementContent[] => {
            const [, prefix, name, suffix] = args as string[]
            return [
                { type: 'text', value: prefix },
                h(
                    'a',
                    {
                        class: 'go-link',
                        href: `http://go/${name}`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                    },
                    `go/${name}`
                ),
                { type: 'text', value: suffix },
            ]
        },
        {
            ignore: [...defaultIgnore, 'code', 'a'],
        }
    )
