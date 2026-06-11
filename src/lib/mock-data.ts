import { Account } from '@/types/account';
import { Transaction } from '@/types/transaction';
import { Budget, SavingsGoal } from '@/types/budget';
import { CashflowDataPoint } from '@/types/chart';

export const mockAccounts: Account[] = [
  { id: 'acc-1', name: 'BCA Checking', type: 'bank', balance: 45750000, currency: 'IDR', color: '#00D2FF', icon: 'Building2', isActive: true, lastSynced: new Date().toISOString() },
  { id: 'acc-2', name: 'Mandiri Savings', type: 'bank', balance: 128500000, currency: 'IDR', color: '#00F5A0', icon: 'PiggyBank', isActive: true, lastSynced: new Date().toISOString() },
  { id: 'acc-3', name: 'BRI Credit Card', type: 'credit_card', balance: -8250000, currency: 'IDR', color: '#FF4A4A', icon: 'CreditCard', isActive: true, lastSynced: new Date().toISOString() },
  { id: 'acc-4', name: 'Bitcoin Wallet', type: 'crypto', balance: 35000000, currency: 'IDR', color: '#F7931A', icon: 'Bitcoin', isActive: true, lastSynced: new Date().toISOString() }
];

const mockTransactionsRaw = [
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan Juni', accountId: 'acc-1', dateOff: 1 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 2 },
  { type: 'expense', amount: 50000, category: 'food', description: 'Nasi Goreng Pak Joko', accountId: 'acc-1', dateOff: 3 },
  { type: 'expense', amount: 150000, category: 'transport', description: 'Grab ke Sudirman', accountId: 'acc-3', dateOff: 4 },
  { type: 'expense', amount: 1200000, category: 'shopping', description: 'Beli Sepatu Nike', accountId: 'acc-3', dateOff: 5 },
  { type: 'expense', amount: 350000, category: 'utilities', description: 'Listrik PLN', accountId: 'acc-1', dateOff: 6 },
  { type: 'expense', amount: 500000, category: 'utilities', description: 'Internet Indihome', accountId: 'acc-1', dateOff: 7 },
  { type: 'expense', amount: 54000, category: 'subscriptions', description: 'Netflix Premium', accountId: 'acc-3', dateOff: 8, isRecurring: true, recurringInterval: 'monthly' },
  { type: 'expense', amount: 49000, category: 'subscriptions', description: 'Spotify Premium', accountId: 'acc-3', dateOff: 9, isRecurring: true, recurringInterval: 'monthly' },
  { type: 'income', amount: 5500000, category: 'freelance', description: 'Proyek Website Klien A', accountId: 'acc-1', dateOff: 12 },
  { type: 'expense', amount: 250000, category: 'food', description: 'Makan Malam di Senopati', accountId: 'acc-3', dateOff: 14 },
  { type: 'expense', amount: 350000, category: 'entertainment', description: 'Tiket Bioskop Premiere', accountId: 'acc-3', dateOff: 15 },
  { type: 'expense', amount: 1500000, category: 'investments', description: 'Beli Reksa Dana Saham', accountId: 'acc-2', dateOff: 18 },
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan Mei', accountId: 'acc-1', dateOff: 32 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 33 },
  { type: 'expense', amount: 45000, category: 'food', description: 'Kopi Kenangan', accountId: 'acc-1', dateOff: 34 },
  { type: 'expense', amount: 125000, category: 'transport', description: 'Taksi Bluebird', accountId: 'acc-1', dateOff: 35 },
  { type: 'expense', amount: 850000, category: 'shopping', description: 'Baju Zara', accountId: 'acc-3', dateOff: 38 },
  { type: 'expense', amount: 250000, category: 'healthcare', description: 'Beli Vitamin di Apotek', accountId: 'acc-3', dateOff: 40 },
  { type: 'income', amount: 8000000, category: 'freelance', description: 'Proyek Desain Logo', accountId: 'acc-1', dateOff: 45 },
  { type: 'expense', amount: 450000, category: 'entertainment', description: 'Langganan Game', accountId: 'acc-3', dateOff: 48 },
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan April', accountId: 'acc-1', dateOff: 62 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 63 },
  { type: 'expense', amount: 75000, category: 'food', description: 'Sate Ayam Madura', accountId: 'acc-1', dateOff: 65 },
  { type: 'expense', amount: 2500000, category: 'investments', description: 'Beli Bitcoin', accountId: 'acc-4', dateOff: 68 },
  { type: 'expense', amount: 2000000, category: 'gifts', description: 'Kado Ulang Tahun Ibu', accountId: 'acc-1', dateOff: 70 },
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan Maret', accountId: 'acc-1', dateOff: 92 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 93 },
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan Februari', accountId: 'acc-1', dateOff: 122 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 123 },
  { type: 'income', amount: 15000000, category: 'salary', description: 'Gaji Bulan Januari', accountId: 'acc-1', dateOff: 152 },
  { type: 'expense', amount: 3500000, category: 'housing', description: 'Sewa Apartemen', accountId: 'acc-1', dateOff: 153 },
];

export const mockTransactions: Transaction[] = mockTransactionsRaw.map((t, index) => {
  const date = new Date();
  date.setDate(date.getDate() - t.dateOff);
  
  return {
    id: `txn-${index + 1}`,
    type: t.type as any,
    amount: t.amount,
    currency: 'IDR',
    category: t.category as any,
    description: t.description,
    date: date.toISOString(),
    accountId: t.accountId,
    isRecurring: t.isRecurring || false,
    recurringInterval: t.recurringInterval as any,
  };
});

export const mockBudgets: Budget[] = [
  { id: 'b-1', categoryId: 'housing', limit: 4000000, spent: 3500000, currency: 'IDR', period: 'monthly' },
  { id: 'b-2', categoryId: 'food', limit: 3000000, spent: 2100000, currency: 'IDR', period: 'monthly' },
  { id: 'b-3', categoryId: 'transport', limit: 1500000, spent: 1350000, currency: 'IDR', period: 'monthly' },
  { id: 'b-4', categoryId: 'shopping', limit: 2000000, spent: 600000, currency: 'IDR', period: 'monthly' },
  { id: 'b-5', categoryId: 'entertainment', limit: 1000000, spent: 450000, currency: 'IDR', period: 'monthly' },
  { id: 'b-6', categoryId: 'subscriptions', limit: 500000, spent: 182000, currency: 'IDR', period: 'monthly' },
  { id: 'b-7', categoryId: 'utilities', limit: 1200000, spent: 1000000, currency: 'IDR', period: 'monthly' },
  { id: 'b-8', categoryId: 'healthcare', limit: 1000000, spent: 250000, currency: 'IDR', period: 'monthly' },
];

export const mockGoals: SavingsGoal[] = [
  { id: 'g-1', name: 'Dana Darurat', targetAmount: 50000000, currentAmount: 30000000, currency: 'IDR', deadline: new Date(new Date().setMonth(new Date().getMonth() + 6)).toISOString(), icon: 'Shield', color: '#00F5A0' },
  { id: 'g-2', name: 'Mobil Baru', targetAmount: 250000000, currentAmount: 87500000, currency: 'IDR', deadline: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(), icon: 'Car', color: '#00D2FF' },
  { id: 'g-3', name: 'Liburan Bali', targetAmount: 15000000, currentAmount: 12000000, currency: 'IDR', deadline: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString(), icon: 'Plane', color: '#A855F7' }
];

export const mockCashflowData: CashflowDataPoint[] = [
  { month: 'Jan', income: 15000000, expense: 9500000, net: 5500000 },
  { month: 'Feb', income: 15000000, expense: 11200000, net: 3800000 },
  { month: 'Mar', income: 15000000, expense: 8700000, net: 6300000 },
  { month: 'Apr', income: 23000000, expense: 14500000, net: 8500000 },
  { month: 'May', income: 15000000, expense: 10100000, net: 4900000 },
  { month: 'Jun', income: 20500000, expense: 9300000, net: 11200000 },
];
