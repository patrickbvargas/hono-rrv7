import { payloadSchema } from "../schemas/payload";
import { sortSchema } from "../schemas/payload/sort";
import type { PayloadSchema } from "../types/payload";
import { filterSchema } from "../schemas/payload/filter";
import { paginationSchema, searchSchema } from "~/shared/schemas";

export function parseUrlParams(requestUrl: string) {
  const s = Object.fromEntries(new URL(requestUrl).searchParams);

  const rawPayload: PayloadSchema = {
    pagination: paginationSchema.parse(s),
    search: searchSchema.parse(s),
    sorting: sortSchema.parse(s),
    filter: filterSchema.parse(s),
  };

  return payloadSchema.parse(rawPayload);
}
