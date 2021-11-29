import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    Grid,
    Text,
    List,
    ListItem,
    ListIcon
  } from "@chakra-ui/react";
import {RiCheckboxBlankCircleLine} from "react-icons/ri";
const NewNoteWorthy = () => {
    return (

        <Grid minH="90vh" p={3}>
            <VStack spacing={4}>
                <Heading pt={10} as="h1" size='lg'>
                    Technical Progress To Do #1, November 26
                </Heading>
                <Text size='xl'> Written Nov 26, 2021 by The UCrypton Team</Text>
                <Box maxW='2xl' size='2xl' p={3} textAlign="left">
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Modify Application UI for mobile
                        </ListItem>
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Shift Cardano node instances from local machine to the cloud. 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Integrate more BlockFrost API features into application for faster response time and code readibilty
                        </ListItem>
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Implement extra layers of authentication Biometric, Two factor verification 
                        </ListItem>
                                   
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Identifying Business/Department accounts to then visualize department spending for public accounts to view in dashboard
                        </ListItem>
                        <ListItem>
                            <ListIcon as={RiCheckboxBlankCircleLine} color='blue.500' />
                            Identifying Business/Department accounts to then visualize department spending for public accounts to view in dashboard
                        </ListItem>
                    </List>
                </Box>
            </VStack>
        </Grid>

    );
}

export default NewNoteWorthy;
