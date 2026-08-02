export type TransactionCategory =
  | "Alimentação"
  | "Utilidades"
  | "Saúde"
  | "Transporte"
  | "Outros";

export interface Transaction {
  id: string;
  category: TransactionCategory;
  amount: number;
  date: string;
  description: string;
  direction: "income" | "expense";
}

export const initialTransactions: Transaction[] = [
  { id: "123131321", category: "Alimentação", amount: 150, date: "2026-06-11", description: "Bonna Parma", direction: "expense" },
  { id: "4564654", category: "Utilidades", amount: 130, date: "2026-06-09", description: "CPFL Energia", direction: "expense" },
  { id: "65445", category: "Saúde", amount: 15, date: "2026-06-08", description: "Farma Ponte", direction: "expense" },
  { id: "656565", category: "Transporte", amount: 15, date: "2026-06-08", description: "Uber", direction: "expense" },
  { id: "926544", category: "Outros", amount: 150, date: "2026-06-05", description: "AliExpress", direction: "expense" },
  { id: "salary-01", category: "Outros", amount: 3250, date: "2026-06-01", description: "Salário", direction: "income" },
];

export const categories: TransactionCategory[] = ["Alimentação", "Utilidades", "Saúde", "Transporte", "Outros"];
