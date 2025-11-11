import Image from "next/image";
import Link from "next/link";
import { ArticlePreview } from "@/lib/api/wawasan-api";

interface Props {
  articles: ArticlePreview[];
}

export const ArtikelKami = ({ articles }: Props) => {
  return (
    <div className="py-8 sm:py-12 md:py-14 lg:py-16 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[180px] text-corvidian-1">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8">
          Wawasan
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {articles.length === 0 ? (
            <p className="text-sm sm:text-base text-gray-500">
              Belum ada artikel.
            </p>
          ) : (
            articles.map((article) => (
              <Link
                key={article.id}
                href={`/tentang-kami/wawasan/${article.slug}`}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 sm:pb-5 md:pb-6 border-b-2 border-[#878787] hover:opacity-80 transition-opacity duration-200 group"
              >
                <div className="relative w-full sm:w-40 md:w-48 lg:w-52 xl:w-56 h-40 sm:h-28 md:h-32 lg:h-36 xl:h-40 flex-shrink-0">
                  <Image
                    src={article.cover_image}
                    alt={article.title}
                    fill
                    className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-2.5 md:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
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
