import { Chip } from "@heroui/react";
import { Ellipsis } from "lucide-react";
import { formatter } from "~/shared/utils";
import type { Employee } from "../types/employee";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "fullName",
    header: "Nome",
    enableSorting: true,
    meta: {
      headerClassName: "md:min-w-[260px]",
    },
  },
  {
    accessorKey: "oabNumber",
    header: "OAB",
    cell: ({ row }) =>
      row.original.oabNumber && formatter.oab(row.original.oabNumber),
    enableSorting: true,
  },
  {
    accessorKey: "type",
    header: "Cargo",
    cell: ({ row }) => formatter.employeeType(row.original.type),
    enableSorting: true,
  },
  {
    accessorKey: "remunerationPercent",
    header: "Remuneração",
    cell: ({ row }) => formatter.percent(row.original.remunerationPercent),
    enableSorting: true,
  },
  {
    accessorKey: "_contractCount",
    header: "Contratos",
    enableSorting: true,
  },
  {
    accessorKey: "role",
    header: "Perfil",
    cell: ({ row }) => (
      <Chip size="sm" className="uppercase">
        {formatter.employeeRole(row.original.role)}
      </Chip>
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    enableSorting: false,
    cell: () => <Ellipsis className="size-4" />,
  },
];
