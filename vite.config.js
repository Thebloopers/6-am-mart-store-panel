import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  // Load environment variables
  const serverUrl = process.env.VITE_SERVER_URL;
  const serverUrlWithoutApi = process.env.VITE_SERVER_URL_WITHOUT_API;
  const encryptKey = process.env.VITE_ENCRYPT_KEY;

  return {
    plugins: [react()],
    define: {
      'process.env': {
        VITE_SERVER_URL: JSON.stringify(serverUrl),
        VITE_SERVER_URL_WITHOUT_API: JSON.stringify(serverUrlWithoutApi),
        VITE_ENCRYPT_KEY: JSON.stringify(encryptKey),
      },
    },
  };
});
