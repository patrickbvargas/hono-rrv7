import { zSort } from "../schemas/sort";
import { zFilter } from "../schemas/filter";
import type { Payload } from "../types/payload";
import { zPaginationBase, zSearchBase } from "~/shared/schemas";

export function loadSearchParams(request: Request) {
  const s = Object.fromEntries(new URL(request.url).searchParams);

  const payload: Payload = {
    pagination: zPaginationBase.parse(s),
    search: zSearchBase.parse(s),
    sorting: zSort.parse(s),
    filter: zFilter.parse(s),
  };

  return payload;
}
