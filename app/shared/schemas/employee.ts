import { z } from "zod";

export const zEmployeeBase = z.object({
  id: z.string(),
  fullName: z.string(),
  oabNumber: z.string().nullable(),
  remunerationPercent: z.number(),
  type: z.enum(["lawyer", "admin_assistant"]),
  role: z.enum(["user", "admin"]),
  slug: z.string(),
  status: z.enum(["active", "inactive"]),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});
