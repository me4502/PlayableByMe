import { defineConfig } from 'oxlint';

export default defineConfig({
    ignorePatterns: ['**/dist/**', '**/.next/**'],
    plugins: [
        'typescript',
        'oxc',
        'unicorn',
        'react',
        'nextjs',
        'import',
        'jsx-a11y',
        'node',
    ],
    settings: {
        next: {
            rootDir: 'apps/web/',
        },
        react: {
            version: '19.2.4',
        },
    },
    rules: {
        'react/rules-of-hooks': 'error',

        'typescript/no-non-null-assertion': 'warn',
        'typescript/no-var-requires': 'warn',
        'typescript/consistent-type-imports': [
            'error',
            { prefer: 'type-imports' },
        ],
        'typescript/consistent-type-exports': [
            'error',
            { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        'typescript/no-import-type-side-effects': 'error',

        'no-empty-function': 'warn',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        'import/no-duplicates': 'error',

        'unicorn/no-useless-undefined': 'warn',
        'unicorn/prefer-string-replace-all': 'error',
    },
});
