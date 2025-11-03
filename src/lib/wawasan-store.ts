"use client";

import { Article } from "@/modules/wawasan-module/interface";

export interface ArticlePreview {
  id: number;
  slug: string;
  cover_image: string;
  title: string;
  author: string;
  published_at: string;
  excerpt: string;
}

type Snapshot = {
  data: ArticlePreview[] | null;
  loading: boolean;
  error: unknown;
};

let data: ArticlePreview[] | null = null;
let error: unknown = null;
let promise: Promise<ArticlePreview[]> | null = null;
let currentSnapshot: Snapshot = { data: null, loading: true, error: null };

const listeners = new Set<() => void>();

const notify = () => {
  listeners.forEach((listener) => listener());
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "");

const hasOwn = Object.prototype.hasOwnProperty;

const snapshotsEqual = (a: Snapshot, b: Snapshot) =>
  a.data === b.data && a.loading === b.loading && a.error === b.error;

const createSnapshot = (base: Snapshot, next: Partial<Snapshot>): Snapshot => ({
  data: hasOwn.call(next, "data")
    ? ((next.data as ArticlePreview[] | null) ?? null)
    : base.data,
  loading: hasOwn.call(next, "loading")
    ? Boolean(next.loading)
    : base.loading,
  error: hasOwn.call(next, "error") ? next.error : base.error,
});

const setSnapshot = (next: Partial<Snapshot>) => {
  const updated = createSnapshot(currentSnapshot, next);
  if (snapshotsEqual(currentSnapshot, updated)) {
    return;
  }
  currentSnapshot = updated;
  notify();
};

const formatArticles = (articles: Article[]): ArticlePreview[] =>
  articles.slice(0, 25).map((article) => {
    const plain = stripHtml(article.content);
    const excerpt =
      plain.length > 200 ? `${plain.slice(0, 200).trimEnd()}…` : plain;
    return {
      id: article.id,
      slug: article.slug,
      cover_image: article.cover_image,
      title: article.title,
      author: article.author,
      published_at: article.published_at,
      excerpt,
    };
  });

const fetchArticles = async (): Promise<ArticlePreview[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    data = [];
    error = null;
    setSnapshot({ data, error, loading: false });
    return [];
  }
  const response = await fetch(`${baseUrl}/api/wawasan/`);
  if (!response.ok) {
    throw new Error("Failed to load wawasan articles");
  }
  const payload: Article[] = await response.json();
  const formatted = formatArticles(payload);
  data = formatted;
  error = null;
  setSnapshot({ data, error, loading: false });
  return formatted;
};

export const preloadWawasanArticles = () => {
  if (data) {
    return Promise.resolve(data);
  }
  if (promise) {
    return promise;
  }
  setSnapshot({ loading: true });
  promise = fetchArticles()
    .catch((err) => {
      error = err;
      setSnapshot({ error, loading: false });
      throw err;
    })
    .finally(() => {
      promise = null;
    });
  return promise;
};

export const getWawasanSnapshot = (): Snapshot => currentSnapshot;

export const getWawasanServerSnapshot = (): Snapshot => currentSnapshot;

export const subscribeWawasan = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
