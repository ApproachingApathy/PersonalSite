import type { ID } from '@directus/sdk';

export interface Experience {
	id: ID;
	status: string | null;
	sort: number | null;
	userCreated: string | null;
	userUpdated: string | null;
	dateCreated: string | null;
	dateUpdated: string | null;
	organizationName: string;
	jobTitle: string;
	startDate: string;
	endDate: string | null;
	content: string | null;
}
