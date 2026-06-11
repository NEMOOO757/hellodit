import { z } from 'zod';
import { CATEGORIES } from './constants';

const categoryIds = CATEGORIES.map(c => c.id) as [string, ...string[]];

export const transactionSchema = z.object({
  type: z.enum(['income', 'expense']),
  amount: z.number().positive('Amount must be positive').transform(v => Math.round(v * 100) / 100),
  currency: z.enum(['IDR', 'USD']),
  category: z.enum(categoryIds as any),
  description: z.string().min(1, 'Description is required').max(200, 'Description too long').trim(),
  date: z.string().refine(v => !isNaN(Date.parse(v)), 'Invalid date'),
  accountId: z.string().min(1, 'Account is required'),
  isRecurring: z.boolean(),
  recurringInterval: z.enum(['weekly', 'monthly', 'yearly']).optional(),
  nextBillingDate: z.string().optional(),
  tags: z.array(z.string()).optional(),
  notes: z.string().max(500).optional(),
});

export const budgetSchema = z.object({
  categoryId: z.enum(categoryIds as any),
  limit: z.number().positive('Budget limit must be positive'),
  period: z.enum(['weekly', 'monthly']),
  currency: z.enum(['IDR', 'USD']),
});

export const goalSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  targetAmount: z.number().positive(),
  deadline: z.string().refine(v => new Date(v) > new Date(), 'Deadline must be in the future'),
  icon: z.string(),
  color: z.string(),
});

export type TransactionFormData = z.infer<typeof transactionSchema>;
export type BudgetFormData = z.infer<typeof budgetSchema>;
export type GoalFormData = z.infer<typeof goalSchema>;
