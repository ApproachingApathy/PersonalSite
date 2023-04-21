import type { Block } from './Block';
import type { Page } from './Page';
import type { Experience } from './Experience';
import type { Social } from './Socials';
import type { Article } from './Article';

export type Collections = {
	articles: Article;
	blocks: Block;
	experiences: Experience;
	pages: Page;
	socials: Social;
};
