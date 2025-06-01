import { z } from "zod";
import { zEmployeeBase } from "~/shared/schemas";

export const zEmployee = zEmployeeBase
  .pick({
    id: true,
    fullName: true,
    oabNumber: true,
    remunerationPercent: true,
    type: true,
    role: true,
  })
  .extend({
    _contractCount: z.coerce.number(),
  });
