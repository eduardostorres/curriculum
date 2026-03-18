/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    __portfolioPreferences?: {
      applyTheme: (theme: 'dark' | 'light') => void;
      applyLanguage: (language: 'es' | 'en') => void;
      getPreferredTheme: () => 'dark' | 'light';
      getPreferredLanguage: () => 'es' | 'en';
    };
  }
}

export {};
