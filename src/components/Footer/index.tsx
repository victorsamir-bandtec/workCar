import { i18n } from "translate/i18n";
import Container from "components/Container";

import Image from "next/image";
import imgLogo from "assets/logoDark.svg";

import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import Languages from "components/Languages";

interface Props {
  colorTheme: string;
  colorBg: string;
}

const Footer = ({ colorTheme, colorBg }: Props) => {
  return (
    <VStack mt="5rem" p="2rem 7rem" spacing="2rem" color="white" bg="primary">
      <Flex w="100%" align="center" justify="space-between">
        <Box w="10rem" h="10rem">
          <Image src={imgLogo} alt="logo" />
        </Box>

        <Stack
          direction={["column", "row"]}
          align="start"
          spacing={["1", "3rem"]}
        >
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "secundary" }}
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
            _hover={{ color: "secundary" }}
          >
            {i18n.t("menu.attendace")}
          </Text>

          <Text
            as="a"
            href="#laboratorio"
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "secundary" }}
          >
            {i18n.t("menu.services")}
          </Text>
        </Stack>

        <Stack
          direction={["column", "row"]}
          align="start"
          spacing={["1", "3rem"]}
        >
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "secundary" }}
          >
            {i18n.t("menu.about")}
          </Text>

          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ color: "secundary" }}
          >
            {i18n.t("menu.contact")}
          </Text>

          <Languages colorBg={colorBg} />
        </Stack>
      </Flex>

      <Text my="4rem" textAlign="center" fontSize="md">
        Intelectual Property Protection - Privacy Policy©2020-2030 VipEsthetc.lu
        - All rights reserved.
      </Text>
    </VStack>
  );
};

export default Footer;
