import type { parseUrlParams } from "~/features/employees/utils/url-parser";

export type UrlParams = Awaited<ReturnType<typeof parseUrlParams>>;
