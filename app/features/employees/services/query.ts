import {
  and,
  eq,
  sql,
  inArray,
  desc,
  or,
  ilike,
  SQL,
  count,
} from "drizzle-orm";
import { responseSchema } from "../schemas/response";
import type { PayloadSchema } from "../types/payload";
import { drizzleDb, contractEmployees, employees } from "~/db";

export async function getEmployees({
  pagination: { page, limit },
  search: { query },
  sorting: { column, direction },
}: PayloadSchema) {
  const sortingColumn: SQL =
    column === "_contractCount"
      ? sql`count(${contractEmployees.id})`
      : sql`${employees[column]}`;

  const offset = (page - 1) * limit;

  const filters = or(
    ilike(employees.fullName, `%${query}%`),
    ilike(employees.oabNumber, `%${query}%`),
  );

  const [rawCount, rawData] = await Promise.all([
    drizzleDb.select({ count: count() }).from(employees).where(filters),
    drizzleDb
      .select({
        id: employees.id,
        fullName: employees.fullName,
        oabNumber: employees.oabNumber,
        remunerationPercent: employees.remunerationPercent,
        type: employees.type,
        role: employees.role,
        slug: employees.slug,
        _contractCount: sql<number>`count(${contractEmployees.id})`,
      })
      .from(employees)
      .leftJoin(
        contractEmployees,
        and(
          eq(contractEmployees.employeeId, employees.id),
          inArray(contractEmployees.assignment, [
            "responsible",
            "recommended",
            "admin_assistant",
          ]),
        ),
      )
      .where(filters)
      .groupBy(employees.id)
      .orderBy(() =>
        direction === "descending" ? desc(sortingColumn) : sortingColumn,
      )
      .limit(limit)
      .offset(offset),
  ]);

  return responseSchema.parse({
    count: rawCount[0].count,
    data: rawData,
  });
}
