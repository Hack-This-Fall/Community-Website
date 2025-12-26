"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Badge,
  Button,
  Link,
  AspectRatio,
  SimpleGrid,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProjectData } from "../data";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
      <ModalContent
        bg="white"
        borderRadius="24px"
        border="1px solid rgba(0, 0, 0, 0.3)"
        mx={{ base: "1rem", md: "2rem" }}
        my={{ base: "1rem", md: "2rem" }}
        maxH={{ base: "90vh", md: "85vh" }}
        overflow="hidden"
      >
        <ModalCloseButton
          color="orange"
          size="lg"
          top="1rem"
          right="1rem"
          zIndex="10"
          bg="rgba(0,0,0,0.5)"
          borderRadius="full"
          _hover={{ bg: "rgba(255,128,0,0.3)" }}
        />
        <ModalBody p={0}>
          <Flex flexDir="column">
            {/* Image Carousel */}
            <Box position="relative" w="full">
              <Box
                position="relative"
                borderRadius="24px 24px 0 0"
                overflow="hidden"
                bg="rgba(0,0,0,0.3)"
              >
                <Image
                  src={
                    project.images[currentImageIndex] ||
                    "/placeholder-project.png"
                  }
                  alt={project.name}
                  w="full"
                  h={{ base: "200px", md: "550px" }}
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/800x400/1a1a2e/ff8000?text=Project+Image"
                />
                {project.images.length > 1 && (
                  <>
                    <Button
                      position="absolute"
                      left="1rem"
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={prevImage}
                      bg="rgba(0,0,0,0.6)"
                      color="white"
                      borderRadius="full"
                      size="sm"
                      _hover={{ bg: "rgba(255,128,0,0.6)" }}
                    >
                      ←
                    </Button>
                    <Button
                      position="absolute"
                      right="1rem"
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={nextImage}
                      bg="rgba(0,0,0,0.6)"
                      color="white"
                      borderRadius="full"
                      size="sm"
                      _hover={{ bg: "rgba(255,128,0,0.6)" }}
                    >
                      →
                    </Button>
                    <Flex
                      position="absolute"
                      bottom="1rem"
                      left="50%"
                      transform="translateX(-50%)"
                      gap="0.5rem"
                    >
                      {project.images.map((_, idx) => (
                        <Box
                          key={idx}
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg={
                            idx === currentImageIndex
                              ? "#FF8000"
                              : "rgba(255,255,255,0.5)"
                          }
                          cursor="pointer"
                          onClick={() => setCurrentImageIndex(idx)}
                          transition="all 0.2s"
                        />
                      ))}
                    </Flex>
                  </>
                )}
              </Box>
            </Box>

            {/* Content */}
            <Box p={{ base: "1.5rem", md: "2rem" }}>
              {/* Header */}
              <Flex
                justifyContent="space-between"
                alignItems={{ base: "flex-start", md: "center" }}
                flexDir={{ base: "column", md: "row" }}
                gap="1rem"
                mb="1.5rem"
              >
                <Box>
                  <Flex alignItems="center" gap="0.75rem" mb="0.5rem">
                    <Heading
                      fontSize={{ base: "1.5rem", md: "2rem" }}
                      fontFamily="var(--font-outfit)"
                      fontWeight="600"
                      color="black"
                    >
                      {project.name}
                    </Heading>
                    {project.winner && (
                      <Badge
                        bg="linear-gradient(135deg, #FF8000 0%, #FFA500 100%)"
                        color="black"
                        px="0.75rem"
                        py="0.25rem"
                        borderRadius="full"
                        fontSize="0.75rem"
                        fontWeight="700"
                      >
                        🏆 {project.winnerPosition}
                      </Badge>
                    )}
                  </Flex>
                  <Text
                    color="rgba(0, 0, 0, 0.8)"
                    fontSize={{ base: "0.9rem", md: "1.1rem" }}
                    fontFamily="var(--font-outfit)"
                  >
                    {project.tagline}
                  </Text>
                </Box>
                <Flex
                  alignItems="center"
                  gap="0.5rem"
                  bg="rgba(255,128,0,0.15)"
                  px="1rem"
                  py="0.5rem"
                  borderRadius="full"
                  border="1px solid rgba(255,128,0,0.3)"
                  flexShrink={0}
                >
                  <Text
                    color="#FF8000"
                    fontSize="0.85rem"
                    fontWeight="600"
                    fontFamily="var(--font-outfit)"
                  >
                    Built at {project.builtAt}
                  </Text>
                </Flex>
              </Flex>

              {/* Team */}
              <Box mb="1.5rem">
                <Text
                  color="black"
                  fontWeight="600"
                  mb="0.75rem"
                  fontFamily="var(--font-outfit)"
                  fontSize="1.1rem"
                >
                  Team
                </Text>
                <Flex gap="0.75rem" flexWrap="wrap">
                  {project.team.map((member, idx) => (
                    <Flex
                      key={idx}
                      alignItems="center"
                      gap="0.5rem"
                      bg="rgba(0, 0, 0, 0.1)"
                      px="0.75rem"
                      py="0.5rem"
                      borderRadius="full"
                      border="1px solid rgba(0, 0, 0, 0.15)"
                    >
                      <Avatar
                        color={"white"}
                        size="xs"
                        name={member.name}
                        src={member.image}
                        bg="#A163FF"
                      />
                      <Text
                        color="black"
                        fontSize="0.85rem"
                        fontFamily="var(--font-outfit)"
                      >
                        {member.name}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* About */}
              <Box mb="1.5rem">
                <Text
                  color="black"
                  fontWeight="600"
                  mb="0.75rem"
                  fontFamily="var(--font-outfit)"
                  fontSize="1.1rem"
                >
                  About the Project
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.75)"
                  fontSize="0.95rem"
                  lineHeight="1.7"
                  fontFamily="var(--font-outfit)"
                >
                  {project.description}
                </Text>
              </Box>

              {/* Video */}
              {project.videoUrl && (
                <Box mb="1.5rem">
                  <Text
                    color="black"
                    fontWeight="600"
                    mb="0.75rem"
                    fontFamily="var(--font-outfit)"
                    fontSize="1.1rem"
                  >
                    Demo Video
                  </Text>
                  <AspectRatio
                    ratio={16 / 9}
                    maxW="full"
                    borderRadius="16px"
                    overflow="hidden"
                  >
                    <iframe
                      src={project.videoUrl}
                      title={`${project.name} Demo`}
                      allowFullScreen
                      style={{ borderRadius: "16px" }}
                    />
                  </AspectRatio>
                </Box>
              )}

              {/* Technologies */}
              <Box mb="1.5rem">
                <Text
                  color="black"
                  fontWeight="600"
                  mb="0.75rem"
                  fontFamily="var(--font-outfit)"
                  fontSize="1.1rem"
                >
                  Technologies Used
                </Text>
                <Flex gap="0.5rem" flexWrap="wrap">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      bg="rgba(161,99,255,0.2)"
                      color="#A163FF"
                      px="0.75rem"
                      py="0.4rem"
                      borderRadius="8px"
                      fontSize="0.8rem"
                      fontWeight="500"
                      border="1px solid rgba(161,99,255,0.3)"
                      fontFamily="var(--font-outfit)"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Box>

              {/* Action Buttons */}
              <Flex gap="0.75rem" flexWrap="wrap">
                {project.sourceCodeUrl && (
                  <Button
                    as={Link}
                    href={project.sourceCodeUrl}
                    isExternal
                    bg="rgba(0, 0, 0, 0.1)"
                    color="black"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    borderRadius="full"
                    px="1.5rem"
                    fontFamily="var(--font-outfit)"
                    fontWeight="500"
                    _hover={{
                      bg: "rgba(255,255,255,0.2)",
                      textDecoration: "none",
                    }}
                    leftIcon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    }
                  >
                    View on GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    as={Link}
                    href={project.liveUrl}
                    isExternal
                    bg="linear-gradient(135deg, #FF8000 0%, #FFA500 100%)"
                    color="black"
                    borderRadius="full"
                    px="1.5rem"
                    fontFamily="var(--font-outfit)"
                    fontWeight="500"
                    _hover={{
                      opacity: 0.9,
                      textDecoration: "none",
                    }}
                    leftIcon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    }
                  >
                    Try it Live
                  </Button>
                )}
                {project.devfolioUrl && (
                  <Button
                    as={Link}
                    href={project.devfolioUrl}
                    isExternal
                    bg="#3770FF"
                    color="black"
                    borderRadius="full"
                    px="1.5rem"
                    fontFamily="var(--font-outfit)"
                    fontWeight="500"
                    _hover={{
                      opacity: 0.9,
                      textDecoration: "none",
                    }}
                  >
                    Project Page
                  </Button>
                )}
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
