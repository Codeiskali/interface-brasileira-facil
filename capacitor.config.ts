
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4f4ea002253a48f4a79b2f514b0833bd',
  appName: 'AnestetiCalc Odonto',
  webDir: 'dist',
  server: {
    url: 'https://4f4ea002-253a-48f4-a79b-2f514b0833bd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
    }
  }
};

export default config;
