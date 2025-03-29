import { sortSchema } from "../schemas/sort";
import { filterSchema } from "../schemas/filter";
import { paginationSchema, searchSchema } from "~/shared/schemas";

export function resolveSearchParams(requestUrl: string) {
  const s = Object.fromEntries(new URL(requestUrl).searchParams);

  return {
    pagination: paginationSchema.parse(s),
    search: searchSchema.parse(s),
    sorting: sortSchema.parse(s),
    filter: filterSchema.parse(s),
  };
}
