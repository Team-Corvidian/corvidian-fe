import Image from "next/image";
import Link from "next/link";
import type { ArticlePreview } from "@/lib/api/wawasan-api";

interface Props {
  currentSlug: string;
  articles: ArticlePreview[];
}

export const ArtikelTerkait = ({ currentSlug, articles }: Props) => {
  const related = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="py-20 w-screen max-w-[871px] mx-auto text-corvidian-1">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Artikel Terkait Lainnya.</h2>

        <div className="space-y-6">
          {related.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada artikel terkait.</p>
          ) : (
            related.map((article) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};
