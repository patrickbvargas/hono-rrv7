import { zSortBase } from "~/shared/schemas";
import type { SortDirection } from "~/shared/types";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useSort() {
  const [rawSort, setSort] = useQueryStates(
    {
      column: parseAsString.withDefault(""),
      direction: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    {
      shallow: false,
    },
  );

  const sort = zSortBase.parse(rawSort);

  const toggleDirection = (column: string): SortDirection => {
    return column === sort.column && sort.direction === "ascending"
      ? "descending"
      : "ascending";
  };

  const handleSort = (column: string) => {
    setSort({
      column,
      direction: toggleDirection(column),
      page: 1,
    });
  };

  return { sort, handleSort };
}
