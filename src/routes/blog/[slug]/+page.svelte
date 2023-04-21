<script lang="ts">
	import type { Collections } from '$lib/types';
	import Showdown from 'showdown';
	import type { PageData } from './$types';

    export let data: PageData;
    const {article} = data;

	const mdConvertor = new Showdown.Converter({ ghCodeBlocks: true });
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
            <dd>Date</dd>
         </dl>
		</div>
		<hr class="dark:border-white/40"/>
	</div>
	<div class="prose dark:prose-invert p-3">
		{#if article.content}
			{@html article.content}
		{/if}
	</div>
</main>