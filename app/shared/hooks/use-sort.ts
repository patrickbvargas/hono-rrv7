import { useSearchParamsURL } from "~/shared/hooks";
import { sortSchema } from "../schemas/sort";

export function useSort() {
  const { pathname, searchParams, setSearchParams } = useSearchParamsURL();
  const { sort, order } = sortSchema.parse(Object.fromEntries(searchParams));

  const toggleDirection = (col: string) =>
    col === sort && order === "asc" ? "desc" : "asc";

  const buildSortParams = (column: string) => {
    searchParams.set("sort", column);
    searchParams.set("order", toggleDirection(column));
    searchParams.set("page", "1");
    return searchParams;
  };

  const getSortURL = (column: string) => {
    const params = buildSortParams(column);
    return `${pathname}?${params.toString()}`;
  };

  const handleSort = (column: string) => {
    const params = buildSortParams(column);
    setSearchParams(params);
  };

  return { sort, order, getSortURL, handleSort };
}
