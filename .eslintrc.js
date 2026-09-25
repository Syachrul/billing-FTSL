module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['import', 'simple-import-sort', 'unused-imports'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // === Import sorting ===
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. React & React Native
          ['^react$', '^react-native$', '^@react-native'],
          // 2. Third-party
          ['^@?w'],
          // 3. App layer
          ['^@app'],
          // 4. Features
          ['^@features'],
          // 5. Shared
          ['^@shared'],
          // 6. Assets
          ['^@assets'],
          // 7. Relative imports
          ['^.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // === Unused imports ===
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // === Larangan import relatif naik 2+ level ===
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../*', '../../../*', '../../../../*'],
            message:
              'DILARANG import relatif naik 2+ level. Gunakan path alias (@app, @features, @shared, @assets).',
          },
        ],
      },
    ],

    // === Larangan import antar-feature ===
    // Aktifkan bertahap setelah semua fitur stabil.
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     patterns: [
    //       {
    //         group: ['@features/printer/*'],
    //         message: 'Feature billing DILARANG import dari feature printer langsung. Gunakan @shared/*.',
    //       },
    //     ],
    //   },
    // ],

    // === Best practices ===
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '__tests__/**/*'],
      env: { jest: true },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'android/',
    'ios/',
    'coverage/',
    '*.config.js',
    'commitlint.config.js',
    '.eslintrc.js',
    '.prettierrc.js',
  ],
};
