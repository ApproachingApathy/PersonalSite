import type { ID } from '@directus/sdk';
import type { Block } from './Block';

export interface Page {
	id: ID;
	status: string | null;
	sort: number | null;
	userCreated: string | null;
	userUpdated: string | null;
	dateCreated: string | null;
	dateUpdated: string | null;
	name: string;
	blocks: Array<Block>;
}
