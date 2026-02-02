import { ARTICLES } from '@/data/articles';

export async function GET() {
  return Response.json(ARTICLES);
}
