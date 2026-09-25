# Coding Standards

## Naming

- File komponen: `PascalCase.tsx` (contoh: `Button.tsx`)
- File non-komponen: `camelCase.ts` (contoh: `currency.ts`)
- Hook: `use<Nama>.ts` (contoh: `useBillingStore.ts`)
- Tipe: `PascalCase` (contoh: `Invoice`)

## Import Order

1. React / React Native
2. Third-party libs
3. `@app/*`
4. `@features/*`
5. `@shared/*`
6. `@assets/*`
7. Relative (`./`, `../`)

## TypeScript

- ❌ Dilarang `any` tanpa justifikasi tertulis.
- ✅ Gunakan `unknown` + type guard.
- ✅ Semua fungsi publik punya return type eksplisit.

## File Size

- Maksimal 300 baris per file.
- Kalau lebih, pecah jadi modul kecil.

## Error Handling

- Gunakan try/catch eksplisit.
- Jangan silent catch.
- Log error dengan konteks.
