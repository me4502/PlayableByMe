import { defineConfig, mergeConfig } from 'tsdown';
import baseConfig from '@playablebyme/tsdown-config';

export default mergeConfig(
    baseConfig,
    defineConfig({
        entry: ['src/index.ts'],
    }),
);
