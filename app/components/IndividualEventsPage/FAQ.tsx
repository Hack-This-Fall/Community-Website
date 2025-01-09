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
import { faq } from '@/app/events/data';

interface FAQSectionProps {
  faqs: faq[] | undefined;
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
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
            {(faqs || []).map((section, index) => {
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
