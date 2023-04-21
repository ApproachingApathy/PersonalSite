import type { PageServerLoad } from "./$types"
import directus from "$lib/directus"
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {

    const { data: experiences } = await directus.items('experiences').readByQuery({
		sort: ['-startDate']
	});

	const pages = await directus.items('pages').readByQuery({
		fields: "*.*" as "*",
		filter: {
			name: "homepage"
		}
	});

	
	const page = pages?.data?.[0];

	if (!page) {
		throw error(404, "Page not found in cms.")
	}


	return {
		experiences: experiences ?? [],
		blocks: page.blocks ?? []
	};
}

