"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  ArticlePreview,
  getWawasanSnapshot,
  getWawasanServerSnapshot,
  preloadWawasanArticles,
  subscribeWawasan,
} from "@/lib/wawasan-store";

export const useWawasanArticles = () => {
  const snapshot = useSyncExternalStore(
    subscribeWawasan,
    getWawasanSnapshot,
    getWawasanServerSnapshot
  );

  const articles = (snapshot.data ?? []) as ArticlePreview[];

  useEffect(() => {
    preloadWawasanArticles().catch(() => {});
  }, []);

  return {
    articles,
    loading: snapshot.loading,
    error: snapshot.error,
  };
};
