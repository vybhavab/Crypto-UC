import * as React from "react";
import {
    Box,
    Grid
  } from "@chakra-ui/react";


// import Hero from 'components/Hero/Hero';
import Hero from 'components/Hero/Hero-test';

const Home = () => {
    return (
          <Box textAlign="center" fontSize="xl">
              <Grid minH="100vh" p={3}>  
                {/* <Hero/> */}
                <Hero 
                  ctaText= { "Create your account now"}
                  ctaLink= { "/signup"}/>
              </Grid>
          </Box>
    );
}


export default Home;
