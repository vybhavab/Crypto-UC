import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Image,
    Text
  } from "@chakra-ui/react";
import roadmapImage from 'assets/img/Pipeline.png';

const Design = () => {
    return (
        <div>
            <Grid minH="90vh" p={3}>
                <VStack spacing={10}>
                    <Heading pt={10} as="h1" size='lg'>
                        Explore Design Work
                    </Heading>
                    <Box maxW='2xl' size='lg' textAlign="left">
                        <Image src={roadmapImage} />
                    </Box>
                </VStack>
                <VStack spacing={10}>
                <Box maxW='2xl' size='2xl' p={3} textAlign="left">
                    
                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Background </Heading>
                    <Text pt={2}>
                    When we started this project we wanted to combine the best of the web application frameworks and the power of blockchain technology in the form of a well-designed user facilitated application. Many different financial applications were available in the market for various domains within finance, such as taxes, funding, and simple monetary transactions. However, most of those applications did not integrate blockchain into its functioning. We were motivated by the key critical aim to provide security and transparency while ensuring any such financial transactions on any level: macro (public based) and micro (personal-usage). Our team chose to provide a unified digital system for financial interactions primarily useful for various departments and businesses which can be utilized across the nine campuses at the University of California. We incorporated the usage of advanced blockchain technology which would ensure our many security features and make it easy-to-use for simple users such as students and faculty. 

                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Front-End interface </Heading>
                    <Text pt={2}>
                    As a choice of convenience, we have adopted React and TypeScript as our web frameworks for hosting our application on the web. In order to improve our user interface implementation for design purposes, we decided to leverage Chakra.UI as a front-end portal interface. A combination of these different frameworks on the front-end prove to be a fine mix of state-of-the-art technologies that provide the most optimal design which is also modern and secure in its display. The clean, colorful and intuitive interface of our application allows users to understand the functionality of the web application by fully absorbing their focus into the application. We implemented a Chakra dashboard for providing a neat display of all the payment methods, transaction activities, and other information pertaining to a particular user such as profile details (photo, account information, etc.) We have applied dark mode into our application and given an option to switch from light mode to another.
                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Authentication and Database </Heading>
                    <Text pt={2}>
                    With an ultimate purpose, the application was designed to provide a secure and privacy-preserving environment. Since we wanted only UC staff and students to be allowed to access this application, we have employed a very simple authentication scheme wherein users logged in from their UC domain are allowed access. The security verification was very simple based on the domain of the email address logged in. The users would be automatically logged out after an hour’s time of inactivity which is followed as per Google’s authentication properties. We perceive that it would facilitate students to use our web application if we had a Google verification method and store users based on their recent log-in onto a database that can be updated dynamically. Hence, for our database, we have successfully integrated Google Firebase. The database allowed our application to extract UC student information from the Google Oauth API whenever they log in with their own UC accounts with their Kerberos-based passwords. For the scope of this project, our team did not want to allow other third parties to use our web application just now so we have decided to allow only UC students for now for exclusivity. We will eventually expand our market size to different universities and in fact to other domains. 
                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>Blockchain Platform </Heading>
                    <Text pt={2}>
                    For our blockchain platform, we have chosen Cardano. There are multiple reasons for our choice of Cardano: it facilitates peer-to-peer features and provides a native token internally. Native tokens are useful for allowing multiple asset-based transactions within one single currency (Ada and Lovelace) and this appeared tailor-made exactly for our project requirements. We also created another application for integrating this blockchain transaction in C++ which allows transactions among smart contracts/wallets from Cardano using its own cryptocurrency, ADA. In order to provide stronger and more robust binding with the Front-end interface, we have also decided to use a third-party application programming interface based on React called BlockFrost that allows us to integrate Cardano with the web application. 
                    </Text>

                    <Heading pt={10} as="h1" size='md' color={'#00b2e3'}>The Novelty of Our Project </Heading>
                    <Text pt={2}>
                    For the simplicity of the user interface, we have borrowed many elements from pre-existing financial applications. For instance, our application allows our users to send and receive funds from their friends or family members without any transferring charges if they are using the application being inspired by Paypal. We have also integrated a dashboard feature on our webpage, which allows the users to view how much they have spent and received as funds. On a macro level, we aimed to reduce the opaqueness of large public transactions as well as maintain security across personal transactions. These goals ensured we developed a complete application that has varied usage across multiple domains. By having Google integrated, anyone would be able to understand how to get started with the application, and hence it is very simple to use. However, the biggest difference between this particular app and the other applications we note in the market is that our application has the potential usage of blockchain technology into the domain of UC universities. Under the hood, the blockchain works pretty much the same as the pre-existing technologies, and blockchain is just an extra layer on the top of the web application itself. 
                    </Text>
                </Box>  
                </VStack>
            </Grid>
            
        </div>
        
    );
}

export default Design;
