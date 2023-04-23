<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    let { articles }  = data
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
            <ul class="w-full mb-3">
                {#if articles.length < 1}
                    <div>
                        <h1 class="text-xl">
                            There's nothing here!
                        </h1>
                    </div>
                {/if}
                {#each articles as post}
                    <li class="w-full border hover:border-2">
                        <a href="/blog/{post.slug}">
                            <!--  -->
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
                                        Published on {post.publishDate
                                            ? new Date(post.publishDate).toLocaleDateString('en-US', {
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
