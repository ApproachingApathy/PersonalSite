import directus from "$lib/directus";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const { data: articles } = await directus.items('articles').readByQuery({
		sort: ['-dateCreated', '-sort']
	});

	console.log(articles)

	return {
		articles: articles ?? []
	};
}