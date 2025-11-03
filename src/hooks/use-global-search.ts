import { useEffect, useMemo, useState } from "react";

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface SearchResultGroup {
  category: string;
  label: string;
  items: SearchResultItem[];
}

interface SearchResponse {
  query: string;
  results: SearchResultGroup[];
}

const debounceDelay = 300;

export const useGlobalSearch = (query: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [data, setData] = useState<SearchResultGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), debounceDelay);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setData([]);
      setError(null);
      return;
    }
    const controller = new AbortController();
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedQuery.trim())}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const payload: SearchResponse = await response.json();
        setData(payload.results);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err as Error);
        setData([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    run();
    return () => controller.abort();
  }, [debouncedQuery]);

  const hasResults = useMemo(
    () => data.some((group) => group.items.length > 0),
    [data]
  );

  return {
    results: data,
    loading,
    error,
    hasResults,
    debouncedQuery,
  };
};
