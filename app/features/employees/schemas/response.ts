import { z } from "zod";
import { zEmployee } from "./employee";

export const zResponse = z.object({
  count: z.number(),
  data: zEmployee.array(),
});
