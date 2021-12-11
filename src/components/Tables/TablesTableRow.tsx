import {
  Badge,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  id: string,
  isOutgoing: boolean,
  isPending: boolean,
  amount: number,
  unit: string,
  date: string
}

function TablesTableRow({ id, isOutgoing, isPending, amount, date, unit}:Props) {
  const textColor = useColorModeValue("gray.700", "white");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td>
        <Text fontSize="md" color={textColor}  pb=".5rem">
          {id}
        </Text>
      </Td>
      <Td>
        <Badge
          bg={isPending ? "gray.400" : isOutgoing ? "red.400" : "green.400" }
          color={isPending ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {amount} {unit}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
