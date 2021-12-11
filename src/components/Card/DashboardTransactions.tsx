import React from 'react';

import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import TransactionRow from 'components/Tables/TransactionRow';
import { Transaction } from 'types/cardano.types';


interface Props {
  transactions: Transaction[]
}

const DashboardTransactions = ({transactions}: Props) =>{

  return(
    <Card  my="24px" ms={{ lg: "24px" }}>
      <CardHeader mb="12px" pr={2}>
        <Flex direction="column" w="100%">
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w="100%"
            my={{ md: "12px" }}
          >
            <Text
              color={useColorModeValue('gray.700', 'white')}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight="bold"
            >
              Your Transactions
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody pr={2}>
        <Flex direction="column" w="100%">
          {transactions!.length < 1? "No transactions Available": transactions!.map((transaction) => {
            return (
              <TransactionRow
                name={transaction.id}
                isOutgoing={transaction.direction === "outgoing"}
                isPending={transaction.status === "pending"}
                date={new Date(transaction.inserted_at.time).toDateString()}
                price={transaction.amount.quantity}
                unit={transaction.amount.unit}
                key={transaction.id}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  )
}

export default DashboardTransactions;
