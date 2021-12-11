export interface CardanoObj{
  balance: number;
  setBalance: (_balance: number) => void,
  transactions?: Transaction[];
  setTransactions: (transactions: Transaction[]) => void,
}

export interface SendableAccounts {
  name: string;
  email: string;
  cardanoAcctAddress: string;
  imageUrl: string;
}

export interface Transaction {
  id: string,
  amount: Amount,
  fee: {
    quantity: number,
    unit: string
  },
  deposit: {
    quantity: number,
    unit: string
  },
  direction: string,
  inserted_at: {
    height: {
      quantity: number,
      unit: string
    },
    time: string,
    epoch_number: number,
    absolute_slot_number: number,
    slot_number: number
  },
  depth: {
    quantity: number,
    unit: string
  },
  inputs: incomingTransaction[],
  outputs: outgoingTransaction[],
  withdrawals: [],
  mint: [],
  status: string,
  metadata: null
}

interface Amount {
    quantity: number,
    unit: string
}

interface incomingTransaction {
  amount: Amount,
  address: string,
  id: string,
  assets: any[],
  index: number
}

interface outgoingTransaction {
  amount: Amount,
  address: string,
  assets: any[]
}
