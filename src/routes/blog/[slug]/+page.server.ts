import type { PageServerLoad } from "./$types";
import directus from '$lib/directus';
import { error } from "@sveltejs/kit";

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    const { data: articles } = await directus.items('articles').readByQuery({
		filter: {
			slug: params.slug
		}
	});

	const article = articles?.[0];

	if (!article) {
		throw error(404, 'Article not found.');
	}

	return {
		article
	};
}