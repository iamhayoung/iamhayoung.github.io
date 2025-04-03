import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  return rss({
    title: "iamhayoung-dev",
    description: "iamhayoung-dev is a devlog, built with Astro",
    site: context.site?.toString() ?? "",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ko-kr</language>`,
  });
}
