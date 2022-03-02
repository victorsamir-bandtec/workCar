import { useCallback, useState } from "react";
import { i18n } from "translate/i18n";

import Image from "next/image";
import Mobile from "./mobile";
import imgLogo from "assets/logo.svg";
import imgLogoDark from "assets/logoDark.svg";

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import {
  FlexMotion,
  BoxMotion,
  animationMotion,
  itenXR,
} from "styles/animation";

import {
  Flex,
  Text,
  Button,
  useColorMode,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import Container from "components/Container";
import Languages from "components/Languages";

interface Props {
  colorTheme: string;
  colorBg: string;
}

const Header = ({ colorTheme, colorBg }: Props) => {
  const { colorMode } = useColorMode();
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
        <FlexMotion
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          initial="hidden"
          animate="visible"
          variants={animationMotion}
        >
          <HStack spacing="1rem">
            <Box w="7.5rem" h="7.5rem" mt="1.5rem">
              {colorMode === "dark" ? (
                <Image src={imgLogoDark} alt="logo" />
              ) : (
                <Image src={imgLogo} alt="logo" />
              )}
            </Box>
          </HStack>

          <Flex w={["none", "53%", "55%"]} justify="space-between">
            <FlexMotion
              w="80%"
              display={["none", "flex", "flex"]}
              justify="space-between"
              align="center"
              variants={animationMotion}
            >
              <BoxMotion variants={itenXR}>
                <Text
                  className="active"
                  cursor="pointer"
                  fontSize={["md", "md", "lg"]}
                  _hover={{ color: "secundary" }}
                  _after={{
                    background: colorTheme,
                  }}
                >
                  {i18n.t("menu.home")}
                </Text>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <Text
                  as="a"
                  href="#skils"
                  cursor="pointer"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{ color: "secundary" }}
                >
                  {i18n.t("menu.attendace")}
                </Text>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <Text
                  as="a"
                  href="#laboratorio"
                  cursor="pointer"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{ color: "secundary" }}
                >
                  {i18n.t("menu.services")}
                </Text>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <Text
                  cursor="pointer"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{ color: "secundary" }}
                >
                  {i18n.t("menu.about")}
                </Text>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <Text
                  cursor="pointer"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{ color: "secundary" }}
                >
                  {i18n.t("menu.contact")}
                </Text>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <Languages fw="normal" />
              </BoxMotion>
            </FlexMotion>

            <HStack spacing="3rem">
              <BoxMotion variants={itenXR}>
                <Button
                  fontSize="2.4rem"
                  variant="ghost"
                  onClick={handleDarkMode}
                >
                  {dark ? <MoonIcon /> : <SunIcon />}
                </Button>
              </BoxMotion>

              <BoxMotion variants={itenXR}>
                <HamburgerIcon
                  onClick={onOpen}
                  w="3.3rem"
                  h="3.3rem"
                  cursor="pointer"
                  color="secundary"
                  display={["block", "none", "none"]}
                />
              </BoxMotion>
            </HStack>
          </Flex>
        </FlexMotion>
      </Container>

      <Mobile isOpen={isOpen} onClose={onClose} colorTheme={colorBg} />
    </Flex>
  );
};

export default Header;
