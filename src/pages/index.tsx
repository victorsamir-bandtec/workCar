import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import Header from "components/Header";

import Container from "components/Container";
import Button from "components/Button";
import Card from "components/Card";

import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
  HStack,
} from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();
  const color = {
    primary: useColorModeValue("secundary", "primary"),
    hover: useColorModeValue("#b8b8b81a", "#c0c0c01c"),
    bg: useColorModeValue("#fff", "#000814"),
  };

  return (
    <>
      <Head>
        <title>Vip Esthetique</title>
      </Head>

      <Header colorTheme={color.primary} colorBg={color.bg} />

      <Container></Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
