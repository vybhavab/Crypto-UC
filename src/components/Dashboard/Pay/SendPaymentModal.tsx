import React from "react";
import {
  Box,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormControl,
  Button,
  Stack,
  Select,
  Input,
  Text,
} from '@chakra-ui/react';

import { SendableAccounts } from 'types/cardano.types'

interface Props {
  users: SendableAccounts[],
  calculateFees: () => void,
  sendTransaction: () => void,
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  amount: number,
  isValid?: boolean,
  fees: number,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setSelectedAddress: React.Dispatch<React.SetStateAction<string>>,
  selectedAddress: string
  balance: number
}

export const SendPaymentModal = ({ users, amount,calculateFees, sendTransaction, setAmount, balance, fees, setPassword,password,setSelectedAddress, selectedAddress}: Props) => {
  return (
    <Box>
      <Stack>
        <FormControl isRequired>
          <FormLabel>Amount to send</FormLabel>
          <NumberInput
            min={0}
            onChange={(val) => {setAmount(parseInt(val))}}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Who do you want to send it to?</FormLabel>
          <Select onChange={(event) => { setSelectedAddress(event.currentTarget.value)}} value={selectedAddress}>
            {
              users!.map((user) => {
                return <option key={user.email+user.name} value={user.cardanoAcctAddress}>{user.name} &lt;{user.email}&gt;</option>
              })
            };
          </Select>
        </FormControl>
        <FormControl>
          <Input type={'password'} placeholder="Enter Password" value={password} onChange={(event) => {setPassword(event.currentTarget.value)}}/>
        </FormControl>
        <FormControl>
          <Text>Total Fees: {fees}</Text>
          <Button onClick={calculateFees} isDisabled={fees > 1 || amount < 1000000 || password.length < 10 || amount > balance}>Calculate Fees</Button>
        </FormControl>
        <FormControl>
        </FormControl>
        <FormControl>
          <Button onClick={sendTransaction} isDisabled={fees < 1 || password.length < 10}>Send Transaction</Button>
        </FormControl>
      </Stack>

    </Box>
  );
};
