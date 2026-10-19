import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { href } from '../../data/site';
import type { APIContext } from 'astro';
export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.locale === 'en');
  return rss({ title: 'Rizma Prawira — Notes & Perspectives', description: 'A space for curiosity, experiments, and everything in between.', site: context.site!, items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: href(`blog/${post.id}/`) })), customData: '<language>en</language>' });
}
