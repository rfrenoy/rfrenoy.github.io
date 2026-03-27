import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const blogPosts = await getCollection("blog");
  const dailyFeedPosts = await getCollection("daily-feed");

  const allPosts = [
    ...blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      pubDate: new Date(post.data.date),
      link: `/blog/${post.id}/`,
    })),
    ...dailyFeedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      pubDate: new Date(post.data.date),
      link: `/daily-feed/${post.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "Rémy Frenoy",
    description: "Blog posts and daily AI-curated feed digests.",
    site: context.site!,
    items: allPosts,
  });
}
