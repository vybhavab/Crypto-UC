import React from "react";
import { Box, Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {
  name: string,
  date: string,
  isOutgoing: boolean,
  isPending: boolean,
  price: number,
  unit: string
}

const TransactionRow = (props:Props) => {
  const textColor = useColorModeValue("gray.700", "white");
  const { name, date, isOutgoing, isPending, price, unit } = props;

  return (
    <Flex my="1rem" justifyContent="space-between">
      <Flex alignItems="center">
        <Box
          me="12px"
          borderRadius="50%"
          color={
            isPending ? "gray.400" : isOutgoing ? "red.400" : "green.400"
          }
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="35px"
          h="35px"
        >
          <Icon as={isOutgoing ? FaArrowUp : FaArrowDown  }/>
        </Box>
        <Flex direction="column">
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={textColor}
            fontWeight="bold"
          >
            {name.substring(0, 30) + '...'}
          </Text>
          <Text
            fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
            color="gray.400"
            fontWeight="semibold"
          >
            {date}
          </Text>
        </Flex>
      </Flex>
      <Box
        color={
          isPending ? { textColor } : isOutgoing ? "red.400" : "green.400"
        }
      >
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
          {price} {unit}
        </Text>
      </Box>
    </Flex>
  );
}

export default TransactionRow;
