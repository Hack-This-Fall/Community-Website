"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
// import EventContainer from "../components/EventsPage/EventContainer";
// import eventsData from "../";

const TeamsPage = () => {
  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full pointer-events-none">
        {/* <Navbar  /> */}
      </div>
      <Flex flexDir="column" w="full" pt="12rem" pb="6">
        <Flex mb="3rem" gap="1.5rem">
          <Flex
            flexDir="column"
            py="4rem"
            px="3rem"
            bgColor="rgba(78, 157, 255, 0.10)"
            borderRadius="2rem"
          >
            <Heading
              fontSize="4rem"
              fontFamily="var(--font-poppins)"
              fontWeight="700"
              color="#388CF5"
            >
              Hack This Fall
            </Heading>

          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  );
};

export default TeamsPage;