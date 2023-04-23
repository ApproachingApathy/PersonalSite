import { Directus } from '@directus/sdk';
import type { Collections } from '$lib/types';

const cmsUrl = import.meta.env.VITE_CMS_URL;
const cmsKey = import.meta.env.VITE_CMS_TOKEN;

if (typeof cmsKey !== 'string' || typeof cmsUrl !== 'string') throw Error('Missing Env variables');

const directus = new Directus<Collections>(cmsUrl, {
	auth: {
		staticToken: cmsKey,
	}
});

export default directus;
