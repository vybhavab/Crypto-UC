import * as React from "react";
import {
    Box,
    VStack,
    Grid,
  } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import Hero from '../../components/Hero/Hero';


class Home extends React.Component {
  render() {
    return (
          <Box textAlign="center" fontSize="xl">
              <Grid minH="100vh" p={3}>
                  <ColorModeSwitcher justifySelf="flex-end" />
                  <VStack spacing={8}>
                      <Hero/>
                  </VStack>
              </Grid>
          </Box>
    );
  }
}

export default Home;
