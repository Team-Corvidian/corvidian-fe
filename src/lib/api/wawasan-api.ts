import {
  ArticleDetail,
  ArticlePreview,
} from "@/modules/wawasan-module/interface";

export type { ArticleDetail, ArticlePreview } from "@/modules/wawasan-module/interface";

type FetchInit = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

const withDefaultInit = (init?: FetchInit): FetchInit => {
  const isDev = process.env.NODE_ENV !== "production";
  const defaults: FetchInit = {
    cache: isDev ? "no-store" : "force-cache",
  };

  if (!isDev) {
    defaults.next = { revalidate: 300 };
  }

  return {
    ...defaults,
    ...init,
    cache: init?.cache ?? defaults.cache,
    next: init?.next ?? defaults.next,
  };
};

const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;

type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

const emptyPaginated = <T>(): PaginatedResponse<T> => ({
  count: 0,
  next: null,
  previous: null,
  results: [],
});

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "");

const truncateWords = (value: string, maxWords = 50) => {
  const words = value.trim().split(/\s+/);
  if (words.length <= maxWords) {
    return value.trim();
  }
  return `${words.slice(0, maxWords).join(" ")}…`;
};

const toArticlePreview = (
  article: ArticlePreview | ArticleDetail
): ArticlePreview => ({
  id: article.id,
  slug: article.slug,
  cover_image: article.cover_image,
  title: article.title,
  author: article.author,
  published_at: article.published_at,
  excerpt: truncateWords(stripHtml(article.excerpt ?? "")),
});

const toArticlePreviews = (
  articles: Array<ArticlePreview | ArticleDetail>
): ArticlePreview[] => articles.map(toArticlePreview);

export const fetchWawasanArticles = async (
  init?: RequestInit
): Promise<PaginatedResponse<ArticlePreview>> => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    return emptyPaginated();
  }

  const response = await fetch(`${baseUrl}/api/wawasan/`, withDefaultInit(init));
  if (!response.ok) {
    throw new Error("Failed to load wawasan articles");
  }

  const data = (await response.json()) as PaginatedResponse<ArticlePreview>;
  return {
    ...data,
    results: toArticlePreviews(data.results),
  };
};

export const fetchWawasanArticle = async (
  slug: string,
  init?: RequestInit
): Promise<ArticleDetail | null> => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    return null;
  }

  const response = await fetch(
    `${baseUrl}/api/wawasan/slug/${slug}/`,
    withDefaultInit(init)
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load wawasan article");
  }

  const data = (await response.json()) as ArticleDetail;
  return {
    ...data,
    excerpt: data.excerpt ?? "",
  };
};

export const fetchWawasanPreviews = async (
  init?: RequestInit
): Promise<ArticlePreview[]> => {
  try {
    const data = await fetchWawasanArticles(init);
    return data.results;
  } catch {
    return [];
  }
};

export const buildArticlePreviews = toArticlePreviews;
