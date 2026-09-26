# Roadmap — BillingApp

**Last Update:** 2025-09-25
**Current Phase:** Sprint 0 DONE → Sprint 1 Next

---

## 📅 Sprint Overview

| Sprint | Nama | Durasi | Status |
|--------|------|--------|--------|
| Sprint 0 | Governance Foundation | 1 minggu | ✅ DONE |
| Sprint 1 | Shared Layer | 2 minggu | 🔜 Next |
| Sprint 2 | Feature Refactor | 2 minggu | ⏳ Pending |
| Sprint 3 | Testing | 2 minggu | ⏳ Pending |
| Sprint 4 | Documentation & ADR | 2 minggu | ⏳ Pending |
| Sprint 5 | Hardening & Production | 2 minggu | ⏳ Pending |

---

## ✅ Sprint 0 — Governance Foundation (DONE)

**Deliverables:**
- Struktur FSD
- Path alias
- Quality gates
- Dokumentasi
- ADR-0001
- CI/CD pipeline

**Exit Criteria:**
- [x] `npm run validate` exit 0
- [x] Lint 0 error
- [x] Typecheck 0 error
- [x] Commit conventional
- [x] Push ke GitHub

---

## 🔜 Sprint 1 — Shared Layer (NEXT)

**Tujuan:** Implementasi layer `shared/` yang solid.

**Deliverables:**
1. **`src/shared/api/client.ts`** — HTTP client (axios) + interceptor
2. **`src/shared/config/env.ts`** — Validasi env dengan zod
3. **`src/shared/constants/`**:
   - `queryKeys.ts`
   - `storageKeys.ts`
   - `routes.ts`
4. **`src/shared/store/`**:
   - `useAuthStore.ts`
   - `useSettingsStore.ts`
   - `useAppStateStore.ts`
5. **`src/shared/hooks/`**:
   - `useDebounce.ts`
   - `useAppState.ts`
   - `usePrevious.ts`
   - `useInterval.ts`
6. **`src/shared/utils/`**:
   - `string.ts`
   - `array.ts`
   - `validation.ts`

**Exit Criteria:**
- [ ] Semua module shared terisi
- [ ] Unit test untuk utils & hooks
- [ ] Coverage ≥ 80% di shared
- [ ] Dokumentasi per module

---

## ⏳ Sprint 2 — Feature Refactor

**Tujuan:** Refactor fitur existing agar konsisten dengan template.

**Deliverables:**
- Refactor `billing/`:
  - Tambah `services/`
  - Isi `api/`
  - Isi `hooks/`
  - Isi `utils/`
  - Isi `types/`
- Refactor `printer/`:
  - Implementasi `services/` (koneksi printer)
  - Implementasi `screens/`
  - Implementasi `store/`
- **Rule:** Tidak ada cross-feature import.

**Exit Criteria:**
- [ ] Semua fitur punya struktur identik
- [ ] Tidak ada import relatif `../../../`
- [ ] Semua import via `@features/*`
- [ ] Lint bersih

---

## ⏳ Sprint 3 — Testing

**Tujuan:** Testing strategy menyeluruh.

**Deliverables:**
- Test untuk `shared/lib` (coverage 90%)
- Test untuk `shared/utils` (coverage 90%)
- Test untuk `shared/hooks` (coverage 80%)
- Test untuk `services` billing & printer (coverage 85%)
- Test untuk store (coverage 80%)
- E2E test (Maestro) untuk 3 flow:
  1. Create invoice
  2. Print receipt
  3. Sync data

**Exit Criteria:**
- [ ] Coverage ≥ 70% global
- [ ] E2E hijau
- [ ] CI enforce coverage

---

## ⏳ Sprint 4 — Documentation & ADR

**Tujuan:** Dokumentasi lengkap & ADR untuk setiap keputusan.

**Deliverables:**
- `docs/API.md` — API documentation
- `docs/STATE.md` — State management guide
- `docs/TESTING.md` — Testing guide
- `docs/DEPLOYMENT.md` — Deployment guide
- ADR-0002: State management choice (Zustand)
- ADR-0003: HTTP client choice (Axios)
- ADR-0004: Form handling (react-hook-form + zod)

**Exit Criteria:**
- [ ] Onboarding time < 1 hari
- [ ] Semua keputusan terdokumentasi

---

## ⏳ Sprint 5 — Hardening & Production

**Tujuan:** Siap production.

**Deliverables:**
- Error tracking (Sentry)
- Analytics
- Feature flags
- Performance audit (bundle size, startup time)
- Security audit (env, storage, network)
- CI/CD final
- Release signing (Android & iOS)

**Exit Criteria:**
- [ ] Production build berhasil
- [ ] Error tracking aktif
- [ ] Performance baseline terdokumentasi

---

## 🎯 KPI Governance

| Metrik | Baseline | Target 90 Hari |
|--------|----------|----------------|
| Test coverage | 0% | ≥ 70% |
| Lint errors | 0 | 0 |
| TS strict | ✅ | ✅ |
| Cross-feature imports | 0 | 0 |
| Onboarding time | ? | < 1 hari |
| CI pass rate | 100% | > 95% |
| Dokumentasi coverage | 30% | 100% fitur |

---

## 🚫 Larangan Keras

1. ❌ Import antar-feature tanpa lewat `shared/`.
2. ❌ Merge PR tanpa lulus CI.
3. ❌ Commit tanpa conventional message.
4. ❌ Hardcode URL, key, atau credential.
5. ❌ `any` di TypeScript tanpa justifikasi.
6. ❌ File > 300 baris tanpa dipecah.
7. ❌ Feature baru tanpa `README.md` & `__tests__/`.
8. ❌ Store generik di dalam feature.
9. ❌ Folder kosong tanpa `.gitkeep`.
10. ❌ Import relatif `../../../`.
