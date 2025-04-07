import { z } from "zod";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export const paginationSchema = z.object({
  page: z.coerce
    .number()
    .catch(DEFAULT_PAGE)
    .transform((p) => Math.max(DEFAULT_PAGE, p)),
  limit: z.coerce
    .number()
    .catch(DEFAULT_LIMIT)
    .transform((l) => Math.max(1, l)),
});
