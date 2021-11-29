import * as React from "react";
import {
    Box,
    Heading,
    HStack,
    Grid,
    Center,
    VStack,
  } from "@chakra-ui/react";
import TeamMemberCard from "components/Card/TeamMemberCard";
import david_haddad from "assets/img/avatars/david_haddad.jpg";
import seongwoo from "assets/img/avatars/seongwoo2.jpg";
import sai from "assets/img/avatars/sai.jpg";
import vybhav from "assets/img/avatars/Vybhav.jpg";
import jeju3 from "assets/img/jeju3.jpg";
import jeju2 from "assets/img/jeju2.jpg";
import jeju1 from "assets/img/jeju1.jpg";
import lebanon from "assets/img/lebanon.jpg";

const OurTeam = () => {
    const image =  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
    
    return (
        
       
        <Box textAlign="center" fontSize="xl">            
            <Grid minH="90vh" p={3}>
                <VStack>
                    <Heading size='xl' pt='8' pb='8'>Our Team</Heading>
                    <HStack spacing={10}>
                        <TeamMemberCard image={vybhav} name={"Vybhav Bhargav"} role={"Full Stack Developer"} email={"vacharbh@ucdavis.edu"} imageSrc={jeju3} linkedIn={"https://www.linkedin.com/in/vybhavb"} github={"https://github.com/vybhavb/"} website={"https://www.vybhavb.com"}></TeamMemberCard>
                        <TeamMemberCard image={seongwoo} name={"Seongwoo Choi"} role={"Frontend Developer"} email={"shjchoi@ucdavis.edu"} imageSrc={jeju1} linkedIn={"https://www.linkedin.com/in/swchoi1994"} github={"https://github.com/swchoi1994"}></TeamMemberCard>
                        <TeamMemberCard image={david_haddad} name={"David Haddad"} role={"Full Stack Developer"} email={"davhaddad@ucdavis.edu"} imageSrc={lebanon} linkedIn={"https://www.linkedin.com/in/davidhaddad7"} github={"https://github.com/davidhaddad7"}></TeamMemberCard>
                        <TeamMemberCard image={sai} name={"Sairamvinay V."} role={"Backend Developer"} email={"saivijay@ucdavis.edu"} imageSrc={jeju2} linkedIn={"https://www.linkedin.com/in/sairamvinay"} github={"https://github.com/Sairamvinay/"}></TeamMemberCard>
                    </HStack>
                </VStack>
            </Grid>
        </Box>

    );
}

export default OurTeam;
