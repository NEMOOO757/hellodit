import { type CategoryId, type Currency } from './transaction';

export type BudgetPeriod = 'weekly' | 'monthly';

export interface Budget {
  id: string;
  categoryId: CategoryId;
  limit: number;
  spent: number;
  currency: Currency;
  period: BudgetPeriod;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  currency: Currency;
  deadline: string;
  icon: string;
  color: string;
}

export interface BudgetUtilization {
  budget: Budget;
  percentage: number;
  remaining: number;
  status: 'safe' | 'warning' | 'danger';
}
