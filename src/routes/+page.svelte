<script lang="ts">
    import type { PageData } from "./$types";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import ResumeExperience from "$lib/components/ResumeExperience.svelte";
	import { renderMarkdown } from "$lib/markdown";

    export let data: PageData;
	const { blocks, experiences } = data;
</script>

<svelte:head>
	<title>Ephriam Henderson</title>
</svelte:head>

<main>
	<div class="mt-10 md:p-6 flex">
		<a href="/blog/test">test</a>
		<Sidebar>
			<div class="flex justify-center py-6">
				<div class="aspect-[3/4] max-h-80 md:max-h-72">
					<img
						src="https://cms.ephriamhenderson.dev/assets/72ef1c79-8612-463f-9800-70f3242da489"
						alt="I'm sitting in a chair, am turned toward the camera, and smiling."
						loading="lazy"
					/>
				</div>
			</div>
			<section class="h-44 block">
				<h2 class="text-2xl font-condensed-sans font-medium">Table of Contents</h2>
				<div>
					<ul>
						{#each blocks as block}
							<li>
								<a href="#{block.htmlId}" class="font-medium hover:font-semibold">{block.title}</a>
							</li>
						{/each}
						<li>
							<a href="#experience" class="font-medium hover:font-semibold">Experience</a>
						</li>
					</ul>
				</div>
			</section>
		</Sidebar>
		<div class="">
			{#each blocks as block}
				<section id="section-{block.htmlId}">
					<div class="flex flex-col md:flex-row">
						<div class="md:max-w-[75%] p-6">
							<h2 id={block.htmlId} class="text-2xl font-medium font-condensed-sans">
								{block.title}
							</h2>
							<div>
								{#if block.content}
									{@html renderMarkdown(block.content)}
								{/if}
							</div>
						</div>
					</div>
				</section>
			{/each}
			<section id="section-experience">
				<div class="md:max-w-[75%] p-6">
					<h2 id="experience" class="text-2xl font-medium font-condensed-sans">Experience</h2>
					<div>
						{#each experiences as experience}
							<ResumeExperience
								title={experience.jobTitle}
								startDate={new Date(experience.startDate)}
								endDate={experience.endDate
									? new Date(experience.endDate)
									: undefined}
								company={experience.organizationName}
							>
								{#if experience.content}
									{@html renderMarkdown(experience.content)}
								{/if}
							</ResumeExperience>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</div>
</main>
