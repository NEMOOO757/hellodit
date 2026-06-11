import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns';

export function formatCurrency(amount: number | null | undefined, currency: 'IDR' | 'USD'): string {
  if (amount === null || amount === undefined || Number.isNaN(amount)) {
    return currency === 'IDR' ? 'Rp0' : '$0.00';
  }

  const locale = currency === 'IDR' ? 'id-ID' : 'en-US';
  const decimals = currency === 'IDR' ? 0 : 2;

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(amount);
  } catch (error) {
    return currency === 'IDR' ? `Rp${amount}` : `$${amount}`;
  }
}

export function formatDate(date: string | Date | null | undefined, formatStr: 'short' | 'long' | 'relative' = 'short'): string {
  if (!date) return '-';

  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    
    if (!isValid(parsedDate)) return '-';

    if (formatStr === 'relative') {
      return formatDistanceToNow(parsedDate, { addSuffix: true });
    } else if (formatStr === 'long') {
      return format(parsedDate, 'dd MMMM yyyy, HH:mm');
    } else {
      return format(parsedDate, 'dd MMM yyyy');
    }
  } catch (error) {
    return '-';
  }
}

export function formatPercentage(value: number | null | undefined, decimals: number = 1): string {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '0.0%';
  }

  const prefix = value > 0 ? '+' : '';
  return `${prefix}${value.toFixed(decimals)}%`;
}

export function formatCompactNumber(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '0';
  }

  try {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  } catch (error) {
    return value.toString();
  }
}

export function formatAccountNumber(value: string | null | undefined): string {
  if (!value) return '';
  const strValue = String(value);
  if (strValue.length <= 4) return strValue;
  return `****${strValue.slice(-4)}`;
}

export function getMonthName(monthIndex: number): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[Math.max(0, Math.min(11, monthIndex))] || '';
}

export function getDaysUntil(dateString: string | null | undefined): number {
  if (!dateString) return 0;
  
  try {
    const targetDate = typeof dateString === 'string' ? parseISO(dateString) : dateString;
    if (!isValid(targetDate)) return 0;
    
    const now = new Date();
    const diffTime = Math.abs(targetDate.getTime() - now.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    return targetDate > now ? diffDays : 0;
  } catch (error) {
    return 0;
  }
}
