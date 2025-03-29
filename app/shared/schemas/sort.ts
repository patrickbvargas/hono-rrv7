import { z } from "zod";

const allowedSortOrders = ["asc", "desc"] as const;

export const sortSchema = z.object({
  sort: z.string().optional(),
  order: z.enum(allowedSortOrders).catch("asc"),
});
