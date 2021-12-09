import { createContext } from "react";
import { CardanoObj } from "types/cardano.types";

const CardanoContext = createContext<CardanoObj>({
  address: "",
  setAddress: (_address: string) => {},
  balance: 0,
  setBalance: (_balance: number) => {},
  transactions: [],
  setTransactions: (_transactions: string[]) => {},
});

export {CardanoContext};
