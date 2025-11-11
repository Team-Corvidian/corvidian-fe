"use client";

import Link from "next/link";
import { WawasanCard } from "./wawasan-card";
import { WawasanNews } from "./wawasan-news";
import type { ArticlePreview } from "@/lib/api/wawasan-api";

interface Props {
  articles: ArticlePreview[];
  onLinkClick?: () => void;
}

export const WawasanDropdown = ({ articles, onLinkClick }: Props) => {
  const items = articles.slice(0, 4);
  
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-col max-h-[700px] overflow-hidden rounded-2xl">
        <div className="p-6 pb-4 flex-shrink-0">
          <Link href="/portofolio" className="pointer">
            <WawasanCard />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-corvidian-3 scrollbar-track-transparent">
          <h2 className="text-white text-lg font-semibold mb-4">Newest</h2>

          <div className="space-y-6 pr-1">
            {items.length === 0 ? (
              <p className="text-sm text-white/60">Belum ada artikel.</p>
            ) : (
              items.map((item) => (
                <Link
                  key={item.id}
                  href={`/tentang-kami/wawasan/${item.slug}`}
                  className="block"
                >
                  <WawasanNews
                    image={item.cover_image}
                    date={
                      item.published_at
                        ? new Date(item.published_at).toDateString()
                        : ""
                    }
                    title={item.title}
                    description={item.excerpt}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex lg:hidden flex-col">
        {/* Wawasan Card */}
        <Link href="/portofolio" onClick={onLinkClick}>
          <WawasanCard />
        </Link>

        {/* Newest Articles */}
        <div className="mt-4">
          <h2 className="text-corvidian-1 text-sm font-semibold mb-3">
            Newest
          </h2>
          <div className="space-y-3">
            {items.length === 0 ? (
              <p className="text-xs text-gray-500">
                Belum ada artikel.
              </p>
            ) : (
              items.map((item) => (
                <Link
                  key={item.id}
                  href={`/tentang-kami/wawasan/${item.slug}`}
                  onClick={onLinkClick}
                >
                  <WawasanNews
                    image={item.cover_image}
                    date={
                      item.published_at
                        ? new Date(item.published_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })
                        : ""
                    }
                    title={item.title}
                    description={item.excerpt}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
