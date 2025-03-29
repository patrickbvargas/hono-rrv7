import type { resolveSearchParams } from "~/features/employees/utils/search-params";

export type SearchParams = Awaited<ReturnType<typeof resolveSearchParams>>;
