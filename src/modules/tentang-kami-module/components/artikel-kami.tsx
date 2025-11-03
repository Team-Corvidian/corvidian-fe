"use client";

import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useWawasanArticles } from "@/hooks/use-wawasan-articles";

export const ArtikelKami = () => {
  const { articles, loading } = useWawasanArticles();

  return (
    <div className="py-16 max-w-[871px] px-[180px] space-y-6 text-corvidian-1">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Wawasan</h2>

        <div className="space-y-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-4 pb-4 border-b-2 border-[#878787]"
                >
                  <Skeleton className="w-full sm:w-[212px] h-[141px] rounded-lg" />
                  <div className="flex-1 max-w-[623px] space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))
            : articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/tentang-kami/wawasan/${article.slug}`}
                  className="flex flex-col sm:flex-row gap-4 pb-4 border-b-2 border-[#878787] items-center hover:opacity-90 transition"
                >
                  <div className="relative w-full sm:w-48 h-32">
                    <Image
                      src={article.cover_image}
                      alt={article.title}
                      fill
                      className="rounded-lg object-cover"
                      style={{ maxWidth: "212px", maxHeight: "141px" }}
                    />
                  </div>
                  <div className="flex-1 max-w-[623px]">
                    <h3 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};
