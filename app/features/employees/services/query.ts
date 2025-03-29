import type { SearchParams } from "../types/search-params";
import { drizzleDb, contractEmployees, employees } from "~/db";
import { and, eq, sql, inArray, desc, or, ilike, SQL } from "drizzle-orm";

export async function getEmployees({
  pagination: { page, limit },
  search: { query },
  sorting: { sort, order },
}: SearchParams) {
  const sortingColumn: SQL =
    sort === "_contractCount"
      ? sql`count(${contractEmployees.id})`
      : sql`${employees[sort]}`;

  const offset = (page - 1) * limit;

  return await drizzleDb
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
    .where(
      or(
        ilike(employees.fullName, `%${query}%`),
        ilike(employees.oabNumber, `%${query}%`),
      ),
    )
    .groupBy(employees.id)
    .orderBy(() => (order === "desc" ? desc(sortingColumn) : sortingColumn))
    .limit(limit)
    .offset(offset);
}
