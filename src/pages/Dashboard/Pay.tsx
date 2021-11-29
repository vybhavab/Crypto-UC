import React from "react";
import Tables from "components/Tables/Tables";
import { HStack } from "@chakra-ui/layout";
import PayCard from "components/Card/PayCard";
import { ImDatabase } from "react-icons/im";
import {IoSend } from "react-icons/io5";
import {GiReceiveMoney} from "react-icons/gi";
import { SimpleGrid } from '@chakra-ui/react'
const Pay = () =>{
    return (
        <div>
            {/* Pay

            Send and Receive 
                History of Send and Receive table 
                search history feature
                potentially Scan qr 
                community spending */}
            {/* <SimpleGrid > */}
                <HStack justifyContent="center">
                    <PayCard title={"Send"} icon={IoSend} color={"blue"}/>
                    <PayCard title={"Receive"} icon={GiReceiveMoney} color={"orange"}/>
                </HStack>

                <Tables/>
            {/* </SimpleGrid> */}
                
        </div>
    )
}
export default Pay;