import { defineConfig } from 'tsdown';

export default defineConfig({
    format: ['esm'],
    platform: 'node',
    clean: true,
    dts: true,
    outDir: 'dist',
    tsconfig: './tsconfig.json',
});
