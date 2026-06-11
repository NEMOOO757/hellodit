import { type Currency } from './transaction';

export type AccountType = 'cash' | 'bank' | 'credit_card' | 'crypto';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: Currency;
  color: string;
  icon: string;
  lastSynced?: string;
  isActive: boolean;
}
