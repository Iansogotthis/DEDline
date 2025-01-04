
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.datavis.app',
  appName: 'Data Visualization App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
