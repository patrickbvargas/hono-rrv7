import {
  Wrapper,
  WrapperHeader,
  WrapperFooter,
  WrapperScrollArea,
} from "~/shared/components";
import { columns } from "../constants/columns";
import { DataTable } from "~/shared/components";
import type { EmployeeSchema } from "../types/employee";
import { Search, Pagination } from "~/shared/components";

interface EmployeesProps {
  data: EmployeeSchema[];
  count: number;
}
export const Employees = ({ data, count }: EmployeesProps) => {
  return (
    <Wrapper>
      <WrapperHeader>
        <Search placeholder="Filtrar por nome ou OAB..." />
      </WrapperHeader>
      <WrapperScrollArea>
        <DataTable columns={columns} data={data} />
      </WrapperScrollArea>
      <WrapperFooter>
        <Pagination totalRecords={count} />
      </WrapperFooter>
    </Wrapper>
  );
};
