import React, {useContext}from "react";
import {GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin} from 'react-google-login';
import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from "@chakra-ui/react";
import { LoginContext } from "contexts/LoginContext";
import { getUserData, setData } from "utils/firebase";
import { CardanoContext } from "contexts/CardanoContext";
import { User } from "types/firebase.types";

// TODO: Refresh token
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const LoginGoogle = () => {
  const { loggedIn, setLoggedIn, setLoginObj,loginObj } = useContext(LoginContext);
  const { setBalance } = useContext(CardanoContext);

  const onLoginSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {

    const res = response as GoogleLoginResponse;

    let email = res.profileObj.email
    email = email.split("@")[1]

    if (email !== "ucdavis.edu") {
      alert('Not a UC Davis Email Habibi');
    }

    if ( loggedIn ) {
      console.log("shouldn't be happening")
      return;
    }

    let userObj:User = {
      googleId: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      imageUrl: res.profileObj.imageUrl,
      cardano_wallet_id: "",
      cardano_acct_addr: "",
      campus_id: "Davis",
      account_type: "Student"
    };

    const firebaseUserData = await getUserData(res.googleId);
    if (firebaseUserData === undefined) {
      setData(res.googleId, userObj);
    }

    if( firebaseUserData !== undefined) {
      userObj = {
        ...loginObj,
        ...userObj,
        googleId: res.googleId,
        name: res.profileObj.name,
        email: res.profileObj.email,
        imageUrl: res.profileObj.imageUrl,
        cardano_wallet_id: firebaseUserData!.cardano_wallet_id,
        cardano_acct_addr: firebaseUserData!.cardano_acct_addr,
        campus_id: firebaseUserData!.campus_id,
        account_type: firebaseUserData!.account_type
      };
    }

    if(userObj.cardano_wallet_id.length > 0) {
      setWalletData(userObj.cardano_wallet_id);
    }

    setLoginObj(userObj);
    setLoggedIn(true);
  }

  const setWalletData = async (cardanoWalletAddress: string) => {
    getBalances(cardanoWalletAddress);
  };

  const getBalances = (cardanoWalletAddress: string) => {
    fetch(`${process.env.REACT_APP_CARDANO_WALLET_URL}/api/v0/address/getBalance/${cardanoWalletAddress}`)
      .then((res) => res.json())
      .then((data) => {
        setBalance(data.balance.totalBalance)
      });
  };

  const onLoginFailure = (_response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setLoginObj({...loginObj,
        googleId: "",
        name: "",
        email: "",
        imageUrl: "",
        cardano_wallet_id: "",
        cardano_acct_addr: "",
        campus_id: "",
        account_type: ""
    });
    setLoggedIn(false);
  }

  const { signIn } = useGoogleLogin(
    {
      clientId,
      onSuccess: onLoginSuccess,
      onFailure: onLoginFailure,
      isSignedIn: true,
    }
  )

  return (
      <Center p={2}>
        <Button
          variant={'outline'}
          leftIcon={<FcGoogle />}
          _hover={{
            bg: '#03F9E6',
          }}
          onClick={signIn}
        >
         <Text>Sign in with Google</Text>
        </Button>
      </Center>
  );
}

export default LoginGoogle;
