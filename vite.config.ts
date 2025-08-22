import {defineConfig} from 'vite';
import {reactRouter} from '@react-router/dev/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {devSourcemap: true},
  plugins: [devtoolsJson(), reactRouter(), tsconfigPaths()],
});
