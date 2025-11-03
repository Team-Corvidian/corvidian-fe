import { useState } from "react";
import Link from "next/link";
import { useGlobalSearch } from "@/hooks/use-global-search";

interface GlobalSearchWidgetProps {
  placeholder?: string;
}

export const GlobalSearchWidget = ({
  placeholder = "Website, Landing Page, Sistem Internal..",
}: GlobalSearchWidgetProps) => {
  const [query, setQuery] = useState("");
  const { results, loading, error, hasResults } = useGlobalSearch(query);
  const showDropdown = query.trim().length > 0;

  return (
    <div className="mt-4 mb-[8px] w-full max-w-[410px]">
      <div className="relative">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="bg-white text-black px-3 py-2 rounded-3xl w-full h-[44px] focus:outline-none"
        />
        {showDropdown && (
          <div className="absolute left-0 right-0 mt-2 rounded-3xl bg-white text-[#1D1F26] shadow-xl border border-black/10 max-h-96 overflow-y-auto z-20">
            {loading && (
              <div className="px-4 py-3 text-sm text-[#1D1F26]/70">
                Mencari...
              </div>
            )}
            {!loading && error && (
              <div className="px-4 py-3 text-sm text-red-500">
                Terjadi kesalahan, coba lagi.
              </div>
            )}
            {!loading && !error && hasResults && (
              <div className="py-3 space-y-4">
                {results.map((group) => (
                  <div key={group.category}>
                    <div className="px-4 text-xs font-semibold uppercase text-[#1578CB] tracking-wide">
                      {group.label}
                    </div>
                    <div className="mt-2 space-y-2 px-4">
                      {group.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="block rounded-2xl border border-transparent px-3 py-2 hover:border-[#1578CB] hover:bg-[#1578CB]/10"
                        >
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                          <div className="text-xs text-[#1D1F26]/70 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loading && !error && !hasResults && (
              <div className="px-4 py-3 text-sm text-[#1D1F26]/70">
                Tidak ada hasil yang sesuai.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
