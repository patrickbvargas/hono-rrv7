import { zSearchBase } from "~/shared/schemas";
import { useDebouncedCallback } from "~/shared/hooks";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useSearch() {
  const [rawQuery, setQuery] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    {
      shallow: false,
    },
  );

  const query = zSearchBase.parse(rawQuery).query;

  const handleSearch = useDebouncedCallback((query: string) => {
    setQuery({
      query,
      page: 1,
    });
  }, 300);

  return { query, handleSearch };
}
