import { z } from "zod";
import { zSort } from "./sort";
import { zFilter } from "./filter";
import { zPaginationBase, zSearchBase } from "~/shared/schemas";

export const zPayload = z.object({
  pagination: zPaginationBase,
  search: zSearchBase,
  sorting: zSort,
  filter: zFilter,
});
