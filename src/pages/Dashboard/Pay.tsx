import React, { useContext, useEffect, useState } from "react";
import Tables from "components/Tables/Tables";
import { HStack } from "@chakra-ui/layout";
import PayCard from "components/Card/PayCard";
import {IoSend } from "react-icons/io5";
import {GiReceiveMoney} from "react-icons/gi";
import { CardanoContext } from "contexts/CardanoContext";
import { getFees, getTransactions, sendTransaction as cardanoSendTransaction } from "utils/cardano";
import { LoginContext } from "contexts/LoginContext";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";

import {SendPaymentModal} from "components/Dashboard/Pay/SendPaymentModal";
import { RecievePaymentModal } from "components/Dashboard/Pay/RecievePaymentModal";
import { SendableAccounts } from "types/cardano.types";
import { getAllUsers } from "utils/firebase";

const Pay = () =>{
  const { loginObj } = useContext(LoginContext);
  const { transactions, setTransactions, balance} = useContext(CardanoContext);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ isPay, setIsPay ] = useState(false);
  const [amount, setAmount] = useState(0);
  const [allUsers, setAllUsers] = useState<SendableAccounts[]>([])
  const [fees, setFees] = useState(0);
  const [password, setPassword] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");


  const sendTransaction = () => {
    cardanoSendTransaction(loginObj.cardano_wallet_id, selectedAddress, amount, password);
    setFees(0);
    setAmount(0);
    setPassword("");
  }

  const calculateFees = async () => {
    let fees = await getFees(loginObj.cardano_wallet_id, selectedAddress, amount, password);
    setFees(fees);
  }

  useEffect(() => {
    const getAsyncData = async () => {
      setTransactions(await getTransactions(loginObj.cardano_wallet_id));
      setAllUsers(await getAllUsers(loginObj.googleId));
    };
    getAsyncData();
  }, [loginObj, setTransactions, setAllUsers])

  return (
    <div>
      <HStack pt={10} justifyContent="center" spacing={5}>
        <PayCard
          title={"Send"}
          icon={IoSend}
          color={"#00b2e7"}
          onClick={() => {
            setIsPay(true);
            onOpen()
          }}
        />
        <PayCard
          title={"Receive"}
          icon={GiReceiveMoney}
          color={"#FFCC33"}
          onClick={() => {
            setIsPay(false);
            onOpen()
          }}
        />
      </HStack>
      <Tables transactions={transactions || []}/>
      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isPay ? "Send Payment" : "Receive Payment"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              isPay ?
              <SendPaymentModal
                setAmount={setAmount}
                balance={ balance }
                setPassword={setPassword}
                fees={fees}
                password={password}
                calculateFees={calculateFees}
                sendTransaction={sendTransaction}
                amount={amount}
                users={allUsers}
                setSelectedAddress={setSelectedAddress}
                selectedAddress={selectedAddress}
              /> :
              <RecievePaymentModal cardanoAcctAddress={loginObj.cardano_acct_addr}/>
            }
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
}
export default Pay;
