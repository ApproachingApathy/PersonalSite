import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

type Optional<T> = T | null | undefined

const md: MarkdownIt = new MarkdownIt("default" , {
    typographer: true,
    highlight: (str, lang) => {
        console.log(str, hljs.highlight(str, { language: lang, ignoreIllegals: true }).value)

        if (lang && hljs.getLanguage(lang)) {

            try {
                return  `<pre class="hljs not-prose"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
            } catch (_) { /* empty */ }
        }

        return `<pre class="hljs not-prose"><code>${md.utils.escapeHtml(str)}</code></pre>`
    },
})

export const renderMarkdown = (str: Optional<string>) => {
    return md.render(str ?? "")
}