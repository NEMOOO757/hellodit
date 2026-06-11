import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Budget, SavingsGoal, BudgetUtilization } from '@/types/budget';
import { mockBudgets, mockGoals } from '@/lib/mock-data';
import type { CategoryId } from '@/types/transaction';
import { generateId } from '@/lib/utils';

interface BudgetState {
  budgets: Budget[];
  goals: SavingsGoal[];
  isInitialized: boolean;
  
  initializeWithMockData: () => void;
  setBudget: (categoryId: CategoryId, limit: number) => void;
  updateGoalProgress: (goalId: string, amount: number) => void;
  getBudgetUtilizations: () => BudgetUtilization[];
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set, get) => ({
      budgets: [],
      goals: [],
      isInitialized: false,
      
      initializeWithMockData: () => {
        if (!get().isInitialized) {
          set({
            budgets: mockBudgets,
            goals: mockGoals,
            isInitialized: true,
          });
        }
      },
      
      setBudget: (categoryId, limit) => {
        set((state) => {
          const existing = state.budgets.find(b => b.categoryId === categoryId);
          if (existing) {
            return {
              budgets: state.budgets.map(b => b.categoryId === categoryId ? { ...b, limit } : b)
            };
          }
          return {
            budgets: [...state.budgets, { id: generateId(), categoryId, limit, spent: 0, currency: 'IDR', period: 'monthly' }]
          };
        });
      },
      
      updateGoalProgress: (goalId, amount) => {
        set((state) => ({
          goals: state.goals.map(g => g.id === goalId ? { ...g, currentAmount: Math.min(g.targetAmount, g.currentAmount + amount) } : g)
        }));
      },
      
      getBudgetUtilizations: () => {
        return get().budgets.map(budget => {
          const percentage = budget.limit > 0 ? (budget.spent / budget.limit) * 100 : 0;
          let status: 'safe' | 'warning' | 'danger' = 'safe';
          if (percentage >= 90) status = 'danger';
          else if (percentage >= 75) status = 'warning';
          
          return {
            budget,
            percentage: Math.min(100, percentage),
            remaining: Math.max(0, budget.limit - budget.spent),
            status,
          };
        });
      }
    }),
    {
      name: 'hellodit-budgets',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
