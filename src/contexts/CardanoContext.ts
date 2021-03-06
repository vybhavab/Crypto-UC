import { createContext } from "react";
import { CardanoObj, Transaction } from "types/cardano.types";

const CardanoContext = createContext<CardanoObj>({
  balance: 0,
  setBalance: (_balance: number) => {},
  transactions: [],
  setTransactions: (_transactions: Transaction[]) => {},
});

export {CardanoContext};
