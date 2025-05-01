import { z } from "zod";
import { employeeSchema } from "../schemas/response/employee";

export type EmployeeSchema = z.infer<typeof employeeSchema>;
