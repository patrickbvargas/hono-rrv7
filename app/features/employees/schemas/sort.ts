import { z } from "zod";
import type { Employee } from "../types/employee";
import { sortSchema as sortBaseSchema } from "~/shared/schemas";

const allowedSortColumns = [
  "fullName",
  "oabNumber",
  "remunerationPercent",
  "role",
  "type",
  "_contractCount",
] as const satisfies ReadonlyArray<keyof Employee>;

export const sortSchema = sortBaseSchema.extend({
  sort: z.enum(allowedSortColumns).catch("fullName"),
});
