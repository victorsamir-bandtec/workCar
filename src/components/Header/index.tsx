import { useCallback, useState } from "react";
import { i18n } from "translate/i18n";

import Image from "next/image";
import Mobile from "./mobile";
import imgLogo from "assets/logo.svg";

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import {
  Flex,
  Text,
  Heading,
  Button,
  useColorMode,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import Container from "components/Container";
import Languages from "components/Languages";

const Header = ({ colorTheme, colorBg }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { toggleColorMode } = useColorMode();
  const [dark, setDark] = useState(false);

  const handleDarkMode = useCallback(() => {
    setDark(dark ? false : true);

    toggleColorMode();
  }, [toggleColorMode, setDark, dark]);

  return (
    <Flex
      as="header"
      h={["45px", "65px"]}
      mt="10"
      align="center"
      justify="center"
      bgColor="transparent"
    >
      <Container>
        <Flex w="100%" h="100%" align="center" justify="space-between">
          <HStack spacing="1rem">
            <Box w="3.5rem" h="3.5rem">
              <Image src={imgLogo} alt="logo" />
            </Box>
            <Heading fontWeight="semibold" fontSize={["xl", "md", "xl"]}>
              Esthetique
            </Heading>
          </HStack>

          <Flex w={["none", "53%", "55%"]} justify="space-between">
            <Flex
              w="80%"
              display={["none", "flex", "flex"]}
              justify="space-between"
              align="center"
            >
              <Text
                className="active"
                cursor="pointer"
                fontSize={["md", "md", "lg"]}
                _hover={{ color: colorTheme }}
                _after={{
                  background: colorTheme,
                }}
              >
                {i18n.t("menu.home")}
              </Text>

              <Text
                as="a"
                href="#skils"
                cursor="pointer"
                fontSize={["sm", "md", "lg"]}
                _hover={{ color: colorTheme }}
              >
                {i18n.t("menu.attendace")}
              </Text>

              <Text
                as="a"
                href="#laboratorio"
                cursor="pointer"
                fontSize={["sm", "md", "lg"]}
                _hover={{ color: colorTheme }}
              >
                {i18n.t("menu.services")}
              </Text>

              <Text
                cursor="pointer"
                fontSize={["sm", "md", "lg"]}
                _hover={{ color: colorTheme }}
              >
                {i18n.t("menu.about")}
              </Text>

              <Text
                cursor="pointer"
                fontSize={["sm", "md", "lg"]}
                _hover={{ color: colorTheme }}
              >
                {i18n.t("menu.contact")}
              </Text>

              <Languages />
            </Flex>

            <HStack spacing="3rem">
              <Button
                fontSize="2.4rem"
                variant="ghost"
                onClick={handleDarkMode}
              >
                {dark ? <MoonIcon /> : <SunIcon />}
              </Button>

              <HamburgerIcon
                onClick={onOpen}
                w="3.3rem"
                h="3.3rem"
                cursor="pointer"
                color="secundary"
                display={["block", "none", "none"]}
              />
            </HStack>
          </Flex>
        </Flex>
      </Container>

      <Mobile isOpen={isOpen} onClose={onClose} colorTheme={colorBg} />
    </Flex>
  );
};

export default Header;
