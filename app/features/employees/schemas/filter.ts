import { z } from "zod";
import type { EmployeeRole, EmployeeType } from "~/shared/types";

const employeeTypes = [
  "admin_assistant",
  "lawyer",
] as const satisfies ReadonlyArray<EmployeeType>;

const employeeRoles = [
  "user",
  "admin",
] as const satisfies ReadonlyArray<EmployeeRole>;

export const zFilter = z.object({
  search: z.string().catch(""),
  type: z.enum(employeeTypes).array().catch([]),
  role: z.enum(employeeRoles).array().catch([]),
});
export type Filter = z.infer<typeof zFilter>;
