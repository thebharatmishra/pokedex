import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pokedex',
  // webDir: '.svelte-kit/output/server/_app'

  webDir: 'build',
  bundledWebRuntime:false
};

export default config;
