export interface ProductConfig {
  appName: string;
  appTitle?: string;
  faviconUrl?: string;
  appLogoImage?: string;
  appLanguage?: string;
  loginPageImage?: string;
  loginPageUrl?: string;
}

export const PRODUCT_CONFIG: ProductConfig = {
  appName: 'Westeros',
  appTitle: 'Westeros Resorts',
  faviconUrl: 'assets/favicons/westeros.ico',
  appLogoImage: 'assets/images/logo/logo_westeros.png',
  appLanguage: 'en',
  loginPageImage: 'assets/images/pages/graphic-1.png',
  loginPageUrl: 'authentication/login'
};
