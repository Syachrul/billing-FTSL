# Printer Feature

## Tanggung Jawab

Menangani koneksi & komunikasi printer (Bluetooth, USB, Network).

## Struktur

- api/ — HTTP call khusus printer
- components/ — UI komponen printer
- hooks/ — Custom hooks printer
- screens/ — Screen printer
- services/ — Business logic printer
- store/ — State printer (usePrinterStore)
- types/ — Types printer
- utils/ — Helper printer
- **tests**/ — Test colocated

## Aturan

- DILARANG import dari feature lain secara langsung.
- Komunikasi antar-feature lewat @shared/\*.
- Semua import dari luar WAJIB lewat index.ts feature ini.
