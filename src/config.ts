import { text } from "stream/consumers";

export const SITE = {
	title: 'Alex Qin',
	description: 'The documentations by Alex Qin',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Docs': [
			{ text: 'Introduction', link: 'en/introduction' }
		],
		'Linux': [
			{text: 'cmd', link: 'en/linux/cmd'},
			{text: 'vim', link: 'en/linux/vim'},
			{text: 'git', link: 'en/linux/git'},
			{text: 'docker', link: 'en/linux/docker'},
			{text: 'ubuntu', link: 'en/linux/ubuntu'},
		],
		'Note': [
			{text: 'note', link: 'en/note/notes'},
		],
		'Code': [
			{text: 'coding', link: 'en/code/coding-guideline'},
			{text: 'javascript', link: 'en/code/javascript-coding-guideline'},
			{text: 'language', link: 'en/code/language-guideline'},
			{text: 'react', link: 'en/code/react-coding-guideline'},
		],
		'Data': [
			{text: 'data', link: 'en/data/data-visualization'},
		],
	},
};
