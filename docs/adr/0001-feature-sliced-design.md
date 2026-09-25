# ADR-0001: Adopsi Feature-Sliced Design (Lite)

- **Status:** Accepted
- **Date:** `+ today +`
- **Deciders:** Owner, Tech Lead

## Context

Struktur awal tidak konsisten antar fitur, tidak ada layer global, dan sulit di-scale. Import relatif `../../../` tersebar di mana-mana.

## Decision

Adopsi Feature-Sliced Design versi lite dengan 3 layer utama:

- `app` — setup aplikasi
- `features` — fitur bisnis
- `shared` — cross-cutting concerns

## Consequences

### Positif

- ✅ Fitur terisolasi, mudah di-test
- ✅ Onboarding cepat
- ✅ Struktur predictable

### Negatif

- ⚠️ Perlu refactor existing code
- ⚠️ Perlu disiplin import
- ⚠️ Learning curve untuk kontributor baru
