import { z } from "zod";
import { zEmployee } from "../schemas/employee";

export type Employee = z.infer<typeof zEmployee>;
