import {
  Wrapper,
  WrapperHeader,
  WrapperFooter,
  WrapperScrollArea,
} from "~/shared/components";
import { columns } from "../configs/columns";
import { DataTable } from "~/shared/components";
import type { Employee } from "../types/employee";
import { Search, Pagination } from "~/shared/components";

interface EmployeesProps {
  data: Employee[];
  count: number;
}
export const Employees = ({ data, count }: EmployeesProps) => {
  return (
    <Wrapper>
      <WrapperHeader>
        <Search />
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
