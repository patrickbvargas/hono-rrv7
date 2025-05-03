import { sortSchema } from "../schemas/sort";
import { useURLParams } from "~/shared/hooks";
import type { SortDescriptor } from "@heroui/react";

export function useSort() {
  const { pathname, searchParams, setSearchParams } = useURLParams();
  const { column, direction } = sortSchema.parse(
    Object.fromEntries(searchParams),
  );

  const toggleDirection = (col: string): SortDescriptor["direction"] =>
    col === column && direction === "ascending" ? "descending" : "ascending";

  const buildSortParams = (column: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("column", column);
    params.set("direction", toggleDirection(column));
    params.set("page", "1");
    return params;
  };

  const getSortURL = (column: string) => {
    const params = buildSortParams(column);
    return `${pathname}?${params.toString()}`;
  };

  const handleSort = (column: string) => {
    const params = buildSortParams(column);
    setSearchParams(params);
  };

  return { column, direction, getSortURL, handleSort };
}
