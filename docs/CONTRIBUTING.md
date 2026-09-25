# Contributing Guide

## Branch Strategy

- `main` — production, protected
- `develop` — integrasi
- `feat/<name>`, `fix/<name>`, `chore/<name>` — short-lived

## Commit Convention (Conventional Commits)

Format: `<type>(<scope>): <subject>`

Contoh:

- `feat(billing): add invoice export`
- `fix(printer): handle bluetooth disconnect`
- `chore(deps): bump react-native`

Type yang diizinkan: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`.

## Pull Request

- WAJIB lulus CI (lint, typecheck, test).
- WAJIB minimal 1 reviewer approve.
- WAJIB update dokumentasi jika mengubah arsitektur.

## Sebelum Push

```bash
npm run validate
```
