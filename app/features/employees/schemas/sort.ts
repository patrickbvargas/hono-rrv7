import { z } from "zod";
import { zSortBase } from "~/shared/schemas";
import type { Employee } from "../types/employee";

const allowedSortColumns = [
  "fullName",
  "oabNumber",
  "remunerationPercent",
  "role",
  "type",
  "_contractCount",
] as const satisfies ReadonlyArray<keyof Employee>;

export const zSort = zSortBase.extend({
  column: z.enum(allowedSortColumns).catch("fullName"),
});
