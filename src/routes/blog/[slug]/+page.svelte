<script lang="ts">
	import MarkdownIt from "markdown-it";
	import hljs from "highlight.js"
	import type { PageData } from './$types';

    export let data: PageData;
    let { article } = data;
	const md: MarkdownIt = new MarkdownIt("default" , {
		typographer: true,
		highlight: (str, lang) => {
			console.log(str, hljs.highlight(str, { language: lang, ignoreIllegals: true }).value)

			if (lang && hljs.getLanguage(lang)) {

				try {
					return  `<pre class="hljs not-prose"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
				} catch(_) {}
			}

			return `<pre class="hljs not-prose"><code>${md.utils.escapeHtml(str)}</code></pre>`
		},
	})
	
	let html = md.render(article.content ?? "", undefined)
</script>

<svelte:head>
	<title>{article.title} &middot; Ephriam Henderson</title>
	<meta name="author" content="Ephriam Henderson" />
</svelte:head>

<main>
	<div class="px-3 py-5">
		<div>
			<h1 class="text-3xl font-medium">{article.title}</h1>
		</div>
		<div>
         <dl class="flex gap-2">
            <dt class="italic">Author:</dt>
            <dd>Ephriam Henderson</dd>
            <span>&middot;</span>
            <dt class="italic">Published:</dt>
            <dd>{article.dateCreated ? new Date(article.dateCreated).toLocaleDateString("en-US", { month: "long", day: "numeric",  year: "numeric" }) : ""}</dd>
         </dl>
		</div>
		<hr class="dark:border-white/40"/>
	</div>
	<div class="prose dark:prose-invert p-3 prose-code:">
		{#if article.content}
			{@html html}
		{/if}
	</div>
</main>