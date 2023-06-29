import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ihmyh',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    ScreenOrientation: {
      default: 'portrait',
    },
  },
};

export default config;
