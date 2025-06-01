import { zFilter, type Filter } from "../schemas/filter";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

export function useFilter() {
  const [rawFilter, setFilter] = useQueryStates(
    {
      search: parseAsString.withDefault(""),
      role: parseAsArrayOf(parseAsString).withDefault([]),
      type: parseAsArrayOf(parseAsString).withDefault([]),
    },
    {
      shallow: false,
    },
  );

  const filter = zFilter.parse(rawFilter);

  const handleFilter = (filter: Filter) => {
    setFilter(filter);
  };

  return { filter, handleFilter };
}
