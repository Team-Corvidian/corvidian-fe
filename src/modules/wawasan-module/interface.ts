export interface ArticlePreview {
  id: number;
  slug: string;
  cover_image: string;
  title: string;
  author: string;
  published_at: string;
  excerpt: string;
}

export interface ArticleDetail extends ArticlePreview {
  content: string;
}
