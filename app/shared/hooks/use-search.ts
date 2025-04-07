import { searchSchema } from "~/shared/schemas";
import { useURLParams, useDebouncedCallback } from "~/shared/hooks";

export function useSearch() {
  const { searchParams, setSearchParams } = useURLParams();
  const { query } = searchSchema.parse(Object.fromEntries(searchParams));

  const handleSearch = useDebouncedCallback((query: string) => {
    setSearchParams((prev) => {
      if (query) {
        prev.set("query", query);
      } else {
        prev.delete("query");
      }
      prev.set("page", "1");
      return prev;
    });
  }, 300);

  return { query, handleSearch };
}
