import { z } from "zod";
import type { SortDirection } from "../types";

const allowedSortOrders = [
  "ascending",
  "descending",
] as const satisfies Readonly<SortDirection[]>;

export const zSortBase = z.object({
  column: z.string(),
  direction: z.enum(allowedSortOrders).catch(allowedSortOrders[0]),
});
