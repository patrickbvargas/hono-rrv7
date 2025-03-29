import { z } from "zod";

export const filterSchema = z
  .object({
    type: z.string(),
    role: z.string(),
    status: z.string(),
  })
  .partial();
