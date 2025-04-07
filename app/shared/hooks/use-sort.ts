import { sortSchema } from "../schemas/sort";
import { useURLParams } from "~/shared/hooks";

export function useSort() {
  const { pathname, searchParams, setSearchParams } = useURLParams();
  const { sort, order } = sortSchema.parse(Object.fromEntries(searchParams));

  const toggleDirection = (col: string) =>
    col === sort && order === "asc" ? "desc" : "asc";

  const buildSortParams = (column: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", column);
    params.set("order", toggleDirection(column));
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

  return { sort, order, getSortURL, handleSort };
}
