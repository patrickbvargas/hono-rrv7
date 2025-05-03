import { z } from "zod";
import type { SortDescriptor } from "@heroui/react";

const allowedSortOrders = [
  "ascending",
  "descending",
] as const satisfies Readonly<SortDescriptor["direction"][]>;

export const sortSchema = z.object({
  column: z.string().optional(),
  direction: z.enum(allowedSortOrders).catch(allowedSortOrders[0]),
});
