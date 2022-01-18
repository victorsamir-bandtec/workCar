import Image from "next/image";

import imgCar from "assets/gallery/car.png";

import { Box, Flex, Heading } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Flex overflow="auto">
      <Flex
        w="28rem"
        h="40rem"
        mr="3rem"
        justify="start"
        align="end"
        borderRadius="1rem"
        boxShadow="xl"
        bgPos="left"
        bgSize="cover"
        bgImage="url('http://vipesthetique.lu/imagens/imagem1.png')"
      >
        <Box
          w="100%"
          h="8rem"
          p="2rem"
          borderRadius="1rem"
          backdropFilter="blur(12px)"
          bg="whiteAlpha.400"
        >
          <Heading textAlign="left">Lorem ipsum</Heading>
        </Box>
      </Flex>

      <Flex
        w="28rem"
        h="40rem"
        mr="3rem"
        justify="start"
        align="end"
        borderRadius="1rem"
        boxShadow="xl"
        bgPos="left"
        bgSize="cover"
        bgImage="url('http://vipesthetique.lu/imagens/imagem2.png')"
      >
        <Box
          w="100%"
          h="8rem"
          p="2rem"
          borderRadius="1rem"
          backdropFilter="blur(12px)"
          bg="whiteAlpha.400"
        >
          <Heading textAlign="left">Lorem ipsum</Heading>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Gallery;
