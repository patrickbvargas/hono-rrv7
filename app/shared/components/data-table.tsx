import {
  cn,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  type TableProps,
} from "@heroui/react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  type ColumnDef,
} from "@tanstack/react-table";
import { useSort } from "~/shared/hooks";

interface DataTableProps<TData, TValue> extends TableProps {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export const DataTable = <TData, TValue>({
  columns,
  data,
  ...props
}: DataTableProps<TData, TValue>) => {
  const { sort, handleSort } = useSort();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table
      sortDescriptor={{
        column: sort.column ?? "",
        direction: sort.direction ?? "ascending",
      }}
      onSortChange={({ column }) => handleSort(String(column))}
      removeWrapper
      isHeaderSticky
      selectionMode="single"
      {...props}
    >
      <TableHeader>
        {table.getHeaderGroups().flatMap(({ headers }) =>
          headers.map(({ id, column, getContext }) => (
            <TableColumn
              key={id}
              allowsSorting={column.columnDef.enableSorting}
              className={cn(
                "uppercase",
                column.columnDef.meta?.headerClassName,
              )}
            >
              {flexRender(column.columnDef.header, getContext())}
            </TableColumn>
          )),
        )}
      </TableHeader>
      <TableBody emptyContent="Nenhum registro encontrado.">
        {table
          .getRowModel()
          .rows.map(({ id, getIsSelected, getVisibleCells }) => (
            <TableRow key={id} data-state={getIsSelected() && "selected"}>
              {getVisibleCells().map(({ id, column, getContext }) => (
                <TableCell
                  key={id}
                  className={column.columnDef.meta?.cellClassName}
                >
                  {flexRender(column.columnDef.cell, getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
