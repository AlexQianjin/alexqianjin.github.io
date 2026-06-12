import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact({ exclude: ['**/Header/{LanguageSelect,Search}.tsx'] }),
		// Enable React for the Algolia search component.
		react({ include: ['**/Header/{LanguageSelect,Search}.tsx'] }),
	],
	site: `https://astro.build/`,
});
