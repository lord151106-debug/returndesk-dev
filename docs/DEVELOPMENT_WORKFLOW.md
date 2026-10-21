# Development Workflow

## Repository roles

- `lord151106-debug/returndesk-dev`: development source of truth.
- Chaitanya's separate submission repository: receives only locally verified changes.

Never add credentials or database URLs to either repository. Local environment files must remain untracked.

## Milestones

Use focused commits for coherent milestones rather than committing every tiny edit:
1. Project foundation
2. Database schema and migration
3. Seed data
4. Request API
5. Business-rule and API tests
6. Core UI
7. Search/filter/pagination and request detail interactions
8. Integration polish and responsive behavior
9. Deployment and README verification

Combine milestones when it improves clarity; this is a guide, not a quota. Commit messages must accurately describe what changed.

## Local verification checklist

Before copying/pushing a milestone to the submission repository:
- Pull the intended development commit.
- Review `git diff` and the changed-file list.
- Install dependencies from the lockfile.
- Configure secrets only in a local ignored `.env`.
- Run database migration and seed commands where applicable.
- Run lint, type-check, unit/API tests, and a production build where available.
- Manually verify the workflow and responsive behavior.
- Record any failing or unverified checks honestly.

Do not represent a feature as tested until the relevant command or manual check has actually passed.

## Suggested two-remote pattern

If both repositories share compatible Git history, a local clone may use `development` and `submission` remotes. Check branch and history state before pushing. Never force-push over submission history. If the repos have unrelated roots, use a reviewed patch/cherry-pick workflow or initialize them with a shared root.

Example commands after verifying the local repository:
```bash
git remote -v
git fetch development
git log --oneline --decorate -8 development/main
git diff --stat HEAD..development/main
```

Then review and test before updating the submission branch. The submission remote must point to the explicitly intended repository under Chaitanya's account.
