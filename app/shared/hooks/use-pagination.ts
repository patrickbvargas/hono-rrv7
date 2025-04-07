import { useURLParams } from "~/shared/hooks";
import { paginationSchema } from "~/shared/schemas";

export function usePagination() {
  const { pathname, searchParams, setSearchParams } = useURLParams();
  const { page, limit } = paginationSchema.parse(
    Object.fromEntries(searchParams),
  );

  const buildPaginationParams = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    params.set("limit", limit.toString());
    return params;
  };

  const getPageURL = (pageNumber: number) => {
    const params = buildPaginationParams(pageNumber);
    return `${pathname}?${params.toString()}`;
  };

  const handlePagination = (pageNumber: number) => {
    const params = buildPaginationParams(pageNumber);
    setSearchParams(params);
  };

  return { page, limit, getPageURL, handlePagination };
}
