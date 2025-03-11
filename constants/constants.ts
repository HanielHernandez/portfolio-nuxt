import type { Options } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export const RICH_TEXT_OPTIONS: Partial<Options> = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, next: (nodes: any) => string) => `<p class="mb-4">${next(node.content)}</p>`,
        [BLOCKS.UL_LIST]: (node: any, next: (nodes: any) => string) =>
            `<ul class="list-disc mb-4 pl-4">${next(node.content)}</ul>`,
        [BLOCKS.LIST_ITEM]: (node: any, next: (nodes: any) => string) => `<li>${next(node.content)}</li>`
    }
}
