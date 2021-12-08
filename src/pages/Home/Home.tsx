import * as React from "react";
import {
    Box,
    Grid
  } from "@chakra-ui/react";


// import Hero from 'components/Hero/Hero';
import Hero from 'components/Hero/Hero-test';
import cardanoImg from 'assets/img/cardano.png';

const Home = () => {
    return (
          <Box textAlign="center" fontSize="xl">
              <Grid minH="100vh" p={3}>  
                {/* <Hero/> */}
                <Hero title={"Secured By Blockchain Technology"}
                  subtitle= { "The Next Generation of Payments for the UC System"}
                  image= { cardanoImg }
                  ctaText= { "Create your account now"}
                  ctaLink= { "/signup"}/>
              </Grid>
          </Box>
    );
}


export default Home;
