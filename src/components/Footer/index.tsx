import { i18n } from "translate/i18n";
import Container from "components/Container";

import Image from "next/image";
import imgLogo from "assets/logo.svg";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Languages from "components/Languages";

interface Props {
  colorTheme: string;
  colorBg: string;
}

const Footer = ({ colorTheme, colorBg }: Props) => {
  return (
    <Container>
      <Flex mt="3rem " pt="4rem" align="start" justify="space-between">
        <Box w="10rem" h="10rem">
          <Image src={imgLogo} alt="logo" />
        </Box>

        <VStack align="stretch">
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
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
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: colorTheme }}
          >
            {i18n.t("menu.attendace")}
          </Text>

          <Text
            as="a"
            href="#laboratorio"
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: colorTheme }}
          >
            {i18n.t("menu.services")}
          </Text>
        </VStack>

        <VStack align="stretch">
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: colorTheme }}
          >
            {i18n.t("menu.about")}
          </Text>

          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: colorTheme }}
          >
            {i18n.t("menu.contact")}
          </Text>

          <Languages colorBg={colorBg} />
        </VStack>
      </Flex>

      <Text my="4rem" textAlign="center" fontSize="sm">
        Intelectual Property Protection - Privacy Policy©2020-2030 VipEsthetc.lu
        - All rights reserved.
      </Text>
    </Container>
  );
};

export default Footer;
