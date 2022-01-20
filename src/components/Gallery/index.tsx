import Image from "next/image";

import imgCar from "assets/gallery/car.png";

import { Box, Flex, Heading } from "@chakra-ui/react";
import Card from "components/Card";

const Gallery = () => {
  return (
    <Flex w="120rem" justify="space-between">
      <Card title="Teste" img="http://vipesthetique.lu/imagens/imagem1.png" />
      <Card title="Teste" img="http://vipesthetique.lu/imagens/imagem2.png" />
      <Card title="Teste" img="http://vipesthetique.lu/imagens/imagem3.png" />
      <Card title="Teste" img="http://vipesthetique.lu/imagens/imagem4.png" />
    </Flex>
  );
};

export default Gallery;
