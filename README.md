# Hono

Hono is an internal legal fee management system for a law firm. The product replaces spreadsheet-based operational control for clients, contracts, fees, revenues, and remunerations with a multi-tenant web application.

The interface is intended for firm administrators, lawyers, and administrative assistants. User-facing labels and feedback should remain in pt-BR, while the codebase stays in English.

## Product Direction

Hono is focused on legal-fee and remuneration management, not general CRM or case management.

Core product goals:

- reduce manual remuneration calculation errors
- centralize searchable operational and financial data
- preserve auditable history for business changes
- enforce role-aware visibility for financial information
- support desktop-first workflows with basic mobile support

Planned product surface includes authentication, dashboard analytics, client management, employee management, contract management, revenue tracking, fee management, remuneration review, attachments, audit history, and report export.

## Current Implementation

This repository currently contains an early React Router application slice:

- employee listing route at the application index
- server-loaded employee data from PostgreSQL through Drizzle ORM
- search, pagination, sorting, and filter state backed by URL search params
- reusable table, pagination, search, layout, and form components
- database schema and initial migration for the core domain tables:
  - clients
  - employees
  - contracts
  - contract employees
  - revenues
  - fees
  - remunerations

The broader PRD is documented outside this repository in `docs/domain/PRODUCT_SENSE.md`.

## Tech Stack

- React 19
- React Router 7
- TypeScript
- Vite
- Tailwind CSS 4
- HeroUI
- TanStack Table
- React Hook Form
- Zod
- Drizzle ORM
- PostgreSQL

## Getting Started

Install dependencies:

```bash
pnpm install
```

Create a local environment file with a PostgreSQL connection string:

```bash
DATABASE_URL="postgres://user:password@localhost:5432/hono"
```

Apply the existing migration with your preferred PostgreSQL migration flow. The migration files are in `app/db/migrations`, and Drizzle is configured in `drizzle.config.ts`.

Start the development server:

```bash
pnpm dev
```

The app runs at `http://localhost:5173`.

## Scripts

```bash
pnpm dev
```

Start the React Router development server.

```bash
pnpm build
```

Create a production build.

```bash
pnpm start
```

Serve the production build from `./build/server/index.js`.

```bash
pnpm typecheck
```

Generate React Router types and run TypeScript checks.

```bash
pnpm db:seed
```

Run the database seed script. This command expects `app/db/seed.ts` to exist.

## Project Structure

```text
app/
  db/                 Drizzle client, schemas, and migrations
  features/           Domain feature modules
  layouts/            Application shell layout components
  routes/             React Router route modules
  shared/             Shared components, hooks, schemas, types, and utilities
```

The current feature module is `app/features/employees`. It owns employee table columns, filters, URL param parsing, response validation, and query behavior.

## Domain Rules

Keep these invariants intact when changing the product:

- the application is multi-tenant by firm
- the domain remains legal-fee and remuneration management
- role-aware financial visibility is part of the product identity
- auditability is part of the product identity
- automated remuneration generation from fee events is part of the product identity
- business users should work through lists, drawers, and modal forms instead of isolated CRUD pages
- pt-BR labels, messages, and feedback should be preserved in the UI

If a change alters the role model, entity semantics, or core workflows, update the domain documentation before changing implementation behavior.

## Deployment

Build the app before deployment:

```bash
pnpm build
```

The built application contains:

```text
build/
  client/    Static assets
  server/    Server-side application code
```

A Dockerfile is included for container-based deployment.
