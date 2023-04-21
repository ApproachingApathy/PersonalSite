<script lang="ts">
	import ResumeExperience from '$lib/components/ResumeExperience.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
    import type { Collections } from '$lib/types';
	import showdown from 'showdown';

	type ArrayElement<ArrayType extends readonly unknown[]> =
		ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

	const mdConvertor = new showdown.Converter({ ghCodeBlocks: true });

	export let articles: Array<Collections["articles"]> = [];
	
	// export let home = undefined;

	let blocks = [];
</script>

<svelte:head>
	<title>Blog &middot; Ephriam Henderson</title>
</svelte:head>

<main>
	<div class="mt-10 px-6 flex">
		<div class="w-full">
			<div>
				<h1 class="text-3xl font-medium pb-3">Blog Posts</h1>
			</div>
			<ul class="w-full">
				{#if articles.length < 1}
					<div>
						<h1 class="text-xl">
							There's nothing here!
						</h1>
					</div>
				{/if}
				{#each articles as post}
					<li class="w-full border hover:border-2">
						<a href="blogs/{post.slug}">
							<div class="p-3 grid grid-flow-col gap-3 grid-cols-2">
								<div>
									<h2 class="text-xl font-medium">
										{post.title}
									</h2>
									<p>
										{post.description}
									</p>
								</div>
								<div class="flex items-end justify-end">
									<div>
										Published on {post.dateCreated
											? new Date(post.dateCreated).toLocaleDateString('en-US', {
													month: 'long',
													day: 'numeric'
											  })
											: ''}
									</div>
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
