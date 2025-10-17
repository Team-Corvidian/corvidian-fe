import { WawasanHero } from "../components/wawasan-hero";
import { ArtikelTerkait } from "../components/artikel-terkait";

interface Article {
  slug: string;
  cover_image: string;
  title: string;
  author: string;
  published_at: string;
  content: string;
}

export const WawasanSection = ({ article }: { article: Article }) => {
  return (
    <main className="min-h-screen">
      <WawasanHero
        cover_image={article.cover_image}
        title={article.title}
        author={article.author}
        published_at={article.published_at}
      />

      <section className="w-full">
        <div className="-translate-y-20">
          <div className="w-full p-10 rounded-tr-[110px] bg-[#F4F4F4]">
            <article
              className="prose text-gray-800 leading-relaxed max-w-[924px] mx-auto pt-20 text-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      <ArtikelTerkait currentSlug={article.slug} />
    </main>
  );
};
