import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import {BiWallet} from "react-icons/bi";
import CardBody from './CardBody';
import { newestTransactions, olderTransactions } from 'variables/general';
import TransactionRow from 'components/Tables/TransactionRow';
import { BsCalendar3 } from 'react-icons/bs';


const DashboardTransactions = () =>{
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
                <Flex align="center" >
                  <Icon
                    as={BsCalendar3}
                    color="gray.400"
                    fontSize="md"
                    me="6px"
                  ></Icon>
                  <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                    23 - 30 March 2021
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody pr={2}>
            <Flex direction="column" w="100%">
                <Text
                  color="gray.400"
                  fontSize={{ sm: "sm", md: "md" }}
                  fontWeight="semibold"
                  my="12px"
                >
                  NEWEST
                </Text>
                {newestTransactions.map((row) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                    />
                  );
                })}
                <Text
                  color="gray.400"
                  fontSize={{ sm: "sm", md: "md" }}
                  fontWeight="semibold"
                  my="12px"
                >
                  OLDER
                </Text>
                {olderTransactions.map((row) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                    />
                  );
                })}
            </Flex>
          </CardBody>
        </Card>
    )
}

export default DashboardTransactions;