# Contributing to AwsomePDF

AwsomePDF is maintained by Skillset Squad Private Limited and is based on and modified from [PDFCraft](https://github.com/PDFCraftTool/pdfcraft). Contributions are welcome under the existing AGPLv3 license. Preserve upstream credit and original licenses. Be respectful and constructive in project discussions.

## Local development

Use Node.js 22 and npm with the committed lockfile:

```sh
git clone https://github.com/SkillsetSquad/awsomepdf.git
cd awsomepdf
npm ci
npm run dev
```

Open http://localhost:3000/en/. Do not use `next start` to serve the production static export; use the hosting instructions in [DEPLOYMENT.md](DEPLOYMENT.md).

## Proposing a change

1. Check existing issues and pull requests. Discuss changes to processing guarantees, storage formats, public routes or deployment before implementation.
2. Create a branch from `main`. Keep the change focused and preserve unrelated work.
3. Use existing shadcn/ui components, local engine loaders, translation keys and processing contracts. Document bytes, extracted content, passwords and signatures must stay on the device.
4. Preserve original licenses and copyright notices. Distinguish inherited PDFCraft functionality from changes made here.
5. Validate the affected behavior with synthetic or public fixtures. For PDF changes, inspect actual output files; a successful promise is not sufficient.
6. Open a pull request describing the problem, resulting behavior, checks performed and known limitations. Do not include private documents, credentials or real customer data.

## Validation

```sh
npm run lint
npx tsc --noEmit
npm test
npm run build
```

Use focused tests during development. Run the full suite for shared components, storage contracts, registries or workflow infrastructure. The build runs source/license packaging and asset preparation through its lifecycle scripts. Existing lint warnings should be reported separately from errors. If a test is intermittent, report both the original failure and the rerun rather than claiming an entirely clean run.

Check desktop/mobile layouts, keyboard use, light/dark themes and Arabic RTL when UI behavior changes. State any checks that were unavailable.

## Upstream changes

Import upstream changes as reviewed patches or pull requests. Do not automatically merge PDFCraft into `main`, replace our history or restore removed features. Retain the original author and license notices when incorporating an upstream patch.

## Releases and security

See [CHANGELOG.md](CHANGELOG.md) for release conventions and [the README security reporting section](README.md#security-reporting) for private vulnerability reporting. Forking this repository to contribute does not change its licensing obligations.
