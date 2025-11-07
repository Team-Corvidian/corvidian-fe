import {
  fetchWawasanArticle,
  fetchWawasanPreviews,
} from "@/lib/api/wawasan-api";
import { WawasanModule } from "@/modules/wawasan-module";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([
    fetchWawasanArticle(slug).catch(() => null),
    fetchWawasanPreviews().catch(() => []),
  ]);

  if (!article)
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-corvidian-1">
        Artikel tidak ditemukan.
      </div>
    );

  return <WawasanModule article={article} articles={articles} />;
}
