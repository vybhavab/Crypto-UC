import * as React from "react";
import {
    Box,
    Grid
  } from "@chakra-ui/react";


// import Hero from 'components/Hero/Hero';
import Hero from 'components/Hero/Hero';

const Home = () => {
    return (
          <Box textAlign="center" fontSize="xl">
              <Grid minH="100vh" p={3}>  
                <Hero />
              </Grid>
          </Box>
    );
}


export default Home;
