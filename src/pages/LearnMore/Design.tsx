import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Image
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
                    <Heading pt={10} as="h1" size='lg'>
                        The Explanation on Design Work
                    </Heading>
                    <Heading pt={8} as="h3" size='md' color={'gray.500'}>
                        As we worked on the design, we had to think about the design of the project.
                        We had to think about the design of the project.
                    </Heading>
                    <Box>
                    <Heading pt={8} as="h3" size='md' color={'gray.700'}>    
                        Cloud instances of Cardano Node:   
                    
                    </Heading>
                    <Box maxW='2xl' align ={'center'}>
                    <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                    We should adapt our system to enable Cardano node instances running on the 
                        cloud in place of a local machine. So far in our project, we are 
                        running the node instance locally wherein we propose a possible 
                        improvement as in deploying the cloud instance on EC2 instance etc. 
                        </Heading>
                        </Box>
                    </Box>                        

                    <Box>
                    <Heading pt={8} as="h3" size='md' color={'gray.700'}>    
                    Advanced Authentication Techniques 
                    
                    </Heading>
                    <Box maxW='2xl' align ={'center'}>
                    <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                    On a higher level, our project was entirely dependent on the Google OAuth method 
                    for authorizing users into our application. We can improve by using  better 
                    authentication methods such as a push SMS for making it useful for different users. 
                    Additionally, our checks for UC Domain is very weak (done primarily in the 
                    front-end interface) which needs an update. 
                        </Heading>
                        </Box>
                    </Box>  

                    <Box>
                    <Heading pt={8} as="h3" size='md' color={'gray.700'}>    
                    Front-end interface conditional display  
                    
                    </Heading>
                    <Box maxW='2xl' align ={'center'}>
                    <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                    Some of the cases we deal are not strongly checked: for example: 
                    not displaying the dashboard whenever an user clicks it while being logged out should 
                    be strictly directed to the homepage however, our team did not perform conscious 
                    validations in the backend. Similarly, 
                    we are using a very simple user interface which can be changed for a neater display. 
                        </Heading>
                        </Box>
                    </Box>  

                    <Box>
                    <Heading pt={8} as="h3" size='md' color={'gray.700'}>    
                    Developing mobile applications   
                    
                    </Heading>
                    <Box maxW='2xl' align ={'center'}>
                    <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                    We have been entirely focused on a web application which makes it
                     convenient on any compatible web browser. However, 
                     e plan to improve it by converting into a mobile application for 
                     platforms such as iOS and Android. The mobile app would be even better 
                     displayed and that would work as a separate extension to our current 
                     project
 
                        </Heading>
                        </Box>
                    </Box> 
                     
                    <Box>
                    <Heading pt={8} as="h3" size='md' color={'gray.700'}>    
                    Allowing peer-commodity transactions:   
                    
                    </Heading>
                    <Box maxW='2xl' align ={'center'}>
                    <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                    We should adapt our system to enable Cardano node instances running on the 
                        cloud in place of a local machine. So far in our project, we are 
                        running the node instance locally wherein we propose a possible 
                        improvement as in deploying the cloud instance on EC2 instance etc. 
                        </Heading>
                        </Box>
                    </Box>

                    <Heading>
                        <Box maxW='2xl' align ={'center'}>
                        <Heading pt={6} as="h3" size='sm' color={'gray.500'}>
                            ECS 265 - Distributed Databases Fall 2021
                            </Heading>
                        </Box>
                    </Heading>

{ 
 

}
                    
                </VStack>
            </Grid>
            
        </div>
        
    );
}

export default Design;
