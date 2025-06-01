import {
  Wrapper,
  WrapperFooter,
  WrapperContent,
  Pagination,
  WrapperHeader,
  Search,
} from "~/shared/components";
import { EmployeesFilter } from "./filter";
import { columns } from "../constants/columns";
import { DataTable } from "~/shared/components";
import type { Employee } from "../types/employee";

interface EmployeesProps {
  data: Employee[];
  count: number;
}
export const Employees = ({ data, count }: EmployeesProps) => {
  return (
    <Wrapper>
      <WrapperHeader>
        <Search placeholder="Filtrar por nome ou OAB..." />
        <EmployeesFilter />
      </WrapperHeader>
      <WrapperContent>
        <DataTable
          columns={columns}
          data={data}
          aria-label="Tabela de funcionários"
        />
      </WrapperContent>
      <WrapperFooter>
        <Pagination totalRecords={count} />
      </WrapperFooter>
    </Wrapper>
  );
};
