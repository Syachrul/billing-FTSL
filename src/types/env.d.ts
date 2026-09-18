declare module 'react-native-config' {
  export interface NativeConfig {
    APP_NAME?: string;
    APP_ENV?: string;
    API_BASE_URL?: string;
    CURRENCY?: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
