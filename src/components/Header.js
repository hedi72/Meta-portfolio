import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useStatStyles } from "@chakra-ui/react";
import useScrollYDirection from "../hooks/useScrollYDirection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: therodfighter@egmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

const scrollDirection =useScrollYDirection()



  const socialItems = socials.map(d => {
    return (<a key={d.url} href={d.url}>
      <FontAwesomeIcon icon={d.icon} />
    </a>)
  })

  return (
    <Box 
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={scrollDirection==="down"?"translateY(-200px)":"translateY(0)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">

        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={6}>
              {socialItems}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}

              <a href="#contactme-section">Contact me</a>
              <a href="#projects-section"> Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
