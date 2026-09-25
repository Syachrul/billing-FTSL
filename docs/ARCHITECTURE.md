# Architecture — BillingApp

## Prinsip

1. **Feature-Sliced Design (Lite)** — pisahkan `app`, `shared`, `features`.
2. **Feature Isolation** — fitur tidak boleh import fitur lain langsung.
3. **Single Source of Truth** — satu tempat untuk api, config, store global.
4. **Predictable Structure** — semua fitur punya struktur identik.

## Layer

- `src/app/` — setup aplikasi (providers, navigation root, styles)
- `src/features/` — fitur bisnis (billing, printer, ...)
- `src/shared/` — cross-cutting (api, components, config, hooks, lib, store, theme, types, utils)
- `src/assets/` — aset global (fonts, icons, images)

## Aturan Import

- ✅ `features/*` boleh import dari `shared/*`
- ✅ `app/*` boleh import dari `features/*` dan `shared/*`
- ❌ `features/A` DILARANG import dari `features/B`
- ❌ Tidak boleh import relatif `../../../` — wajib pakai alias

## Path Alias

- `@/*` → `src/*`
- `@app/*` → `src/app/*`
- `@features/*` → `src/features/*`
- `@shared/*` → `src/shared/*`
- `@assets/*` → `src/assets/*`

## Menambah Feature Baru

1. Buat folder di `src/features/<nama>` dengan struktur baku.
2. Ikuti template di `docs/FEATURE_TEMPLATE.md`.
3. Buat `index.ts` sebagai public API.
4. Buat `README.md`.
