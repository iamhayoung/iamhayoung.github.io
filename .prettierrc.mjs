// https://github.com/withastro/prettier-plugin-astro

/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: true,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
