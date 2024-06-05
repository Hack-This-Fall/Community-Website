import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const faqs = [
  // {
  //   question: "I am a beginner, can I participate?",
  //   answer:
  //     "Absolutely. We will have mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.",
  // },
  {
    question: 'Will you support or reimburse our travel expenses?',
    answer:
      'Since Hack This Fall 2024 is a community-driven hackathon, unfortunately we will not be able to support you with travel.',
  },
  {
    question:
      'A member/few members of my team canceled at the last minute. Can I still hack?',
    answer: `Kindly open the #organizer-ticket on our <a href="https://discord.hackthisfall.tech" target="_blank">Discord Server</a> and let the organizers know as soon as possible, so that we can try to make necessary next steps.`,
  },
  {
    question: 'What are the arrangements for hackers?',
    answer: `On both nights (9th Feb & 10th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc. We recommend bringing your own blanket if you need one. We want to make sure that all hackers feel comfortable and safe at the hackathon. 
      <br/>
      <br/>
      There will be meals served on the respective days to everyone who checks-in
      <ul>
      <li style="margin-left:1rem">High-tea, and Dinner on<b> 9 Feb</b></li><li style="margin-left:1rem">
      Breakfast, Lunch, High-tea, and Dinner on<b> 10 Feb</b></li ><li style="margin-left:1rem">
      Breakfast and Lunch on <b>11 Feb</b></li>
      `,
  },
  {
    question: 'Can hackers start working on projects in advance?',
    answer:
      'No. You can only start working on the projects once hacking begins on 9 Feb after the opening ceremony. Any project with an earlier commit history will be disqualified.<br/><br/>However, you can learn the basic tools and technologies you might need before the hackathon.',
  },
  // {
  //   question: "What are the arrangements for women hackers?",
  //   answer:
  //     "We want to make sure that all women hackers feel comfortable and safe at the hackathon. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc.",
  // },
  {
    question:
      'At what time should I arrive at the hackathon on 9 Feb and at what time can I depart on 11 Feb?',
    answer:
      "You are expected to arrive at the hackathon venue by 2 PM IST on Friday, 9 Feb. The estimated departure time from the venue is 7 PM IST on Sunday, 11th Feb. Book your return travel tickets accordingly to ensure you don't miss the Closing Ceremony.",
  },
  {
    question:
      'Is there any resource that can help me get more info about the venue?',
    answer:
      'To learn more about the venue, arrival & departure, and how to reach there, you can check out our Venue Guide <a href="https://bit.ly/htf4-venue-guide" target="_blank">here</a>.',
  },

  {
    question:
      'Where can I find the judging criteria? How many judging rounds should I be prepared for?',
    answer:
      'You can find everything you need to know about judging including the criteria and the structure in the judging guidelines in the Hacker Guide sent to you via email.',
  },
  {
    question: 'What is the event Code of Conduct?',
    answer:
      'We want to ensure a positive experience for all participants. We will be following <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH’s Code of Conduct</a>, we encourage you to read it.',
  },
  {
    question: 'I have more questions, how and where can I reach out?',
    answer:
      'You can reach out to us on our <a href="https://discord.hackthisfall.tech" target="_blank">Discord Server</a> in #🍁〡ask-htf-team or email us at <a href="mailto:hackthisfall@gmail.com" target="_blank">hackthisfall@gmail.com</a>! We\'re always ready to answer all your questions.',
  },
];

const FAQSection = () => {
  return (
    <Flex mb="4rem" w="full" flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', lg: '3.5rem' }}
        fontFamily="var(--font-outfit)"
        fontWeight="500"
        color="black"
        lineHeight="150%"
      >
        Frequently Asked Questions
      </Heading>
      <Flex
        w="full"
        mt="3rem"
        flexDir={{ base: 'column', lg: 'row' }}
        gap="2rem"
      >
        <Box w="full">
          <Text
            textAlign="left"
            fontSize="1.3rem"
            fontFamily="var(--font-outfit)"
            fontWeight="500"
            mb="1.5rem"
          >
            You can join Hack This Fall Discord Server to get asnwer for any of
            the queries.
          </Text>
          <Button
            px="3rem"
            w="fit-content"
            backgroundColor="#000000 !important"
            color="white"
            display="inline-flex"
            gap="0.5rem"
            height="4rem"
            justifyContent="center"
            alignItems="center"
            fontSize="1.1rem"
            fontWeight="700"
            _hover={{
              background: '#000000',
              color: 'white',
            }}
          >
            Join Discord
          </Button>
        </Box>
        <Flex w="full">
          <Accordion
            w="full"
            rowGap="2rem"
            columnGap="4rem"
            allowToggle
          >
            {faqs.map((section, index) => {
              return (
                <AccordionItem key={index} border="none">
                  {({ isExpanded }) => (
                    <Box borderBottom="1px solid #00000073">
                      <AccordionButton p="1rem">
                        <Flex
                          color="#000"
                          fontSize="1.3rem"
                          fontFamily="var(--font-outfit)"
                          fontWeight="500"
                          lineHeight="100%"
                          w="full"
                          alignItems="center"
                          gap={'1rem'}
                          justifyContent="space-between"
                        >
                          <Flex
                            alignItems="center"
                            gap={{ base: '1rem', lg: '1.5rem' }}
                          >
                            <Text lineHeight="150%" textAlign="left">
                              {section.question}
                            </Text>
                          </Flex>
                          {isExpanded ? (
                            <ChevronUpIcon fontSize="1.6rem" />
                          ) : (
                            <ChevronDownIcon fontSize="1.6rem" />
                          )}
                        </Flex>
                      </AccordionButton>
                      <AccordionPanel py="2rem" pb={4}>
                        <Text
                          fontFamily="var(--font-outfit)"
                          fontSize="1rem"
                          lineHeight="150%"
                          fontWeight="400"
                          color="#000"
                          sx={{
                            a: {
                              textDecoration: 'underline',
                            },
                          }}
                          dangerouslySetInnerHTML={{
                            __html: section.answer,
                          }}
                        />
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FAQSection;
