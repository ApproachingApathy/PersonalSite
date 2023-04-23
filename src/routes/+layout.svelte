<script lang="ts">
		import '../app.postcss';
		import type { Collections } from '$lib/types';
	
		import type { PageData } from './$types';
		import { evaluateClassName } from '$lib/client/evaluateClassName';

		export let data: PageData;
	
		let { socials } = data;

		let showPage = false;
		setTimeout(() => {
			showPage = true;
		}, 250);
</script>

<svelte:head>
	<title>Ephriam Henderson</title>
   <meta name="author" content="Ephriam Henderson">
</svelte:head>

<div class="w-full min-h-screen md:py-24 dark:bg-zinc-900 dark:text-zinc-300">
		<div
			id="page-main"
			class={`max-w-4xl md:border shadow-md mx-auto transition-opacity duration-1000 ${evaluateClassName(showPage, "", "opacity-0")}`}
		>
			<header>
				<div>
					<div class="flex flex-col md:flex-row">
						<div class="p-4">
							<h1 class="text-4xl font-medium font-condensed-sans">Ephriam Henderson</h1>
						</div>
						<div class="p-4 flex items-center md:justify-end gap-3 grow">
							{#each socials as social}
								<a
									class="font-medium hover:font-semibold"
									href={social.url}
									target="_blank"
									referrerpolicy="no-referrer"
								>
									{social.title}
								</a>
							{/each}
						</div>
					</div>
					<nav>
						<ul class="flex border-y divide-x">
							<li class="py-1 px-2 hover:bg-sky-500 hover:font-semibold hover:text-white">
								<a href="/">Home</a>
							</li>
							<li class="py-1 px-2 hover:bg-sky-500 hover:font-semibold hover:text-white">
								<a href="/blog">Blog</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<slot />
			<footer>
				<aside class="border-t px-6 py-3">
					<p>
						Built with <a class="underline hover:font-medium" href="https://kit.svelte.dev/" target="_blank" referrerpolicy="no-referrer">SvelteKit</a>.
					</p>
					<p>
						Thanks to <a class="underline hover:font-medium" href="https://favicon.io/" target="_blank" referrerpolicy="no-referrer">favicon.io</a>.
					</p>
				</aside>
			</footer>
		</div>
</div>
