import { Content, Root } from 'hast'
import { retext } from 'retext'
import smartypants, { Options } from 'retext-smartypants'
import { Plugin } from 'unified'
import { visit, SKIP } from 'unist-util-visit'

const skipElements = new Set(['script', 'style', 'code'])

/**
 * Rehype plugin that replaces dumb quotes with typographic quotes in all text nodes.
 *
 * It will properly ignore script, style and code tags.
 *
 * Note: This plugin has the known limitation that it will not catch quoted regions across multiple nodes, e.g. if
 * a section of the quoted region is bolded. There is no easy way around this.
 */
export const rehypeSmartypants: Plugin<[Options], Root> = (options: Options) => {
    const processor = retext().use(smartypants, options)

    return (tree: Root) =>
        visit<Root | Content>(tree, node => {
            if (node.type === 'element' && skipElements.has(node.tagName)) {
                return SKIP
            }
            if (node.type === 'text') {
                // eslint-disable-next-line no-sync
                node.value = processor.processSync(node.value).toString()
            }
            return undefined
        })
}
