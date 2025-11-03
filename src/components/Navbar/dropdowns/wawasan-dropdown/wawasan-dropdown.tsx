"use client";

import { WawasanCard } from "./wawasan-card";
import { WawasanNews } from "./wawasan-news";
import Link from "next/link";
import { useWawasanArticles } from "@/hooks/use-wawasan-articles";

export const WawasanDropdown = () => {
  const { articles, loading } = useWawasanArticles();

  return (
    <div className="flex flex-col max-h-[700px] overflow-hidden rounded-2xl">
      <div className="p-6 pb-4 flex-shrink-0">
        <Link href='/portofolio' className='pointer'>
          <WawasanCard />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-corvidian-3 scrollbar-track-transparent">
        <h2 className="text-white text-lg font-semibold mb-4">Newest</h2>

        <div className="space-y-6 pr-1">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 pb-6 border-b border-white/10 last:border-b-0"
                >
                  <div className="w-[175px] h-[100px] rounded-xl bg-corvidian-2/20 animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-corvidian-2/20 rounded animate-pulse" />
                    <div className="h-3 w-full bg-corvidian-2/20 rounded animate-pulse" />
                    <div className="h-3 w-5/6 bg-corvidian-2/20 rounded animate-pulse" />
                  </div>
                </div>
              ))
            : articles.map((item) => (
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
              ))}
        </div>
      </div>
    </div>
  );
};
