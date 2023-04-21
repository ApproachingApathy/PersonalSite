import type { ID } from '@directus/sdk';

export interface Social {
	id: ID;
	status: string | null;
	sort: number | null;
	userCreated: string | null;
	userUpdated: string | null;
	dateCreated: string | null;
	dateUpdated: string | null;
	title: string;
	url: string;
}
