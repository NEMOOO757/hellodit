export interface CashflowDataPoint {
  month: string;
  income: number;
  expense: number;
  net: number;
}

export interface CategoryBreakdown {
  category: string;
  categoryId: string;
  amount: number;
  percentage: number;
  color: string;
  icon: string;
}

export interface ChartTooltipPayload {
  name: string;
  value: number;
  color: string;
  dataKey: string;
}
