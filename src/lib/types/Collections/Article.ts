import type { ID } from '@directus/sdk';

export interface Article {
	id: ID;
	status: string | null;
	sort: number | null;
	userCreated: string | null;
	userUpdated: string | null;
	dateCreated: string | null;
	dateUpdated: string | null;
	title: string | null;
	slug: string;
	description: string | null;
	content: string | null;
}
