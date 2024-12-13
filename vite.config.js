import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { execSync } from 'child_process';

let currentBranch = '/'; // Default fallback

try {
  // Attempt to get the current Git branch
  currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (error) {
  console.warn('Git branch not found. Using default base:', error.message);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: currentBranch === 'gh-pages' ? '/Wallet-App/' : '/',
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svg'],
  },
  server: {
    port: (process.env.NODE_ENV === 'production' ? process.env.PORT : 5173) || 4000,
  },
});
