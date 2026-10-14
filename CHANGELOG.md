# Changelog

Changes are recorded against repository commits. Release entries must describe shipped behavior and distinguish inherited capabilities from changes made in AwsomePDF.

## Unreleased

- Contributor guidelines, issue/PR templates and concise attribution/security guidance in the README.
- Read-only CI for lint, types, tests, production export and source-distribution verification.
- Wait for asynchronous annotation text-preview content in its existing regression test instead of asserting as soon as the container mounts.
- Independent product/container metadata and removal of the manual full-fork-sync workflow. Upstream changes remain eligible for reviewed patches.
- GitHub fork detachment and repository metadata updates remain pending explicit approval.

## Recent recorded changes

- `3e1f740`: Remove unused updater build settings and document commit-backed fork differences.
- `be4b5f9`: Rename the product to AwsomePDF, redirect the root to English and remove the inherited release checker.
- `1049db2`: Self-contained Coolify Docker deployment, health checks and local preview override.
- `2a9a6d8`: Search local filenames and saved project records in the command palette.
- `8134fe2`: Permanent PDF content redaction and full document rewrite.
- `9bc7f44`: Load only the selected tool interface.
- `f7d9394`: Multilingual SEO and source packaging updates.

## Release convention

The existing workflows use `vYYYY.MM.DD-<short-commit>` identifiers. Keep those identifiers until maintainers deliberately approve a versioning change; do not retag existing history. For each release, record its exact commit, material changes, known limitations and validation results. Verify web exports and desktop artifacts before publication. Release notes must retain attribution and link to the corresponding source and license notices.
