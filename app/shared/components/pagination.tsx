import { usePagination } from "~/shared/hooks";
import { Pagination as PaginationPrimitive } from "@heroui/react";

interface PaginationProps {
  totalRecords: number;
}
export const Pagination = ({ totalRecords = 0 }: PaginationProps) => {
  const { pagination, handlePagination } = usePagination();

  const totalPages = Math.ceil(totalRecords / pagination.limit);

  return (
    <PaginationPrimitive
      page={pagination.page}
      total={totalPages}
      onChange={handlePagination}
      showControls
    />
  );
};
