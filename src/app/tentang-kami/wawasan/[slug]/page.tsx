import { WawasanModule } from "@/modules/wawasan-module";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/wawasan/slug/${slug}/`,
    { cache: "no-store" }
  );

  if (!res.ok)
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-corvidian-1">
        Artikel tidak ditemukan.
      </div>
    );

  const article = await res.json();

  return <WawasanModule article={article} />;
}
