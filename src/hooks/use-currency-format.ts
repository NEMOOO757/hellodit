import { formatCurrency } from '@/lib/formatters';
import { useSettingsStore } from '@/store/settings-store';
import { CURRENCIES } from '@/lib/constants';

export function useCurrencyFormat() {
  const currency = useSettingsStore((state) => state.currency);
  
  return {
    currency,
    format: (amount: number | null | undefined) => formatCurrency(amount, currency),
    symbol: CURRENCIES[currency].symbol,
  };
}
