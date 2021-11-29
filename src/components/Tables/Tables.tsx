import React from "react";
// Chakra imports
import {
  Center,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// Custom components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";

const Tables=()=> {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column"  pt={{ base: "120px", md: "75px" }}>
    <Card  p={10} borderWidth='1px' borderRadius='lg'  my="22px" borderoverflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Authors Table
          </Text>
        </CardHeader>
      
        <CardBody > 
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Author
                </Th>
                <Th color="gray.400">Function</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Employed</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                  />
                );
              })}
            </Tbody>
          </Table>
          
        </CardBody>
        {/* </VStack> */}
      {/* </Center> */}
    </Card>
    <Card p={10} borderWidth='1px' borderRadius='lg'  my="22px" 
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
    </Card>
  </Flex>
  );
}

export default Tables;
