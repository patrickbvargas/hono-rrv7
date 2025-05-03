import {
  Wrapper,
  WrapperFooter,
  WrapperContent,
  Pagination,
  WrapperHeader,
} from "~/shared/components";
import { columns } from "../constants/columns";
import { DataTable } from "~/shared/components";
import type { EmployeeSchema } from "../types/employee";

interface EmployeesProps {
  data: EmployeeSchema[];
  count: number;
}
export const Employees = ({ data, count }: EmployeesProps) => {
  return (
    <Wrapper>
      <WrapperHeader>Teste</WrapperHeader>
      <WrapperContent>
        <DataTable columns={columns} data={data} />
      </WrapperContent>
      <WrapperFooter>
        <Pagination totalRecords={count} />
      </WrapperFooter>
    </Wrapper>
  );
};
