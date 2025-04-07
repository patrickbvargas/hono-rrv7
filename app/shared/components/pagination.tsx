import * as React from "react";
import { cn } from "~/shared/utils";
import {
  Pagination as PaginationPrimitive,
  PaginationContent,
  PaginationFeedback,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { usePagination } from "~/shared/hooks";

interface PaginationProps
  extends React.ComponentProps<typeof PaginationPrimitive> {
  totalRecords: number;
  siblingCount?: number;
}
export const Pagination = ({
  totalRecords = 0,
  siblingCount = 2,
  className,
  ...props
}: PaginationProps) => {
  const { page: currentPage, limit: pageSize, getPageURL } = usePagination();

  if (totalRecords === 0) return null;

  const totalPages = Math.ceil(totalRecords / pageSize);
  const totalDisplayPages = 1 + siblingCount * 2;

  const startPage = Math.max(
    1,
    Math.min(currentPage - siblingCount, totalPages - totalDisplayPages + 1),
  );
  const endPage = Math.min(totalPages, startPage + totalDisplayPages - 1);

  const renderPageLinks = () =>
    Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <PaginationItem key={pageNumber}>
          <PaginationLink
            to={getPageURL(pageNumber)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    });

  const generateFeedback = () => {
    const initialItem = (currentPage - 1) * pageSize + 1;
    const finalItem = Math.min(initialItem + pageSize - 1, totalRecords);
    const entityName = totalRecords === 1 ? "registro" : "registros";
    return `${initialItem}-${finalItem} de ${totalRecords} ${entityName}`;
  };

  const isFirstPreviousDisabled = currentPage <= 1;
  const isLastNextDisabled = currentPage >= totalPages;

  return (
    <PaginationPrimitive
      className={cn(
        "flex flex-col-reverse gap-3 items-center sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    >
      <PaginationFeedback>{generateFeedback()}</PaginationFeedback>
      <PaginationContent>
        <PaginationItem isDisabled={isFirstPreviousDisabled}>
          <PaginationFirst to={getPageURL(1)} />
        </PaginationItem>
        <PaginationItem isDisabled={isFirstPreviousDisabled}>
          <PaginationPrevious to={getPageURL(currentPage - 1)} />
        </PaginationItem>
        {renderPageLinks()}
        <PaginationItem isDisabled={isLastNextDisabled}>
          <PaginationNext to={getPageURL(currentPage + 1)} />
        </PaginationItem>
        <PaginationItem isDisabled={isLastNextDisabled}>
          <PaginationLast to={getPageURL(totalPages)} />
        </PaginationItem>
      </PaginationContent>
    </PaginationPrimitive>
  );
};
