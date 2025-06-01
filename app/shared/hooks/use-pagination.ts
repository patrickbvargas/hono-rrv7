import { zPaginationBase } from "~/shared/schemas";
import { parseAsInteger, useQueryStates } from "nuqs";

export function usePagination() {
  const [rawPagination, setPagination] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      limit: parseAsInteger.withDefault(10),
    },
    {
      shallow: false,
    },
  );

  const pagination = zPaginationBase.parse(rawPagination);

  const handlePagination = (pageNumber: number) => {
    setPagination({
      page: pageNumber,
      limit: pagination.limit,
    });
  };

  return { pagination, handlePagination };
}
