import React from "react";
import { Await } from "react-router";
import type { Route } from "./+types/home";
import { Employees } from "~/features/employees";
import { getEmployees, parseUrlParams } from "~/features/employees/server";

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = parseUrlParams(request.url);
  return getEmployees(searchParams);
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Await resolve={loaderData}>
        {(result) => <Employees {...result} />}
      </Await>
    </React.Suspense>
  );
}
