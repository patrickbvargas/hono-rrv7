import "dotenv/config";
import pkg from "pg";
import * as schema from "~/db/schemas";
import { drizzle } from "drizzle-orm/node-postgres";

const { Pool } = pkg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const drizzleDb = drizzle(pool, {
  schema,
});
