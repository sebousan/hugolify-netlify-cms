import { heading } from '../fields/heading.js'
import { posts } from '../fields/posts.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedposts = {
    name: 'selected-posts',
    label: 'Selection d’actualités',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        { name: 'section', default: 'posts', widget: 'hidden' },
        posts,
        show_more,
        background
    ]
}