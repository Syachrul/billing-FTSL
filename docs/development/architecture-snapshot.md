# Architecture Snapshot — Freeze 2025-09-25

**Snapshot Date:** 2025-09-25
**Commit:** `6b64d13`
**Branch:** `chore/governance-sprint-0`

---

## 🎯 Layer Arsitektur

### 1. App Layer (`src/app/`)
**Tanggung Jawab:** Setup aplikasi, providers, navigation root, styles global.

**Isi:**
- `navigation/` — RootNavigator, RootStackParamList
- `providers/` — Context providers (kosong, placeholder)
- `styles/` — `global.css`

**Aturan:**
- ✅ Boleh import dari `@features/*` dan `@shared/*`
- ❌ Dilarang berisi business logic

---

### 2. Features Layer (`src/features/`)
**Tanggung Jawab:** Fitur bisnis yang terisolasi.

**Isi Saat Ini:**
- `billing/` — Fitur billing (aktif)
- `printer/` — Fitur printer (template kosong)

**Aturan:**
- ✅ Boleh import dari `@shared/*`
- ❌ Dilarang import dari feature lain secara langsung
- ✅ Semua import dari luar WAJIB lewat `index.ts`

---

### 3. Shared Layer (`src/shared/`)
**Tanggung Jawab:** Cross-cutting concerns yang dipakai lintas fitur.

**Isi:**
- `api/` — HTTP client (placeholder)
- `components/` — UI kit (Button, Card, Input)
- `config/` — Environment config (placeholder)
- `constants/` — Konstanta global (placeholder)
- `hooks/` — Custom hooks (placeholder)
- `lib/` — Pure functions (currency, date)
- `store/` — Global state (placeholder)
- `theme/` — Design tokens (colors)
- `types/` — Global types (env, nativewind)
- `utils/` — Helper umum (placeholder)

**Aturan:**
- ✅ Boleh dipakai oleh semua layer
- ❌ Dilarang import dari `@features/*` atau `@app/*`

---

### 4. Assets Layer (`src/assets/`)
**Tanggung Jawab:** Aset statis global.

**Isi:**
- `fonts/`, `icons/`, `images/`

**Aturan:**
- ❌ Dilarang berisi logic
- ✅ Hanya file statis (gambar, font, dll)

---

## 🔗 Dependency Graph
app/ ──────┐
├──> features/ ──> shared/ ──> assets/
│
└──> shared/

text

**Aturan:**
- `app` boleh ke `features` dan `shared`
- `features` boleh ke `shared`
- `shared` TIDAK boleh ke `features` atau `app`
- `assets` tidak punya dependency

---

## 🗺️ Path Alias

| Alias | Target |
|-------|--------|
| `@/*` | `src/*` |
| `@app/*` | `src/app/*` |
| `@features/*` | `src/features/*` |
| `@shared/*` | `src/shared/*` |
| `@assets/*` | `src/assets/*` |

---

## 📋 Konfigurasi Tools

| Tool | File | Fungsi |
|------|------|--------|
| TypeScript | `tsconfig.json` | Strict, path alias, standalone |
| Babel | `babel.config.js` | Module resolver untuk alias |
| Metro | `metro.config.js` | Resolver alias untuk bundling |
| ESLint | `.eslintrc.js` | Governance rules |
| Prettier | `.prettierrc.js` | Format code |
| Jest | `jest.config.js` | Test runner + moduleNameMapper |
| Husky | `.husky/` | Git hooks |
| Commitlint | `commitlint.config.js` | Conventional commits |
| GitHub Actions | `.github/workflows/ci.yml` | CI pipeline |

---

## 🚀 Status Implementasi

| Layer | Status | Keterangan |
|-------|--------|------------|
| App | 🟡 Partial | Navigation ada, providers kosong |
| Features/Billing | 🟡 Partial | Screens ada, store dasar |
| Features/Printer | 🔴 Empty | Template saja |
| Shared/Components | 🟢 Ready | Button, Card, Input |
| Shared/Lib | 🟢 Ready | currency, date |
| Shared/Theme | 🟢 Ready | colors |
| Shared/API | 🔴 Empty | Perlu implementasi Sprint 1 |
| Shared/Config | 🔴 Empty | Perlu implementasi Sprint 1 |
| Shared/Store | 🔴 Empty | Perlu implementasi Sprint 1 |
| Shared/Hooks | 🔴 Empty | Perlu implementasi Sprint 1 |
| Shared/Utils | 🔴 Empty | Perlu implementasi Sprint 1 |
| Assets | 🟡 Partial | Folder ada |

---

**Snapshot ini adalah baseline untuk Sprint 1.**
