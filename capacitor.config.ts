import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'pokedex',
  // webDir: '.svelte-kit/output/server/_app'

  webDir: 'build',
  // bundledWebRuntime:false,
  linuxAndroidStudioPath:"/opt/android-studio/bin/studio.sh",
  // server: {
  //   url: "http://192.168.19.60:5173",
  //   // url:"http://localhost:5173"
  //   cleartext: true
  // },
};

export default config;
