import { NextResponse } from "next/server";
import { staticSearchItems, SearchCategory } from "@/lib/search-data";
import { Article } from "@/modules/wawasan-module/interface";

type DynamicCategory = SearchCategory | "wawasan";

interface SearchEntry {
  id: string;
  title: string;
  description: string;
  href: string;
  category: DynamicCategory;
  keywords: string[];
}

interface GroupedResult {
  category: DynamicCategory;
  label: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    href: string;
  }>;
}

const categoryLabels: Record<DynamicCategory, string> = {
  "it-infrastructure": "IT Infrastructure",
  "web-design-development": "Web Design & Development",
  "digital-software-solutions": "Digital Software Solutions",
  wawasan: "Wawasan",
};

const categoriesOrder: DynamicCategory[] = [
  "it-infrastructure",
  "web-design-development",
  "digital-software-solutions",
  "wawasan",
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const truncate = (value: string, maxLength: number) =>
  value.length <= maxLength ? value : `${value.slice(0, maxLength)}…`;

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "");

const buildStaticEntries = (): SearchEntry[] =>
  staticSearchItems.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    href: item.href,
    category: item.category,
    keywords: [item.title, item.description, ...item.keywords],
  }));

const buildWawasanEntries = async (): Promise<SearchEntry[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) return [];
  try {
    const response = await fetch(`${baseUrl}/api/wawasan/`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const data: Article[] = await response.json();
    return data.slice(0, 25).map((article) => {
      const text = stripHtml(article.content);
      return {
        id: `wawasan-${article.id}`,
        title: article.title,
        description: truncate(text.trim(), 160),
        href: `/tentang-kami/wawasan/${article.slug}`,
        category: "wawasan" as const,
        keywords: [
          article.title,
          article.author ?? "",
          article.slug,
          text,
        ].filter(Boolean),
      };
    });
  } catch {
    return [];
  }
};

const filterEntries = (entries: SearchEntry[], query: string) => {
  const normalizedQuery = normalize(query);
  return entries.filter((entry) => {
    const searchable = entry.keywords.map((value) => normalize(value));
    return searchable.some((value) => value.includes(normalizedQuery));
  });
};

const groupEntries = (entries: SearchEntry[]): GroupedResult[] => {
  const grouped = new Map<DynamicCategory, GroupedResult>();
  for (const category of categoriesOrder) {
    grouped.set(category, {
      category,
      label: categoryLabels[category],
      items: [],
    });
  }
  for (const entry of entries) {
    const bucket = grouped.get(entry.category);
    if (!bucket) continue;
    if (bucket.items.length >= 5) continue;
    bucket.items.push({
      id: entry.id,
      title: entry.title,
      description: entry.description,
      href: entry.href,
    });
  }
  return Array.from(grouped.values()).filter((group) => group.items.length > 0);
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  if (!query || !query.trim()) {
    return NextResponse.json({ query: query ?? "", results: [] });
  }
  const staticEntries = buildStaticEntries();
  const wawasanEntries = await buildWawasanEntries();
  const combined = [...staticEntries, ...wawasanEntries];
  const filtered = filterEntries(combined, query.trim());
  const grouped = groupEntries(filtered);
  return NextResponse.json({ query, results: grouped });
}
