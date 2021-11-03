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



class Home extends React.Component {
  render() {
    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="50vh" p={2}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                      <Hero/>
                </Grid>
            </Box>
        </div>
    );
  }
}

export default Home;