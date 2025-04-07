import * as React from "react";
import { Link } from "react-router";
import { cn } from "~/shared/utils";
import { useSort } from "~/shared/hooks";
import { ChevronDownIcon } from "lucide-react";

interface SortingLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "to"> {
  column: string;
  isSortable?: boolean;
}
export const SortingLink = ({
  column,
  isSortable,
  children,
}: SortingLinkProps) => {
  const { sort, order, getSortURL } = useSort();

  const isSorted = sort === column;
  const isAscending = order === "asc";

  return (
    <Link
      to={getSortURL(column)}
      className={cn(
        "size-full flex items-center justify-between gap-2 px-2",
        !isSortable && "pointer-events-none",
      )}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          "size-4 transition duration-300",
          (!isSortable || !isSorted) && "invisible",
          isAscending && "rotate-180",
        )}
      />
    </Link>
  );
};
