import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Currency } from '@/types/transaction';
import type { Locale } from '@/lib/i18n';

type Theme = 'dark' | 'light' | 'holographic';

interface SettingsState {
  theme: Theme;
  currency: Currency;
  locale: Locale;
  sidebarCollapsed: boolean;
  setTheme: (theme: Theme) => void;
  setCurrency: (currency: Currency) => void;
  setLocale: (locale: Locale) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'dark',
      currency: 'IDR',
      locale: 'en',
      sidebarCollapsed: false,
      setTheme: (theme) => set({ theme }),
      setCurrency: (currency) => set({ currency }),
      setLocale: (locale) => set({ locale }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
    }),
    {
      name: 'hellodit-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
