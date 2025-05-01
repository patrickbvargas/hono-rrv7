import { z } from "zod";
import { payloadSchema } from "../schemas/payload";

export type PayloadSchema = z.infer<typeof payloadSchema>;
