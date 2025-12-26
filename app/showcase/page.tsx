"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import OpenNavbar from "../components/OpenNavbar";
import StickyFooter from "../components/StickyFooter";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import { projectsData, categories, events, ProjectData } from "./data";

import "../styles.css";

const ProjectsPage = () => {
  const [navbarHeight, setNavbarHeight] = useState(149);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("All Events");

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    onOpen();
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesEvent =
        selectedEvent === "All Events" || project.builtAt === selectedEvent;

      return matchesSearch && matchesCategory && matchesEvent;
    });
  }, [searchQuery, selectedCategory, selectedEvent]);

  return (
    <Box className="relative">
      <Box
        zIndex="100"
        className="relative w-full bg-white top-0 left-0 rounded-b-3xl"
      >
        {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
        <Navbar
          setIsNavbarOpen={setIsNavbarOpen}
          setNavbarHeight={setNavbarHeight}
        />

        <Box
          className="relative container-1200 bg-white"
          px={{ base: "1.5rem", md: "2rem", "2xl": "0" }}
        >
          <Box
            w="full"
            pt={{ base: "2rem", md: "4rem" }}
            pb={{ base: "4rem", md: "4rem", lg: "7rem" }}
          >
            {/* Header */}
            <Flex
              justifyContent="space-between"
              alignItems={{ base: "flex-start", lg: "center" }}
              flexDir={{ base: "column", lg: "row" }}
              gap="1.5rem"
              mb="2rem"
            >
              <Box>
                <Heading
                  fontSize={{ base: "2.5rem", md: "3.5rem" }}
                  fontFamily="var(--font-outfit)"
                  fontWeight="400"
                >
                  Project Showcase
                </Heading>
                <Text
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  color="#666"
                  fontFamily="var(--font-outfit)"
                  mt="0.5rem"
                >
                  Discover amazing projects built by our community at Hack This
                  Fall!
                </Text>
              </Box>

              {/* Search */}
              <InputGroup
                maxW={{ base: "full", lg: "320px" }}
                alignSelf={"end"}
              >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  borderRadius="full"
                  border="1px solid #E0E0E0"
                  bg="white"
                  fontFamily="var(--font-outfit)"
                  _focus={{
                    borderColor: "#FF8000",
                    boxShadow: "0 0 0 1px #FF8000",
                  }}
                />
              </InputGroup>
            </Flex>

            {/* Filters */}
            <Flex
              gap={{ base: "1rem", md: "2rem" }}
              mb="2rem"
              flexDir={{ base: "column", md: "row" }}
            >
              {/* Category Filter */}
              <Box>
                <Text
                  fontSize="0.85rem"
                  fontWeight="600"
                  fontFamily="var(--font-outfit)"
                  color="#666"
                  mb="0.5rem"
                >
                  Category
                </Text>
                <Flex gap="0.5rem" flexWrap="wrap">
                  {categories.map((category) => (
                    <Flex
                      key={category}
                      px={{ base: "0.75rem", md: "1rem" }}
                      py="0.4rem"
                      borderRadius="full"
                      cursor="pointer"
                      transition="all 0.2s"
                      bg={selectedCategory === category ? "#FF8000" : "white"}
                      color={selectedCategory === category ? "white" : "black"}
                      border={
                        selectedCategory === category
                          ? "1px solid #FF8000"
                          : "1px solid #E0E0E0"
                      }
                      fontFamily="var(--font-outfit)"
                      fontSize={{ base: "0.75rem", md: "0.85rem" }}
                      fontWeight="500"
                      onClick={() => setSelectedCategory(category)}
                      _hover={{
                        borderColor: "#FF8000",
                      }}
                    >
                      {category}
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* Event Filter */}
              {/* <Box>
                <Text
                  fontSize="0.85rem"
                  fontWeight="600"
                  fontFamily="var(--font-outfit)"
                  color="#666"
                  mb="0.5rem"
                >
                  Event
                </Text>
                <Flex gap="0.5rem" flexWrap="wrap">
                  {events.map((event) => (
                    <Flex
                      key={event}
                      px={{ base: "0.75rem", md: "1rem" }}
                      py="0.4rem"
                      borderRadius="full"
                      cursor="pointer"
                      transition="all 0.2s"
                      bg={selectedEvent === event ? "#A163FF" : "white"}
                      color={selectedEvent === event ? "white" : "black"}
                      border={
                        selectedEvent === event
                          ? "1px solid #A163FF"
                          : "1px solid #E0E0E0"
                      }
                      fontFamily="var(--font-outfit)"
                      fontSize={{ base: "0.75rem", md: "0.85rem" }}
                      fontWeight="500"
                      onClick={() => setSelectedEvent(event)}
                      _hover={{
                        borderColor: "#A163FF",
                      }}
                    >
                      {event}
                    </Flex>
                  ))}
                </Flex>
              </Box> */}
            </Flex>

            {/* Results Count */}
            <Text
              fontSize="0.9rem"
              color="#666"
              fontFamily="var(--font-outfit)"
              mb="1.5rem"
            >
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </Text>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="1.5rem">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                py="4rem"
                px="2rem"
                bg="#FAFAFA"
                borderRadius="20px"
                border="1px dashed #E0E0E0"
              >
                <Text
                  fontSize="1.2rem"
                  fontFamily="var(--font-outfit)"
                  fontWeight="500"
                  color="#666"
                  textAlign="center"
                >
                  No projects found
                </Text>
                <Text
                  fontSize="0.9rem"
                  fontFamily="var(--font-outfit)"
                  color="#999"
                  mt="0.5rem"
                  textAlign="center"
                >
                  Try adjusting your search or filters
                </Text>
              </Flex>
            )}
          </Box>
        </Box>
      </Box>

      <StickyFooter />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={selectedProject}
      />
    </Box>
  );
};

export default ProjectsPage;
