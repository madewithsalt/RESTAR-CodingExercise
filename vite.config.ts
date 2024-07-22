import dsv from '@rollup/plugin-dsv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

type Config = () => void;
function Config () {

  return defineConfig({
    plugins: [react(), dsv()],
    css: {
      preprocessorOptions: {
        less: {
          relativeUrls: true
        }
      }
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  });
}

// https://vitejs.dev/config/
export default Config();
