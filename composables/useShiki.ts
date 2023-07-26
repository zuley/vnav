import {getHighlighter, setCDN} from 'shiki'

setCDN('https://unpkg.com/shiki/')

export default function () {
  return getHighlighter({
    theme: 'nord',
    langs: ['typescript', 'javascript', 'vue', 'vue-html']
  })
}