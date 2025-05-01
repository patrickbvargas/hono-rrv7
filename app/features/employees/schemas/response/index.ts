import { z } from "zod";
import { employeeSchema } from "./employee";

export const responseSchema = z.object({
  count: z.number(),
  data: employeeSchema.array(),
});
