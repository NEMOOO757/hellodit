export type Currency = 'IDR' | 'USD';
export type TransactionType = 'income' | 'expense';
export type RecurringInterval = 'weekly' | 'monthly' | 'yearly';
export type CategoryId = 'housing' | 'food' | 'transport' | 'shopping' | 'entertainment' | 'healthcare' | 'subscriptions' | 'utilities' | 'education' | 'salary' | 'freelance' | 'investments' | 'gifts' | 'other';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: CategoryId;
  description: string;
  date: string; // ISO string
  accountId: string;
  isRecurring: boolean;
  recurringInterval?: RecurringInterval;
  nextBillingDate?: string;
  tags?: string[];
  notes?: string;
}

export interface TransactionFilter {
  search: string;
  dateFrom: string | null;
  dateTo: string | null;
  categories: CategoryId[];
  types: TransactionType[];
  accountIds: string[];
  amountMin: number | null;
  amountMax: number | null;
}

export interface TransactionSort {
  field: keyof Pick<Transaction, 'date' | 'amount' | 'category' | 'description'>;
  direction: 'asc' | 'desc';
}

export interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
