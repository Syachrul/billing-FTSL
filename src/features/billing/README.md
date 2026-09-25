# Billing Feature

## Tanggung Jawab

Menangani seluruh alur billing: pembuatan invoice, kalkulasi, pembayaran, riwayat.

## Struktur

- `api/` — HTTP call khusus billing
- `components/` — UI komponen billing
- `hooks/` — Custom hooks billing
- `screens/` — Screen billing
- `services/` — Business logic billing
- `store/` — State billing (`useBillingStore`)
- `types/` — Types billing
- `utils/` — Helper billing
- `__tests__/` — Test colocated

## Aturan

- ❌ DILARANG import dari feature lain secara langsung.
- ✅ Komunikasi antar-feature lewat `@shared/*`.
- ✅ Semua import dari luar WAJIB lewat `index.ts` feature ini.

## Public API

Import dari luar feature HANYA boleh lewat:

```ts
import { HomeScreen } from '@features/billing';
```
