import { z } from "zod";

export const zSearchBase = z.object({
  query: z.string().catch(""),
});
