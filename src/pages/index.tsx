import { useState } from "react";
import Image from "next/image";

import Head from "next/head";
import Header from "components/Header";

import imgProscheDark from "assets/cars/mustang.png";

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
import Gallery from "components/Gallery";

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

      <Container>
        <Flex
          mt="1rem"
          mb="4rem"
          flexDir="column"
          align="center"
          justify="center"
          textAlign="center"
        >
          <Box mt="4rem" opacity="0.92">
            <Image src={imgProscheDark} alt="brazil" />
          </Box>

          <Heading fontSize="3xl">Vip Esthetique</Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Text>

          <Box as="a" href="#about" mt="7rem">
            <Button colorTheme={color.primary}>COMEÇAR</Button>
          </Box>
        </Flex>

        <span id="about"></span>

        <Box mt="9rem">
          <Flex
            flexDir="column"
            align="start"
            justify="center"
            textAlign="center"
          >
            <VStack mb="3rem" spacing="1rem">
              <Heading fontSize="3xl">Sobre nós</Heading>
              <Text fontSize="xl">
                Somos uma empresa especializada em embelezamento automotivo, Com
                profissionais qualificados e certificados para atender todas
                necessidades dos nossos clientes. O nosso diferencial é que
                vamos até você para te atender, Oferecendo extrema qualidade em
                nossos serviço e conforto para.
              </Text>
            </VStack>
          </Flex>

          <Box overflow="auto">
            <Gallery />
          </Box>

          <Text mt="3rem" fontWeight="semibold" fontSize="xl">
            Somos uma empresa especializada em.
          </Text>
        </Box>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
