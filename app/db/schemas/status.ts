import { mainSchema } from "./schema";

export const EntityStatusEnum = mainSchema.enum("entity_status", [
  "active",
  "inactive",
]);

export const status = {
  status: EntityStatusEnum("status").notNull().default("active"),
};
