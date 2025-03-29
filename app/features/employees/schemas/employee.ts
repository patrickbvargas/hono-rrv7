import { z } from "zod";
import { employeeBaseSchema } from "~/shared/schemas";

export const employeeSchema = employeeBaseSchema
  .pick({
    id: true,
    fullName: true,
    oabNumber: true,
    remunerationPercent: true,
    type: true,
    role: true,
  })
  .extend({
    _contractCount: z.number(),
  });
