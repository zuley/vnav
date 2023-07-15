import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'
import emoji from 'markdown-it-emoji'
import {decode} from 'html-entities';

const markdownRenderer = new MarkdownIt()
markdownRenderer.use(attrs)
markdownRenderer.use(emoji)

export function markdownToHtml (content: string) {
  return decode(markdownRenderer.render(content))
}