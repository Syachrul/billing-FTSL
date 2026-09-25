# BillingApp

Aplikasi billing & POS berbasis React Native.

## Tech Stack

- React Native 0.86
- TypeScript (strict)
- NativeWind (Tailwind CSS)
- Zustand (state management)
- React Navigation
- AsyncStorage

## Setup

```bash
# Install dependencies
npm install

# iOS (butuh macOS)
cd ios && pod install && cd ..
npm run ios

# Android
npm run android
```

## Development

```bash
# Start Metro bundler
npm start

# Reset cache (jika ada masalah)
npm start -- --reset-cache
```

## Quality Checks

```bash
npm run lint          # ESLint
npm run typecheck     # TypeScript
npm run test          # Jest
npm run validate      # Semua di atas
```

## Dokumentasi

- [Architecture](docs/ARCHITECTURE.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Coding Standards](docs/CODING_STANDARDS.md)
- [Feature Template](docs/FEATURE_TEMPLATE.md)
- [ADR](docs/adr/)

## Struktur

```
src/
├── app/         # Setup aplikasi
├── features/    # Fitur bisnis (billing, printer)
├── shared/      # Cross-cutting concerns
└── assets/      # Aset global
```
