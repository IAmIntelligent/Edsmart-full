import imageminPngquant from 'imagemin-pngquant';
// import imageminMozjpeg from 'imagemin-mozjpeg';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import  imageminPlugin  from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      pngquant: {
        quality: [0.6, 0.8],
      },
      mozjpeg: {
        quality: 75,
      },
    }),
  ],
});
