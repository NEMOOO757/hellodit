import { CategoryId, Currency } from '@/types/transaction';

export const DEFAULT_CURRENCY: Currency = 'IDR';

export const CURRENCIES = {
  IDR: {
    symbol: 'Rp',
    locale: 'id-ID',
    decimals: 0,
  },
  USD: {
    symbol: '$',
    locale: 'en-US',
    decimals: 2,
  },
} as const;

export const CATEGORIES: Array<{
  id: CategoryId;
  label: string;
  labelId: string;
  icon: string;
  color: string;
}> = [
  { id: 'housing', label: 'Housing', labelId: 'Tempat Tinggal', icon: 'Home', color: '#00D2FF' },
  { id: 'food', label: 'Food & Dining', labelId: 'Makan & Minum', icon: 'Utensils', color: '#00F5A0' },
  { id: 'transport', label: 'Transport', labelId: 'Transportasi', icon: 'Car', color: '#F59E0B' },
  { id: 'shopping', label: 'Shopping', labelId: 'Belanja', icon: 'ShoppingBag', color: '#EC4899' },
  { id: 'entertainment', label: 'Entertainment', labelId: 'Hiburan', icon: 'Film', color: '#8B5CF6' },
  { id: 'healthcare', label: 'Healthcare', labelId: 'Kesehatan', icon: 'HeartPulse', color: '#EF4444' },
  { id: 'subscriptions', label: 'Subscriptions', labelId: 'Langganan', icon: 'RefreshCw', color: '#6366F1' },
  { id: 'utilities', label: 'Utilities', labelId: 'Tagihan', icon: 'Zap', color: '#EAB308' },
  { id: 'education', label: 'Education', labelId: 'Pendidikan', icon: 'GraduationCap', color: '#3B82F6' },
  { id: 'salary', label: 'Salary', labelId: 'Gaji', icon: 'Briefcase', color: '#10B981' },
  { id: 'freelance', label: 'Freelance', labelId: 'Pekerjaan Lepas', icon: 'Laptop', color: '#14B8A6' },
  { id: 'investments', label: 'Investments', labelId: 'Investasi', icon: 'TrendingUp', color: '#8B5CF6' },
  { id: 'gifts', label: 'Gifts', labelId: 'Hadiah', icon: 'Gift', color: '#F43F5E' },
  { id: 'other', label: 'Other', labelId: 'Lainnya', icon: 'HelpCircle', color: '#94A3B8' },
];

export const ROUTES = {
  dashboard: '/dashboard',
  transactions: '/transactions',
  budget: '/budget',
  analytics: '/analytics',
  settings: '/settings',
} as const;

export const NAV_ITEMS = [
  { route: ROUTES.dashboard, label: 'Dashboard', labelId: 'Dasbor', icon: 'Home' },
  { route: ROUTES.transactions, label: 'Transactions', labelId: 'Transaksi', icon: 'ArrowUpDown' },
  { route: ROUTES.budget, label: 'Budget & Goals', labelId: 'Anggaran & Tujuan', icon: 'PiggyBank' },
  { route: ROUTES.analytics, label: 'Analytics', labelId: 'Analitik', icon: 'BarChart3' },
  { route: ROUTES.settings, label: 'Settings', labelId: 'Pengaturan', icon: 'Settings' },
];

export const CHART_COLORS = [
  '#00D2FF', '#00F5A0', '#F59E0B', '#EC4899', '#8B5CF6', 
  '#EF4444', '#6366F1', '#EAB308', '#3B82F6', '#10B981', 
  '#14B8A6', '#F43F5E'
];

export const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100];
