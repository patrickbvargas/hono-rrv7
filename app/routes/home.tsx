import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hono" },
    { name: "description", content: "Gerencie honorários com facilidade." },
  ];
}

export default function Home() {
  return <p>Hono</p>;
}
