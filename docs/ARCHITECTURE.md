# Initial Architecture

## Design goals

- Meet the assessment requirements before adding optional features.
- Keep the architecture simple enough to implement, test, and explain within the deadline.
- Enforce every business rule in the backend and protect invariants in PostgreSQL where practical.
- Make UI decisions serve the support-agent workflow.

## Initial component boundaries

```text
Next.js App Router
  ├── UI pages and reusable components
  └── Route Handlers (HTTP boundary)
        ├── Input validation
        ├── Request service (business rules and transitions)
        └── Prisma data access
              └── PostgreSQL
```

Route handlers should translate HTTP input/output. Business rules should live in a server-side service layer so they can be tested without rendering React components.

## Main data concepts

### Return request

A request will track:
- Internal identifier and generated human-readable reference
- Customer name and contact information
- Order identifier/number and item identity
- Reason and optional customer-provided description
- Status and, when approved, resolution and optional refund amount
- Creation and update timestamps
- Related notes

### Request note

Each note belongs to one request and stores its content and creation timestamp. Notes are appended rather than silently overwritten.

The final Prisma schema should be based on the full assessment requirements. Avoid adding speculative fields or a separate audit subsystem until required functionality is covered.

## Lifecycle

- Open can move to In Review.
- In Review can move to Approved or Rejected.
- Approved can move to Completed.
- Rejected and Completed are terminal statuses.
- All other transitions are rejected by the server.

Approval and resolution should be persisted atomically. A Refund resolution requires a positive amount; Replacement and Store Credit must not include a refund amount.

## One live request per order item

A live request is one that has not reached Rejected or Completed, in line with the brief. Prevent duplicates at the server and protect against concurrent inserts using a suitable PostgreSQL constraint or transaction strategy. This design requires careful evaluation because a simple pre-insert query alone is vulnerable to races.

## Error handling

Use predictable JSON error bodies and meaningful HTTP status codes. Expected validation or business-rule failures should be explicit (for example, 400/422 for invalid input, 404 for missing records, 409 for conflicting state). Unexpected failures should return a generic 500 response without exposing secrets or stack traces to clients.

## UI direction

- Responsive request table/list with search and filters.
- Status badges with clear text, not color alone.
- Detail modal or side panel to inspect request and note history.
- Actions shown only when legal for the current state, while still enforcing legality on the server.
- Accessible forms, confirmation for consequential actions, and loading/empty/error states.

## Verification strategy

- Unit-test lifecycle and resolution rules.
- API-test valid and invalid requests.
- Test duplicate active requests and attempts to edit/remove protected requests.
- Verify persistence after server restart.
- Test the interface at 375px wide.
- Run lint, type checking, and tests before calling each milestone complete.

## Implementation status

This document is the initial plan, not a claim that these features are implemented or tested yet.
