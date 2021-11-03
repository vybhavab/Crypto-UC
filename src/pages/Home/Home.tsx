import * as React from "react";
import {
    Box,
    Heading,
    Text,
    VStack,
    Stack,
    Grid,
    Button, 
    ButtonGroup
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import Hero from '../../components/Hero/Hero';
import styles from "./Home.module.scss";


class Home extends React.Component {
  render() {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        <Hero/>
                    </VStack>
                </Grid>
            </Box>
        </div>
    );
  }
}

export default Home;