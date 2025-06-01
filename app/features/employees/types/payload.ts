import { z } from "zod";
import { zPayload } from "../schemas/payload";

export type Payload = z.infer<typeof zPayload>;
