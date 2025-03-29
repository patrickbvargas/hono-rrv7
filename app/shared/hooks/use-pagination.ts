import { useSearchParamsURL } from "~/shared/hooks";
import { paginationSchema } from "~/shared/schemas";

export function usePagination() {
  const { pathname, searchParams, setSearchParams } = useSearchParamsURL();
  const { page, limit } = paginationSchema.parse(
    Object.fromEntries(searchParams),
  );

  const buildPaginationParams = (page: number) => {
    searchParams.set("page", page.toString());
    searchParams.set("limit", limit.toString());
    return searchParams;
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
