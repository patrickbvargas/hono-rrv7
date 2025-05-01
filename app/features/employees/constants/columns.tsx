import { Ellipsis } from "lucide-react";
import { formatter } from "~/shared/utils";
import { Badge } from "~/shared/components";
import { type ColumnDef } from "@tanstack/react-table";
import type { EmployeeSchema } from "../types/employee";

export const columns: ColumnDef<EmployeeSchema>[] = [
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
      <Badge className="uppercase" variant="secondary">
        {formatter.employeeRole(row.original.role)}
      </Badge>
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    enableSorting: false,
    cell: () => <Ellipsis className="size-4" />,
  },
];
