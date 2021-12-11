import { Transaction } from "types/cardano.types";

export const getTransactions = async (cardanoWalletAddress: string): Promise<Transaction[]> => {
  if(cardanoWalletAddress.length > 0){
    return await fetch(`${process.env.REACT_APP_CARDANO_WALLET_URL}/api/v0/address/getTransactions/${cardanoWalletAddress}`)
      .then((res) => res.json())
      .then((data) => {
        return data.transactions;
      }).catch((err) => {
        console.error(err);
        return [] as Transaction[]
      });
  }
  return [] as Transaction[];
};

export const getFees = async (cardanoWalletAddress: string, address: string, amount: number, password: string): Promise<number> => {
  if(cardanoWalletAddress.length > 0){
    const data = {
      address: address,
      amount: amount,
      password: password
    };
    console.log(data);

    return await fetch(`${process.env.REACT_APP_CARDANO_WALLET_URL}/api/v0/address/getFeesForTransaction/${cardanoWalletAddress}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),
      }).then((res) => res.json())
      .then((data) => {
        return data.fees.estimated_max.quantity
      }).catch((err) => {
        console.error(err);
        return -1;
      });
  }
  return -1;
};

export const sendTransaction = async (cardanoWalletAddress: string, address: string, amount: number, password: string): Promise<any> => {
  if(cardanoWalletAddress.length > 0){
    const data = {
      address: address,
      amount: amount,
      pwd: password
    };

    return await fetch(`${process.env.REACT_APP_CARDANO_WALLET_URL}/api/v0/address/makeTransaction/${cardanoWalletAddress}`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),
      }).then((res) => res.json())
      .then((data) => {
        return data;
      }).catch((err) => {
        console.error(err);
        return -1;
      });
  }
  return -1;
};

