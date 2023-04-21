import type { ID } from '@directus/sdk';

export interface Block {
	id: ID;
	status: string | null;
	sort: number | null;
	userCreated: string | null;
	userUpdated: string | null;
	dateCreated: string | null;
	dateUpdated: string | null;
	title: string;
	htmlId: string;
	content: string | null;
	page: ID;
}
