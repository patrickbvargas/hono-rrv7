import type { EmployeeType, EmployeeRole } from "~/shared/types";

interface FilterOption<T> {
  value: T;
  label: string;
}

export const EMPLOYEE_TYPES: FilterOption<EmployeeType>[] = [
  { value: "lawyer", label: "Advogado" },
  { value: "admin_assistant", label: "Assist. Admin." },
];

export const EMPLOYEE_ROLES: FilterOption<EmployeeRole>[] = [
  { value: "user", label: "Usuário" },
  { value: "admin", label: "Admin" },
];
