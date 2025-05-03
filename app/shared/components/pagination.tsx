import { usePagination } from "~/shared/hooks";
import { Pagination as PaginationPrimitive } from "@heroui/react";

interface PaginationProps {
  totalRecords: number;
}
export const Pagination = ({ totalRecords = 0 }: PaginationProps) => {
  const {
    page: currentPage,
    limit: pageSize,
    handlePagination,
  } = usePagination();

  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <PaginationPrimitive
      page={currentPage}
      total={totalPages}
      onChange={handlePagination}
      showControls
    />
  );
};
