# BACKLOG ITEM: GC-001
## Governance Completion Phase (Sprint 0.5)

| Field | Value |
|---|---|
| **ID** | GC-001 |
| **Nama** | Governance Completion Phase |
| **Tipe** | Chore / Governance |
| **Prioritas** | Medium (dilakukan setelah Sprint 1 atau paralel) |
| **Estimasi** | 3 hari |
| **Trigger** | Setelah Sprint 1 selesai, atau saat butuh audit governance |
| **Owner** | Andri |
| **Status** | BACKLOG - belum dikerjakan |
| **Dibuat** | 2025-09-26 |

---

## Tujuan

Melengkapi artefak IT Governance yang belum ada, menaikkan skor governance dari **7.6/10 -> 9/10**.

---

## Deliverables (Checklist)

### Prioritas Tinggi (Risk & DoD)

- [ ] `docs/RISK_REGISTER.md` - Daftar risiko + mitigasi + owner
  - Minimal 10 risiko: dependency, data loss, printer compat, burnout, credential leak
- [ ] `docs/DEFINITION_OF_DONE.md` - Standar penyelesaian task/fitur
  - Code review, test passing, lint clean, docs update, changelog
- [ ] `docs/SECURITY.md` - Security policy
  - Cara handle credential, network security, storage security
- [ ] `SECURITY.md` (root repo) - Cara report vulnerability
- [ ] `docs/SECRETS.md` - Cara manage credentials
  - Lokasi env, cara rotate, apa yang TIDAK boleh masuk Git
- [ ] Update `.github/workflows/ci.yml` - Tambah `npm audit --audit-level=high`

### Prioritas Sedang (Strategic & Resource)

- [ ] `docs/VISION.md` - Visi & tujuan bisnis BillingApp
- [ ] `docs/BUSINESS_CASE.md` - Kenapa project ini ada, target user
- [ ] `docs/ENVIRONMENTS.md` - Inventory environment (dev/staging/prod)
- [ ] `CHANGELOG.md` - Mulai tracking perubahan (Keep a Changelog format)
- [ ] `docs/METRICS.md` - Cara tracking KPI governance
  - Review cadence: weekly, bi-weekly, monthly, per sprint

### Prioritas Rendah (Nice to Have)

- [ ] `docs/RUNBOOK.md` - SOP operasional (deploy, rollback, incident)
- [ ] `CODEOWNERS` - Definisi ownership file/folder
- [ ] Sprint Retrospective Template - `docs/development/retrospective-template.md`
- [ ] Onboarding Checklist - `docs/ONBOARDING.md`
- [ ] Backup Strategy - mirror repo, backup DB

---

## Urutan Eksekusi (Kalau Dikerjakan)

### Hari 1 - Strategic & Value

```bash
git checkout -b chore/governance-completion
# Buat:
# - docs/VISION.md
# - docs/BUSINESS_CASE.md
# - docs/DEFINITION_OF_DONE.md
git commit -m "docs(governance): add vision, business case, and DoD"
Hari 2 - Risk & Security
bash
# Buat:
# - docs/RISK_REGISTER.md
# - docs/SECURITY.md
# - SECURITY.md (root)
# - docs/SECRETS.md
# Update .github/workflows/ci.yml (npm audit)
git commit -m "docs(governance): add risk register and security policy"
Hari 3 - Resource & Performance
bash
# Buat:
# - docs/ENVIRONMENTS.md
# - CHANGELOG.md
# - docs/METRICS.md
# - docs/RUNBOOK.md
git commit -m "docs(governance): add environments, changelog, and metrics"
Finalisasi
bash
git push -u origin chore/governance-completion
# Buat PR -> develop
Gap Analysis (Baseline untuk Evaluasi)
Pilar Governance	Skor Sekarang	Target Setelah GC-001
Strategic Alignment	9/10	9/10 (sudah bagus)
Value Delivery	8/10	9/10
Risk Management	7/10	9/10
Resource Management	6/10	8/10
Performance Measurement	8/10	9/10
Rata-rata	7.6/10	8.8/10
Referensi
Roadmap asli: docs/development/roadmap.md

Sprint 0 report: docs/development/sprint-0-report.md

Framework acuan: COBIT 2019 (partial), ISO 27001 (partial), Scrum

Trigger untuk Mulai GC-001
GC-001 dikerjakan ketika salah satu kondisi ini terpenuhi:

Sprint 1 (Shared Layer) selesai

Sebelum masuk Sprint 3 (Testing) - karena risk management penting untuk testing

Saat ada rencana onboarding orang lain ke project

Saat ada rencana release eksternal / demo ke stakeholder

Saat butuh audit governance (misal: untuk portofolio, funding, atau review)

CATATAN PENTING
Backlog ini disimpan sebagai referensi. Ketika tiba waktunya, tinggal bilang:

"Kerjakan GC-001" atau "Mulai Governance Completion"

Semua file yang dibutuhkan akan di-generate berdasarkan spesifikasi di atas.

Ringkasan Satu Baris
GC-001: Governance Completion Phase - 3 hari, 13 deliverables, target naikkan governance score dari 7.6 -> 8.8. Status: BACKLOG.
