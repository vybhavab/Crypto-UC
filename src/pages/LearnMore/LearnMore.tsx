import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Text,
  } from "@chakra-ui/react";

const LearnMore = () => {
    return (
        <div>

<Grid minH="90vh" p={3}>
            <VStack spacing={4}>
                <Heading pt={10} as="h1" size='lg'>
                    Learn More
                </Heading>
                
                <Box maxW='2xl' size='2xl' p={3} textAlign="left">
                    
                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Front-End  </Heading>
                    <Text pt={2}>
                    For the entire front-end development, we chose React as our platform as a choice of convenience and for the UI, we found the most appropriate interface compatible with React for displaying our project application was Chakra UI. We utilized the open-source login functionality of Google which restricts access to only UC students via their official UC Email accounts linked with Google. The project's front-end interface is primarily useful for displaying all the payment methods, transaction activities, and other information pertaining to a particular user such as profile details (photo, account information, etc.). The users would be automatically logged out after an hour’s time of inactivity which is followed as per Google’s authentication properties. The landing page of the website will contain a detailed description of the application. 

                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Firebase </Heading>
                    <Text pt={2}>
                    Our project also required a dynamic, real-time database for storing all the users who have been using this application via Google sign-in. In addition to storing regular profile based details, this database also contains information such as the type of business accounts associated with this application and so on. 

                    We chose Firebase since it was quite compatible in React and also it provided a dynamic real-time database which can support hard and fast updates within the database. The database is synced with the Google Log-in authentication which is chiefly handled within the Front-end. 
                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Cardano: Blockchain  </Heading>
                    <Text pt={2}>
                    We have implemented the application by choosing the blockchain platform, Cardano, and its features for launching the web application that is built on top of Cardano. We chose Cardano since it allows easy peer-to-peer transactions and it was a simple decentralized blockchain model. Additionally, since it is open to use via REST API (Block Frost), this facilitates our project because we are building this in React. The currency for the project we intend to use is Ada (the crypto-currency used in Cardano) and for tracking the transactions.  
                    </Text>

                </Box>
            </VStack>
        </Grid>

        </div>
    );
}

export default LearnMore;
