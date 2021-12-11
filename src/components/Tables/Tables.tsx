import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components

import TablesTableRow from "components/Tables/TablesTableRow";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import { Transaction } from "types/cardano.types";

interface Props {
  transactions: Transaction[]
}

const Tables = ({ transactions }: Props) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column"  pt={{ base: "120px", md: "75px" }}>
    <Card  p={10} borderWidth='1px' borderRadius='lg'  overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Transaction History
          </Text>
        </CardHeader>

        <CardBody >
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Transaction ID
                </Th>
                <Th color="gray.400">Amount</Th>
                <Th color="gray.400">Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.length > 0 ? transactions.map((transaction) => {
                return (
                  <TablesTableRow
                    id={transaction.id}
                    isOutgoing = {transaction.direction === "outgoing"}
                    isPending = {transaction.metadata === "pending"}
                    date={new Date(transaction.inserted_at.time).toDateString() || ""}
                    unit={transaction.amount.unit}
                    amount={transaction.amount.quantity}
                    key={transaction.id}
                  />
                );
              }) : "No Transactions available"}
            </Tbody>
          </Table>

        </CardBody>
        {/* </VStack> */}
      {/* </Center> */}
    </Card>
    {/* <Card p={10} borderWidth='1px' borderRadius='lg'
      overflowX={{ sm: "scroll", xl: "hidden" }}
    >
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            Projects Table
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              <Th pl="0px" color="gray.400">
                Companies
              </Th>
              <Th color="gray.400">Budget</Th>
              <Th color="gray.400">Status</Th>
              <Th color="gray.400">Completion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tablesProjectData.map((row) => {
              return (
                <TablesProjectRow
                  name={row.name}
                  logo={row.logo}
                  status={row.status}
                  budget={row.budget}
                  progression={row.progression}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card> */}
  </Flex>
  );
}

export default Tables;
