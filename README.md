# ReturnDesk

A full-stack returns desk application built for the Frido Software Developer Intern take-home assessment.

## Product overview

ReturnDesk helps support agents create, find, review, resolve, and track customer return or replacement requests. The goal is a small, reliable product whose business rules are enforced by the server—not only by the UI.

## Stack

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS
- **API:** Next.js Route Handlers running on Node.js
- **Database:** PostgreSQL
- **Data access:** Prisma ORM
- **Validation:** Zod
- **Testing:** automated unit and API tests will be added with the relevant features

## Core workflow

1. Create a request with customer, order, item, reason, and optional notes.
2. Generate a unique, human-readable reference automatically.
3. Search, filter, sort, and paginate requests.
4. Open a request to inspect details and chronological notes.
5. Move the request through only permitted lifecycle transitions.
6. Record a required resolution when approving.
7. Preserve data in PostgreSQL across server restarts.

## Business rules to enforce

- Legal lifecycle transitions are: `Open → In Review → Approved → Completed`, or `In Review → Rejected`. Rejected and Completed are final.
- Approval requires a resolution: Refund, Replacement, or Store Credit.
- Refund requires a refund amount greater than zero. Non-refund resolutions must not store a refund amount.
- A customer cannot have two live requests for the same item on the same order. Rejected and Completed requests do not block a new request.
- Once a request is Approved, Rejected, or Completed, its customer and item details cannot be edited.
- Notes may be appended during the request lifetime.
- Only Open or Rejected requests may be removed from the active desk; removal must not destroy the underlying record.
- Invalid operations must return appropriate HTTP status codes and machine-readable error responses.

## Development principles

- Keep business rules in a testable server-side layer.
- Use PostgreSQL persistence; do not substitute in-memory storage or JSON files.
- Keep dependencies purposeful and the codebase understandable.
- Handle loading, empty, success, and error states in the interface.
- Never commit credentials. Configure database URLs and other secrets via environment variables.
- Record genuine, meaningful implementation milestones in Git history.

## Current status

**Milestone 1 — Application foundation in progress.** The initial Next.js app shell, TypeScript and Tailwind configuration, and landing page are in the `feat/app-foundation` branch. The request workflow, API, database schema, and tests are not implemented yet. They must not be considered complete until implemented and verified.

## Local development

Requirements: Node.js 20.9 or newer and npm.

Clone the development repository and check out the foundation branch:

```bash
git clone https://github.com/lord151106-debug/returndesk-dev.git
cd returndesk-dev
git checkout feat/app-foundation
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the available quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

These checks should be run locally after dependencies are installed. They have not been reported as passing from the repository-writing environment.

Database configuration will be added in the next milestone. When it is needed, copy `.env.example` to `.env` and use your own PostgreSQL connection string. Never commit `.env` or real credentials.
