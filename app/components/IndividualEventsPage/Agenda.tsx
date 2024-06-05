import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  Step,
  StepDescription,
  Text,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';
import TimelineIcon from '@/app/components/icons/Timeline';
import moment from 'moment';
import { agenda } from '@/app/events/data';
import { useEffect } from 'react';

interface AgendaSectionProps {
  description: string | undefined;
  agenda: agenda[] | undefined;
}

const AgendaSection = ({ description, agenda }: AgendaSectionProps) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: agenda && agenda.length,
  });

  function findCurrentEventIndex(events: agenda[]): number {
    const now = moment();

    for (let i = 0; i < events.length; i++) {
      if (now.isBetween(events[i].startTime, events[i].endTime)) {
        return i;
      }
    }

    return events.length;
  }

  useEffect(() => {
    const updateEventIndex = () => {
      setActiveStep(findCurrentEventIndex(agenda || []));
    };

    updateEventIndex(); // Initial check
    const intervalId = setInterval(updateEventIndex, 60000); // Check every minute

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="center"
      gap="3rem"
      mb="4rem"
      w="full"
    >
      <Heading
        fontSize="3.5rem"
        mt={{ base: '0', lg: '2rem' }}
        fontFamily="var(--font-outfit)"
        fontWeight="500"
        color="black"
        textAlign="center"
        alignSelf="flex-start"
      >
        Agenda
      </Heading>
      <Flex w="full">
        <Stepper w="full" index={activeStep} orientation="vertical" gap="0">
          {(agenda || []).map((step, index) => (
            <Step w="full" className="agenda-sep" key={index}>
              <StepIndicator
                sx={{
                  '[data-status=complete] &': {
                    background: 'transparent',
                    borderColor: 'transparent',
                  },
                  '[data-status=active] &': {
                    background: 'transparent',
                    borderColor: 'transparent',
                  },
                  '[data-status=incomplete] &': {
                    background: 'transparent',
                    borderColor: 'transparent',
                  },
                }}
              >
                <StepStatus
                  complete={<TimelineIcon completed />}
                  incomplete={<TimelineIcon />}
                  active={<TimelineIcon completed />}
                />
              </StepIndicator>
              {!isMobile ? (
                <Flex
                  w="full"
                  borderBottom="1px solid #00000073"
                  gap="6rem"
                  ml="3rem"
                  mb="4rem"
                  pb="2rem"
                >
                  <Text
                    fontSize="1.2rem"
                    fontWeight="500"
                    fontFamily="var(--font-outfit)"
                  >
                    {step.startTime.format('LT')} to {step.endTime.format('LT')}
                  </Text>
                  <Text
                    fontSize="1.2rem"
                    fontWeight="500"
                    fontFamily="var(--font-outfit)"
                  >
                    {step.title}
                  </Text>
                </Flex>
              ) : (
                <Flex
                  w="full"
                  flexDir="column"
                  borderBottom="1px solid #00000073"
                  ml="2rem"
                  mb="3rem"
                  gap="0.2rem"
                  pb="1.5rem"
                >
                  <Text
                    fontSize="1.3rem"
                    fontWeight="500"
                    fontFamily="var(--font-outfit)"
                  >
                    {step.title}
                  </Text>
                  <Text
                    fontSize="1.2rem"
                    fontWeight="500"
                    fontFamily="var(--font-outfit)"
                    color="#3D3D3D"
                  >
                    {step.startTime.format('LT')} to {step.endTime.format('LT')}
                  </Text>
                </Flex>
              )}

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Flex>
    </Flex>
  );
};

export default AgendaSection;
