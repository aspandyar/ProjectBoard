import { getArticleBySlug } from '@/data/articles';

export async function GET(request, { params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return new Response(null, { status: 404 });
  }
  return Response.json(article);
}
