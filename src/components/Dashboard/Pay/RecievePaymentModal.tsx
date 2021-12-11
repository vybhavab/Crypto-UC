import React from "react";
import {
    Box,
  Code,
  Heading,
} from '@chakra-ui/react';

interface Props {
  cardanoAcctAddress: string
}

export const RecievePaymentModal = ({ cardanoAcctAddress }: Props) => {
  return (
    <Box>
      <Heading>
        To recieve funds give the other person this address
      </Heading>
      <Code>
        {cardanoAcctAddress}
      </Code>
    </Box>
  );
};
