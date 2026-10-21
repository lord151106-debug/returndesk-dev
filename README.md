# ReturnDesk

A full-stack returns desk application built for the Frido Software Developer Intern take-home assessment.

## Product overview

ReturnDesk helps support agents create, find, review, resolve, and track customer return or replacement requests. The goal is a small, reliable product whose business rules are enforced by the server—not only by the UI.

## Planned stack

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS
- **API:** Next.js Route Handlers running on Node.js
- **Database:** PostgreSQL
- **Data access:** Prisma ORM
- **Validation and testing:** explicit request validation and automated tests (tooling to be chosen during implementation)

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

The exact schema and edge-case handling will be implemented against the assessment PDF, including database-level safeguards for concurrent requests.

## Planned implementation sequence

1. Project foundation and data model
2. Database migration and seed data
3. Request API and server-side business rules
4. Automated API and business-rule tests
5. Responsive request desk UI
6. Integration and end-to-end verification
7. Deployment, setup instructions, and final quality checks

## Development principles

- Keep business rules in a testable server-side layer.
- Use PostgreSQL persistence; do not substitute in-memory storage or JSON files.
- Keep dependencies purposeful and the codebase understandable.
- Handle loading, empty, success, and error states in the interface.
- Never commit credentials. Configure database URLs and other secrets via environment variables.
- Record genuine, meaningful implementation milestones in Git history.

## Status

**Planning / initial repository setup.** Implementation and test status will be documented as the project progresses; no feature should be considered complete until it is implemented and verified.

## Local development

The setup instructions will be expanded once the initial app and database configuration are committed. Do not commit your local `.env` file.
