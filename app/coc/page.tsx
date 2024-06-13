'use client';

import Navbar from '../components/Navbar';
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { useState } from 'react';
import OpenNavbar from '../components/OpenNavbar';
import StickyFooter from '../components/StickyFooter';

const EventsPage = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(149);

  const setIsNavbarOpen = (state: boolean) => {
    setNavbarOpen(state);

    if (state && window) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }
  };

  return (
    <Box className="relative">
      <Box
        zIndex="100"
        className="relative w-full bg-white top-0 left-0 rounded-b-3xl"
      >
        <Box
          borderBottomRadius={{ base: '1.5rem', xl: '0' }}
          className="relative container-1200 bg-white"
          px={{ base: '2rem', '2xl': '0' }}
        >
          <Box className="sticky top-0 left-0 w-full" zIndex={4}>
            {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
            <Navbar
              setIsNavbarOpen={setIsNavbarOpen}
              setNavbarHeight={setNavbarHeight}
            />
          </Box>
          <Flex
            flexDir="column"
            alignItems="center"
            w="full"
            pt={{ base: '2rem', md: '4rem' }}
            pb={{ base: '4rem', md: '4rem', lg: '7rem' }}
          >
            <Heading
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontFamily="var(--font-outfit)"
              fontWeight="500"
            >
              Code of Conduct
            </Heading>
            <Flex w="full" flexDir="column" mt="2rem">
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
              >
                TL;DR
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                Hack This Fall is committed to a safe, inclusive, and respectful
                environment. Treat everyone with respect and avoid
                discrimination. Unacceptable behavior includes harassment,
                offensive comments, unwelcome sexual attention, disruptions, and
                sharing private information without consent. Violations may
                result in removal from the event. By participating, you agree to
                follow this Code of Conduct. Report issues to event organizers
                or email us at contact@hackthisfall.tech.
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Introduction
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                At Hack This Fall, we are dedicated to providing a safe,
                welcoming, and inclusive environment for all participants,
                regardless of gender, sexual orientation, disability, physical
                appearance, body size, race, ethnicity, religion, or technology
                choices. We do not tolerate harassment of participants in any
                form.
                <br />
                <br />
                This Code of Conduct applies to all Hack This Fall events,
                including but not limited to hackathons, meetups, and online
                events. By participating, you agree to abide by this Code of
                Conduct.
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Expected Behaviour
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                <UnorderedList>
                  <ListItem>
                    <strong>Be Respectful:</strong> Treat all participants with
                    respect and consideration. Communicate openly and
                    thoughtfully with others, and be considerate of differing
                    viewpoints and experiences.
                  </ListItem>
                  <ListItem>
                    <strong>Be Inclusive:</strong> Encourage a welcoming
                    environment where everyone feels included. Avoid language or
                    behavior that discriminates or excludes others.
                  </ListItem>
                  <ListItem>
                    <strong>Be Considerate:</strong> Remember that event spaces
                    are shared environments. Be mindful of your surroundings and
                    your fellow participants.
                  </ListItem>
                  <ListItem>
                    <strong>Be Collaborative:</strong> Work together to foster a
                    community where everyone feels safe to share their ideas and
                    collaborate.
                  </ListItem>
                  <ListItem>
                    <strong>Be Mindful:</strong> Be aware of your words and
                    actions and how they may affect others. Offer and accept
                    constructive feedback gracefully.
                  </ListItem>
                </UnorderedList>
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Unacceptable Behaviour
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                Unacceptable behaviors include, but are not limited to:
                <br />
                <UnorderedList>
                  <ListItem>
                    Harassment, intimidation, or discrimination in any form.
                  </ListItem>
                  <ListItem>
                    Verbal or written abuse, including offensive comments or
                    jokes related to gender, sexual orientation, disability,
                    physical appearance, body size, race, ethnicity, religion,
                    or technology choices.
                  </ListItem>
                  <ListItem>
                    Unwelcome sexual attention, including inappropriate physical
                    contact, sexual comments, or advances.
                  </ListItem>
                  <ListItem>
                    Sustained disruption of talks, workshops, or other events.
                  </ListItem>
                  <ListItem>
                    Publishing others&apos; private information, such as
                    physical or electronic addresses, without explicit
                    permission.
                  </ListItem>
                  <ListItem>
                    Advocating for, or encouraging, any of the above behaviors.
                  </ListItem>
                </UnorderedList>
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Reporting Incidents
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                If you experience or witness any form of unacceptable behavior,
                or have any other concerns, please report it as soon as
                possible. You can make a report by:
                <br />
                <UnorderedList>
                  <ListItem>
                    Contacting Event Organizer: Look for event organizers, who
                    will be identified at the start of each event.
                  </ListItem>
                  <ListItem>Emailing Us: contact@hackthisfall.tech</ListItem>
                </UnorderedList>
                All reports will be handled with discretion and confidentiality.
                We will take all appropriate actions to address the issue, which
                may include removing the participant from the event.
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Consequences of Unacceptable Behaviour
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                Participants asked to stop any inappropriate behavior are
                expected to comply immediately. If a participant engages in
                unacceptable behavior, the event organizers may take any action
                they deem appropriate, including warning the offender or
                expelling them from the event.
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Acknowledgement
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                By participating in Hack This Fall event, you agree to abide by
                this Code of Conduct. We value your participation and hope that
                by maintaining these standards, we can create a positive and
                enriching experience for everyone involved.
              </Text>
              <Heading
                fontSize="2rem"
                fontFamily="var(--font-outfit)"
                fontWeight="500"
                borderBottom="1px solid #000000"
                pb="1rem"
                mb="1rem"
                mt="2rem"
              >
                Contact Information
              </Heading>
              <Text
                fontSize="1.3rem"
                fontFamily="var(--font-outfit)"
                fontWeight="400"
              >
                For any questions or concerns about this Code of Conduct, please
                contact us at contact@hackthisfall.tech.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default EventsPage;
