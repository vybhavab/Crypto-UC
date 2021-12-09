export interface CardanoObj{
  address: string;
  setAddress: (_address: string) => void,
  balance: number;
  setBalance: (_balance: number) => void,
  transactions?: string[];
  setTransactions: (transactions: string[]) => void,
}
