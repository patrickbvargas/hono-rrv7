import type { z } from "zod";
import { employeeSchema } from "../schemas/employee";

export type Employee = z.infer<typeof employeeSchema>;
