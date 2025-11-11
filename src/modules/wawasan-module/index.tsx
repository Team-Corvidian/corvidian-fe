import type { ArticlePreview } from "@/lib/api/wawasan-api";
import { WawasanSection } from "./section/wawasan-section";
import { ArticleDetail } from "./interface";

interface Props {
  article: ArticleDetail;
  articles: ArticlePreview[];
}

export const WawasanModule = ({ article, articles }: Props) => {
  return <WawasanSection article={article} articles={articles} />;
};
