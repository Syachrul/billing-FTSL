# Roadmap — BillingApp

**Last Update:** 2025-09-26
**Current Phase:** Sprint 0 DONE → GC-001/GC-002 Registered → Sprint 1 Next
**Repo:** https://github.com/Syachrul/billing-FTSL

---

## Sprint Overview

| Fase | Nama | Durasi | Status |
|------|------|--------|--------|
| Sprint 0 | Governance Foundation | 1 minggu | DONE |
| GC-001 | Governance Completion Phase | 3 hari | BACKLOG |
| GC-002 | Product & Requirements Documentation (BRD/PRD/SRS) | 1-3 hari | BACKLOG |
| Sprint 1 | Shared Layer | 2 minggu | Next |
| Sprint 2 | Feature Refactor | 2 minggu | Pending (blocked by GC-002) |
| Sprint 3 | Testing | 2 minggu | Pending |
| Sprint 4 | Documentation & ADR | 2 minggu | Pending |
| Sprint 5 | Hardening & Production | 2 minggu | Pending |

---

## Sprint 0 — Governance Foundation (DONE)

**Deliverables:**
- Struktur FSD
- Path alias
- Quality gates
- Dokumentasi
- ADR-0001
- CI/CD pipeline

**Exit Criteria:**
- [x] npm run validate exit 0
- [x] Lint 0 error
- [x] Typecheck 0 error
- [x] Commit conventional
- [x] Push ke GitHub

---

## GC-001 — Governance Completion Phase (BACKLOG)

**Tujuan:** Melengkapi artefak IT Governance yang belum ada.
**Target:** Naikkan governance score dari 7.6 ke 8.8.
**Trigger:** Setelah Sprint 1 selesai.
**Referensi:** docs/development/Backlog GC-001.md

**Deliverables (Prioritas Tinggi):**
- docs/RISK_REGISTER.md
- docs/DEFINITION_OF_DONE.md
- docs/SECURITY.md
- SECURITY.md (root repo)
- docs/SECRETS.md
- Update CI: npm audit

**Deliverables (Prioritas Sedang):**
- docs/VISION.md
- docs/BUSINESS_CASE.md
- docs/ENVIRONMENTS.md
- CHANGELOG.md
- docs/METRICS.md

---

## GC-002 — Product & Requirements Documentation (BACKLOG)

**Tujuan:** Menyusun BRD -> PRD -> SRS yang traceable dari business intent.
**Trigger:** WAJIB diselesaikan SEBELUM Sprint 2 (Feature Refactor).
**Decision:** Option C - APPROVED WITH GOVERNANCE CORRECTION.
**Referensi:** docs/development/Backlog GC-002.md

**Prinsip Wajib:**
1. NO INVENTED REQUIREMENTS
2. NO PREMATURE FREEZE
3. FULL TRACEABILITY
4. GOVERNANCE GATES
5. EVIDENCE-BASED

**Deliverables:**
- Tahap 1: Requirements Elicitation (intent, interview, evidence log)
- Tahap 2: BRD (docs/business/BRD.md)
- Tahap 3: PRD (docs/product/PRD.md)
- Tahap 4: SRS (docs/technical/SRS.md)

**Blocking Rule:**
Feature/domain implementation DILARANG dimulai sebelum GC-002 selesai.

---

## Sprint 1 — Shared Layer (NEXT)

**Tujuan:** Implementasi layer shared/ yang solid.
**Constraint:** Hanya boleh lanjut untuk item yang PRODUCT-INDEPENDENT.

**Product-Independent (Boleh lanjut):**
1. src/shared/api/client.ts - HTTP client (axios) + interceptor
2. src/shared/config/env.ts - Validasi env dengan zod
3. src/shared/constants/storageKeys.ts
4. src/shared/store/useAuthStore.ts
5. src/shared/store/useSettingsStore.ts
6. src/shared/store/useAppStateStore.ts
7. src/shared/hooks/useDebounce.ts
8. src/shared/hooks/useAppState.ts
9. src/shared/hooks/usePrevious.ts
10. src/shared/hooks/useInterval.ts
11. src/shared/utils/string.ts
12. src/shared/utils/array.ts
13. src/shared/utils/validation.ts

**Perlu Review Dulu (Potentially Product-Dependent):**
- src/shared/constants/routes.ts
- src/shared/constants/queryKeys.ts

**Exit Criteria:**
- [ ] Semua module shared terisi
- [ ] Unit test untuk utils & hooks
- [ ] Coverage >= 80% di shared
- [ ] Dokumentasi per module

---

## Sprint 2 — Feature Refactor (PENDING - BLOCKED by GC-002)

**Tujuan:** Refactor fitur existing agar konsisten dengan template.

**Blocking Rule:**
Sprint ini DILARANG dimulai sebelum GC-002 selesai.
Semua requirement fitur HARUS traceable ke BRD/PRD/SRS.

**Deliverables:**
- Refactor billing/: services/, api/, hooks/, utils/, types/
- Refactor printer/: services/ (koneksi printer), screens/, store/
- Rule: Tidak ada cross-feature import.

**Exit Criteria:**
- [ ] Semua fitur punya struktur identik
- [ ] Tidak ada import relatif ../../../
- [ ] Semua import via @features/*
- [ ] Lint bersih
- [ ] Semua requirement traceable ke BRD/PRD/SRS

---

## Sprint 3 — Testing

**Tujuan:** Testing strategy menyeluruh.

**Deliverables:**
- Test untuk shared/lib (coverage 90%)
- Test untuk shared/utils (coverage 90%)
- Test untuk shared/hooks (coverage 80%)
- Test untuk services billing & printer (coverage 85%)
- Test untuk store (coverage 80%)
- E2E test (Maestro) untuk 3 flow:
  1. Create invoice
  2. Print receipt
  3. Sync data

**Exit Criteria:**
- [ ] Coverage >= 70% global
- [ ] E2E hijau
- [ ] CI enforce coverage

---

## Sprint 4 — Documentation & ADR

**Tujuan:** Dokumentasi lengkap & ADR untuk setiap keputusan.

**Deliverables:**
- docs/API.md - API documentation
- docs/STATE.md - State management guide
- docs/TESTING.md - Testing guide
- docs/DEPLOYMENT.md - Deployment guide
- ADR-0002: State management choice (Zustand)
- ADR-0003: HTTP client choice (Axios)
- ADR-0004: Form handling (react-hook-form + zod)

**Exit Criteria:**
- [ ] Onboarding time < 1 hari
- [ ] Semua keputusan terdokumentasi

---

## Sprint 5 — Hardening & Production

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

## KPI Governance

| Metrik | Baseline | Target 90 Hari |
|--------|----------|----------------|
| Test coverage | 0% | >= 70% |
| Lint errors | 0 | 0 |
| TS strict | OK | OK |
| Cross-feature imports | 0 | 0 |
| Onboarding time | ? | < 1 hari |
| CI pass rate | 100% | > 95% |
| Dokumentasi coverage | 30% | 100% fitur |
| Governance score | 7.6/10 | >= 9/10 |

---

## Larangan Keras

1. Import antar-feature tanpa lewat shared/.
2. Merge PR tanpa lulus CI.
3. Commit tanpa conventional message.
4. Hardcode URL, key, atau credential.
5. any di TypeScript tanpa justifikasi.
6. File > 300 baris tanpa dipecah.
7. Feature baru tanpa README.md & __tests__/.
8. Store generik di dalam feature.
9. Folder kosong tanpa .gitkeep.
10. Import relatif ../../../
11. Feature/domain implementation tanpa requirements baseline (GC-002).
12. Membuat requirement tanpa evidence (NO INVENTED REQUIREMENTS).

---

## Referensi

- Sprint 0 Report: docs/development/sprint-0-report.md
- Backlog GC-001: docs/development/Backlog GC-001.md
- Backlog GC-002: docs/development/Backlog GC-002.md
- Architecture Snapshot: docs/development/architecture-snapshot.md
- Freeze Checklist: docs/development/freeze-checklist.md
EOFcd /d/Project/BillingApp && cat > docs/development/roadmap.md << 'EOF'
# Roadmap — BillingApp

**Last Update:** 2025-09-26
**Current Phase:** Sprint 0 DONE → GC-001/GC-002 Registered → Sprint 1 Next
**Repo:** https://github.com/Syachrul/billing-FTSL

---

## Sprint Overview

| Fase | Nama | Durasi | Status |
|------|------|--------|--------|
| Sprint 0 | Governance Foundation | 1 minggu | DONE |
| GC-001 | Governance Completion Phase | 3 hari | BACKLOG |
| GC-002 | Product & Requirements Documentation (BRD/PRD/SRS) | 1-3 hari | BACKLOG |
| Sprint 1 | Shared Layer | 2 minggu | Next |
| Sprint 2 | Feature Refactor | 2 minggu | Pending (blocked by GC-002) |
| Sprint 3 | Testing | 2 minggu | Pending |
| Sprint 4 | Documentation & ADR | 2 minggu | Pending |
| Sprint 5 | Hardening & Production | 2 minggu | Pending |

---

## Sprint 0 — Governance Foundation (DONE)

**Deliverables:**
- Struktur FSD
- Path alias
- Quality gates
- Dokumentasi
- ADR-0001
- CI/CD pipeline

**Exit Criteria:**
- [x] npm run validate exit 0
- [x] Lint 0 error
- [x] Typecheck 0 error
- [x] Commit conventional
- [x] Push ke GitHub

---

## GC-001 — Governance Completion Phase (BACKLOG)

**Tujuan:** Melengkapi artefak IT Governance yang belum ada.
**Target:** Naikkan governance score dari 7.6 ke 8.8.
**Trigger:** Setelah Sprint 1 selesai.
**Referensi:** docs/development/Backlog GC-001.md

**Deliverables (Prioritas Tinggi):**
- docs/RISK_REGISTER.md
- docs/DEFINITION_OF_DONE.md
- docs/SECURITY.md
- SECURITY.md (root repo)
- docs/SECRETS.md
- Update CI: npm audit

**Deliverables (Prioritas Sedang):**
- docs/VISION.md
- docs/BUSINESS_CASE.md
- docs/ENVIRONMENTS.md
- CHANGELOG.md
- docs/METRICS.md

---

## GC-002 — Product & Requirements Documentation (BACKLOG)

**Tujuan:** Menyusun BRD -> PRD -> SRS yang traceable dari business intent.
**Trigger:** WAJIB diselesaikan SEBELUM Sprint 2 (Feature Refactor).
**Decision:** Option C - APPROVED WITH GOVERNANCE CORRECTION.
**Referensi:** docs/development/Backlog GC-002.md

**Prinsip Wajib:**
1. NO INVENTED REQUIREMENTS
2. NO PREMATURE FREEZE
3. FULL TRACEABILITY
4. GOVERNANCE GATES
5. EVIDENCE-BASED

**Deliverables:**
- Tahap 1: Requirements Elicitation (intent, interview, evidence log)
- Tahap 2: BRD (docs/business/BRD.md)
- Tahap 3: PRD (docs/product/PRD.md)
- Tahap 4: SRS (docs/technical/SRS.md)

**Blocking Rule:**
Feature/domain implementation DILARANG dimulai sebelum GC-002 selesai.

---

## Sprint 1 — Shared Layer (NEXT)

**Tujuan:** Implementasi layer shared/ yang solid.
**Constraint:** Hanya boleh lanjut untuk item yang PRODUCT-INDEPENDENT.

**Product-Independent (Boleh lanjut):**
1. src/shared/api/client.ts - HTTP client (axios) + interceptor
2. src/shared/config/env.ts - Validasi env dengan zod
3. src/shared/constants/storageKeys.ts
4. src/shared/store/useAuthStore.ts
5. src/shared/store/useSettingsStore.ts
6. src/shared/store/useAppStateStore.ts
7. src/shared/hooks/useDebounce.ts
8. src/shared/hooks/useAppState.ts
9. src/shared/hooks/usePrevious.ts
10. src/shared/hooks/useInterval.ts
11. src/shared/utils/string.ts
12. src/shared/utils/array.ts
13. src/shared/utils/validation.ts

**Perlu Review Dulu (Potentially Product-Dependent):**
- src/shared/constants/routes.ts
- src/shared/constants/queryKeys.ts

**Exit Criteria:**
- [ ] Semua module shared terisi
- [ ] Unit test untuk utils & hooks
- [ ] Coverage >= 80% di shared
- [ ] Dokumentasi per module

---

## Sprint 2 — Feature Refactor (PENDING - BLOCKED by GC-002)

**Tujuan:** Refactor fitur existing agar konsisten dengan template.

**Blocking Rule:**
Sprint ini DILARANG dimulai sebelum GC-002 selesai.
Semua requirement fitur HARUS traceable ke BRD/PRD/SRS.

**Deliverables:**
- Refactor billing/: services/, api/, hooks/, utils/, types/
- Refactor printer/: services/ (koneksi printer), screens/, store/
- Rule: Tidak ada cross-feature import.

**Exit Criteria:**
- [ ] Semua fitur punya struktur identik
- [ ] Tidak ada import relatif ../../../
- [ ] Semua import via @features/*
- [ ] Lint bersih
- [ ] Semua requirement traceable ke BRD/PRD/SRS

---

## Sprint 3 — Testing

**Tujuan:** Testing strategy menyeluruh.

**Deliverables:**
- Test untuk shared/lib (coverage 90%)
- Test untuk shared/utils (coverage 90%)
- Test untuk shared/hooks (coverage 80%)
- Test untuk services billing & printer (coverage 85%)
- Test untuk store (coverage 80%)
- E2E test (Maestro) untuk 3 flow:
  1. Create invoice
  2. Print receipt
  3. Sync data

**Exit Criteria:**
- [ ] Coverage >= 70% global
- [ ] E2E hijau
- [ ] CI enforce coverage

---

## Sprint 4 — Documentation & ADR

**Tujuan:** Dokumentasi lengkap & ADR untuk setiap keputusan.

**Deliverables:**
- docs/API.md - API documentation
- docs/STATE.md - State management guide
- docs/TESTING.md - Testing guide
- docs/DEPLOYMENT.md - Deployment guide
- ADR-0002: State management choice (Zustand)
- ADR-0003: HTTP client choice (Axios)
- ADR-0004: Form handling (react-hook-form + zod)

**Exit Criteria:**
- [ ] Onboarding time < 1 hari
- [ ] Semua keputusan terdokumentasi

---

## Sprint 5 — Hardening & Production

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

## KPI Governance

| Metrik | Baseline | Target 90 Hari |
|--------|----------|----------------|
| Test coverage | 0% | >= 70% |
| Lint errors | 0 | 0 |
| TS strict | OK | OK |
| Cross-feature imports | 0 | 0 |
| Onboarding time | ? | < 1 hari |
| CI pass rate | 100% | > 95% |
| Dokumentasi coverage | 30% | 100% fitur |
| Governance score | 7.6/10 | >= 9/10 |

---

## Larangan Keras

1. Import antar-feature tanpa lewat shared/.
2. Merge PR tanpa lulus CI.
3. Commit tanpa conventional message.
4. Hardcode URL, key, atau credential.
5. any di TypeScript tanpa justifikasi.
6. File > 300 baris tanpa dipecah.
7. Feature baru tanpa README.md & __tests__/.
8. Store generik di dalam feature.
9. Folder kosong tanpa .gitkeep.
10. Import relatif ../../../
11. Feature/domain implementation tanpa requirements baseline (GC-002).
12. Membuat requirement tanpa evidence (NO INVENTED REQUIREMENTS).

---

## Referensi

- Sprint 0 Report: docs/development/sprint-0-report.md
- Backlog GC-001: docs/development/Backlog GC-001.md
- Backlog GC-002: docs/development/Backlog GC-002.md
- Architecture Snapshot: docs/development/architecture-snapshot.md
- Freeze Checklist: docs/development/freeze-checklist.md
