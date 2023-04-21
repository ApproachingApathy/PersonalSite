import directus from "$lib/directus";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async () => {
    const { data: socials } = await directus.items('socials').readByQuery({});

	return {
		socials: socials ?? []
	};
}