import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Transaction, TransactionFilter, TransactionSort, TransactionType } from '@/types/transaction';
import type { Account } from '@/types/account';
import type { CashflowDataPoint, CategoryBreakdown } from '@/types/chart';
import { mockTransactions, mockAccounts } from '@/lib/mock-data';
import { generateId } from '@/lib/utils';
import { CATEGORIES } from '@/lib/constants';

interface FinanceState {
  transactions: Transaction[];
  accounts: Account[];
  isInitialized: boolean;
  
  initializeWithMockData: () => void;
  addTransaction: (data: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: string, data: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  
  getTotalBalance: () => number;
  getMonthlyIncome: (year?: number, month?: number) => number;
  getMonthlyExpenses: (year?: number, month?: number) => number;
  getNetSavingsRate: () => number;
  getRecentTransactions: (count: number) => Transaction[];
  getCashflowData: (months: number) => CashflowDataPoint[];
  getCategoryBreakdown: (type: TransactionType, year?: number, month?: number) => CategoryBreakdown[];
  getFilteredTransactions: (filter: TransactionFilter, sort: TransactionSort) => Transaction[];
  getMonthlyChange: (metric: 'income' | 'expenses') => number;
}

export const useFinanceStore = create<FinanceState>()(
  persist(
    (set, get) => ({
      transactions: [],
      accounts: [],
      isInitialized: false,
      
      initializeWithMockData: () => {
        if (!get().isInitialized) {
          set({
            transactions: mockTransactions,
            accounts: mockAccounts,
            isInitialized: true,
          });
        }
      },
      
      addTransaction: (data) => {
        set((state) => ({
          transactions: [{ ...data, id: generateId() }, ...state.transactions]
        }));
      },
      
      updateTransaction: (id, data) => {
        set((state) => ({
          transactions: state.transactions.map(t => t.id === id ? { ...t, ...data } : t)
        }));
      },
      
      deleteTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter(t => t.id !== id)
        }));
      },
      
      getTotalBalance: () => {
        return get().accounts.reduce((sum, acc) => sum + acc.balance, 0);
      },
      
      getMonthlyIncome: (year, month) => {
        const now = new Date();
        const y = year ?? now.getFullYear();
        const m = month ?? now.getMonth();
        
        return get().transactions
          .filter(t => t.type === 'income')
          .filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === y && d.getMonth() === m;
          })
          .reduce((sum, t) => sum + t.amount, 0);
      },
      
      getMonthlyExpenses: (year, month) => {
        const now = new Date();
        const y = year ?? now.getFullYear();
        const m = month ?? now.getMonth();
        
        return get().transactions
          .filter(t => t.type === 'expense')
          .filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === y && d.getMonth() === m;
          })
          .reduce((sum, t) => sum + t.amount, 0);
      },
      
      getNetSavingsRate: () => {
        const income = get().getMonthlyIncome();
        const expenses = get().getMonthlyExpenses();
        if (income === 0) return 0;
        return ((income - expenses) / income) * 100;
      },
      
      getRecentTransactions: (count) => {
        const sorted = [...get().transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return sorted.slice(0, count);
      },
      
      getCashflowData: (months) => {
        const data: CashflowDataPoint[] = [];
        const now = new Date();
        
        for (let i = months - 1; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const monthName = d.toLocaleString('default', { month: 'short' });
          const income = get().getMonthlyIncome(d.getFullYear(), d.getMonth());
          const expense = get().getMonthlyExpenses(d.getFullYear(), d.getMonth());
          data.push({
            month: monthName,
            income,
            expense,
            net: income - expense
          });
        }
        return data;
      },
      
      getCategoryBreakdown: (type, year, month) => {
        const now = new Date();
        const y = year ?? now.getFullYear();
        const m = month ?? now.getMonth();
        
        const filtered = get().transactions
          .filter(t => t.type === type)
          .filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === y && d.getMonth() === m;
          });
          
        const total = filtered.reduce((sum, t) => sum + t.amount, 0);
        
        const grouped = filtered.reduce((acc, t) => {
          if (!acc[t.category]) acc[t.category] = 0;
          acc[t.category] += t.amount;
          return acc;
        }, {} as Record<string, number>);
        
        return Object.entries(grouped)
          .map(([categoryId, amount]) => {
            const cat = CATEGORIES.find(c => c.id === categoryId);
            return {
              category: cat?.label || categoryId,
              categoryId,
              amount,
              percentage: total > 0 ? (amount / total) * 100 : 0,
              color: cat?.color || '#ccc',
              icon: cat?.icon || 'HelpCircle'
            };
          })
          .sort((a, b) => b.amount - a.amount);
      },
      
      getFilteredTransactions: (filter, sort) => {
        let result = [...get().transactions];
        
        if (filter.search) {
          const q = filter.search.toLowerCase();
          result = result.filter(t => t.description.toLowerCase().includes(q));
        }
        
        if (filter.dateFrom) {
          const from = new Date(filter.dateFrom).getTime();
          result = result.filter(t => new Date(t.date).getTime() >= from);
        }
        
        if (filter.dateTo) {
          const to = new Date(filter.dateTo).getTime();
          result = result.filter(t => new Date(t.date).getTime() <= to);
        }
        
        if (filter.categories.length > 0) {
          result = result.filter(t => filter.categories.includes(t.category));
        }
        
        if (filter.types.length > 0) {
          result = result.filter(t => filter.types.includes(t.type));
        }
        
        if (filter.accountIds.length > 0) {
          result = result.filter(t => filter.accountIds.includes(t.accountId));
        }
        
        if (filter.amountMin !== null) {
          result = result.filter(t => t.amount >= filter.amountMin!);
        }
        
        if (filter.amountMax !== null) {
          result = result.filter(t => t.amount <= filter.amountMax!);
        }
        
        result.sort((a, b) => {
          let valA = a[sort.field];
          let valB = b[sort.field];
          
          if (sort.field === 'date') {
            valA = new Date(a.date).getTime() as any;
            valB = new Date(b.date).getTime() as any;
          }
          
          if (valA < valB) return sort.direction === 'asc' ? -1 : 1;
          if (valA > valB) return sort.direction === 'asc' ? 1 : -1;
          return 0;
        });
        
        return result;
      },
      
      getMonthlyChange: (metric) => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        
        const prevMonthDate = new Date(currentYear, currentMonth - 1, 1);
        const prevYear = prevMonthDate.getFullYear();
        const prevMonth = prevMonthDate.getMonth();
        
        let current = 0;
        let prev = 0;
        
        if (metric === 'income') {
          current = get().getMonthlyIncome(currentYear, currentMonth);
          prev = get().getMonthlyIncome(prevYear, prevMonth);
        } else {
          current = get().getMonthlyExpenses(currentYear, currentMonth);
          prev = get().getMonthlyExpenses(prevYear, prevMonth);
        }
        
        if (prev === 0) return current > 0 ? 100 : 0;
        return ((current - prev) / prev) * 100;
      }
    }),
    {
      name: 'hellodit-finance',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
