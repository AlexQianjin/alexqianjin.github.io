// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Alex Qin's Docs",
      social: {
        github: "https://github.com/AlexQianjin/alexqianjin.github.io",
        instagram: "https://instagram.com/thealexqin",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Linux",
          items: [
            { label: "cmd", slug: "linux/cmd" },
            { label: "vim", slug: "linux/vim" },
            { label: "git", slug: "linux/git" },
            { label: "docker", slug: "linux/docker" },
            { label: "ubuntu", slug: "linux/ubuntu" },
          ],
        },
        {
          label: "Note",
          items: [
            { label: "note", slug: "note/notes" },
            { label: "windows", slug: "note/windows" },
          ],
        },
        {
          label: "Code",
          items: [
            { label: "coding", slug: "code/coding-guideline" },
            { label: "javascript", slug: "code/javascript-coding-guideline" },
            { label: "language", slug: "code/language-guideline" },
            { label: "react", slug: "code/react-coding-guideline" },
          ],
        },
        {
          label: "Data",
          items: [
            { label: "data visualization", slug: "data/data-visualization" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
