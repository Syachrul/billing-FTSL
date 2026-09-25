# Feature Template

Setiap feature WAJIB mengikuti struktur ini:

```
src/features/<feature-name>/
├── api/              # HTTP call khusus feature
├── components/       # UI komponen
├── hooks/            # Custom hooks
├── screens/          # Screen
├── services/         # Business logic
├── store/            # State (use<Feature>Store.ts)
├── types/            # Types
├── utils/            # Helper
├── __tests__/        # Test colocated
├── index.ts          # Public API
└── README.md         # Dokumentasi
```

## Aturan

- ❌ DILARANG import dari feature lain secara langsung.
- ✅ Komunikasi antar-feature lewat `@shared/*`.
- ✅ Semua import dari luar WAJIB lewat `index.ts` feature.
