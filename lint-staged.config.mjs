export default {
    '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,json}': [
        'oxfmt --write',
        'oxlint --type-aware',
    ],
};
