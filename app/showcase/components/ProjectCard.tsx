"use client";

import { Box, Flex, Heading, Text, Image, Badge, Avatar, AvatarGroup } from "@chakra-ui/react";
import { ProjectData } from "../data";
import AngleArrow from "@/app/components/icons/AngleArrow";

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Flex
      onClick={onClick}
      flexDir="column"
      borderRadius="20px"
      overflow="hidden"
      bg="linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)"
      border="1px solid rgba(255, 128, 0, 0.2)"
      cursor="pointer"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 10px 40px rgba(255, 128, 0, 0.15)",
        border: "1px solid rgba(255, 128, 0, 0.4)",
      }}
      css={{
        ":hover": {
          ".circle": {
            transform: "rotate(42deg)",
            transition: "transform 0.3s ease-in-out",
          },
        },
      }}
      h="full"
    >
      {/* Image */}
      <Box position="relative" w="full" h="220px" overflow="hidden">
        <Image
          src={project.images[0] || "/placeholder-project.png"}
          alt={project.name}
          w="full"
          h="full"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/400x200/1a1a2e/ff8000?text=Project"
        />
        {project.winner && (
          <Badge
            position="absolute"
            top="0.75rem"
            left="0.75rem"
            bg="linear-gradient(135deg, #FF8000 0%, #FFA500 100%)"
            color="white"
            px="0.75rem"
            py="0.3rem"
            borderRadius="full"
            fontSize="0.7rem"
            fontWeight="700"
          >
            🏆 {project.winnerPosition}
          </Badge>
        )}
        {project.category && (
          <Badge
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            bg="rgba(161, 99, 255, 0.9)"
            color="white"
            px="0.75rem"
            py="0.3rem"
            borderRadius="full"
            fontSize="0.7rem"
            fontWeight="600"
          >
            {project.category}
          </Badge>
        )}
      </Box>

      {/* Content */}
      <Flex flexDir="column" p="1rem" flex="1" justifyContent="space-between" gap="0.75rem">
        <Box>
          <Heading
            fontSize={{ base: "1.1rem", md: "1.2rem" }}
            fontFamily="var(--font-outfit)"
            fontWeight="600"
            color="white"
            mb="0.25rem"
            noOfLines={1}
          >
            {project.name}
          </Heading>
          <Text
            color="rgba(255,255,255,0.65)"
            fontSize="0.8rem"
            fontFamily="var(--font-outfit)"
            noOfLines={2}
            lineHeight="1.4"
          >
            {project.tagline}
          </Text>
        </Box>

        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="0.75rem">
            {/* Team Avatars */}
            <AvatarGroup size="xs" max={3}>
              {project.team.map((member, idx) => (
                <Avatar
                  key={idx}
                  name={member.name}
                  src={member.image}
                  bg="#A163FF"
                  border="2px solid #1a1a2e"
                />
              ))}
            </AvatarGroup>

            {/* Event Badge */}
            <Flex
              alignItems="center"
              bg="rgba(255,128,0,0.15)"
              px="0.5rem"
              py="0.2rem"
              borderRadius="full"
              border="1px solid rgba(255,128,0,0.25)"
            >
              <Text
                color="#FF8000"
                fontSize="0.65rem"
                fontWeight="600"
                fontFamily="var(--font-outfit)"
              >
                {project.builtAt}
              </Text>
            </Flex>
          </Flex>

          {/* Arrow Button */}
          <Flex
            bgColor="#FF8000"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w="38px"
            h="38px"
            color="white"
            className="circle"
            flexShrink={0}
            transition="transform 0.3s ease-in-out"
          >
            <Box transform="scale(0.55)">
              <AngleArrow />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
