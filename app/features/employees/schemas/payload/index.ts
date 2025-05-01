import { z } from "zod";
import { sortSchema } from "./sort";
import { filterSchema } from "./filter";
import { paginationSchema, searchSchema } from "~/shared/schemas";

export const payloadSchema = z.object({
  pagination: paginationSchema,
  search: searchSchema,
  sorting: sortSchema,
  filter: filterSchema,
});
