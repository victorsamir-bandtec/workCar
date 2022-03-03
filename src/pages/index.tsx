import { useState } from "react";
import { i18n } from "translate/i18n";

import Image from "next/image";

import Head from "next/head";
import Header from "components/Header";

import Container from "components/Container";
import Button from "components/Button";
import Card from "components/Card";
import {
  FlexMotion,
  BoxMotion,
  animationMotion,
  VStackMotion,
  HeadingMotion,
  TextMotion,
  itenXL,
  itenXR,
} from "styles/animation";

import imgCar from "assets/cars/car.png";
import imgCalendar from "assets/icons/calendar.svg";
import imgTruck from "assets/icons/truck.svg";
import imgTool from "assets/icons/tool.svg";
import imgFace from "assets/icons/facebook.svg";
import imgInst from "assets/icons/instagram.svg";
import imgPhone from "assets/icons/phone.svg";
import imgEmail from "assets/icons/email.svg";

import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  useColorMode,
  VStack,
  HStack,
  Stack,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import GalleryMobile from "components/Gallery/GalleryMobile";
import Attendece from "components/Attendece";
import Plans from "components/Plans";
import Footer from "components/Footer";
import Gallery from "components/Gallery";

const Home = () => {
  const color = {
    primary: useColorModeValue("primary", "primary"),
    hover: useColorModeValue("#b8b8b81a", "#c0c0c01c"),
    bg: useColorModeValue("#fff", "#000814"),
  };

  return (
    <>
      <Head>
        <title>Vip Esthetique</title>
      </Head>

      <span id="home"></span>

      <Header colorTheme={color.primary} colorBg={color.bg} />

      <Container>
        <FlexMotion
          mt="2rem"
          mb="4rem"
          flexDir={["column", "row"]}
          align="center"
          justify={["center", "space-between"]}
          textAlign="center"
          initial="hidden"
          animate="visible"
          variants={animationMotion}
        >
          <Box my="4rem" maxW="67rem">
            <Image src={imgCar} alt="car" />
          </Box>

          <VStack spacing={["1rem", "3rem"]}>
            <Heading fontSize="4xl">{i18n.t("titles.name")}</Heading>

            <Text fontSize="xl" maxW="52rem">
              {i18n.t("home.txt1")}
            </Text>

            <Box as="a" href="#about" mt="7rem">
              <Button colorTheme={color.primary}> {i18n.t("btn.txt1")}</Button>
            </Box>
          </VStack>
        </FlexMotion>

        <span id="about"></span>

        <Box mt="9rem">
          <Flex
            flexDir={["column"]}
            align="center"
            justify={["center", "space-between"]}
          >
            <VStack align="center" textAlign="center" spacing="0">
              <Heading fontSize={["4xl", "5xl"]}>
                {i18n.t("titles.about")}
              </Heading>
              <Text w={["100%", "80%"]} fontSize="xl">
                {i18n.t("about.txt1")}
              </Text>
            </VStack>
          </Flex>

          <Box display={["none", "block"]}>
            <Gallery />
          </Box>

          <Box display={["block", "none"]} overflow="auto">
            <GalleryMobile w="140rem">
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem1.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem2.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem3.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem4.png"
              />
            </GalleryMobile>
          </Box>
        </Box>

        <span id="attendece"></span>

        <Flex
          mt="9rem"
          mb="5rem"
          flexDir="column"
          align="center"
          justify="start"
        >
          <VStack mb="6rem" align="center" textAlign="center" spacing="0">
            <Heading fontSize="4xl"> {i18n.t("titles.attendace")}</Heading>
            <Text w={["100%", "80%"]} fontSize="xl">
              {i18n.t("attendace.txt1")}
            </Text>
          </VStack>

          <Stack direction={["column", "row"]} spacing="5rem">
            <Attendece
              title="attendace.txt2"
              description="attendace.txt3"
              img={imgCalendar}
            />

            <Attendece
              title="attendace.txt4"
              description="attendace.txt5"
              img={imgTruck}
            />

            <Attendece
              title="attendace.txt6"
              description="attendace.txt7"
              img={imgTool}
            />
          </Stack>
        </Flex>

        <span id="services"></span>

        <Flex
          mt="9rem"
          flexDir={["column", "row"]}
          align={["center", "start"]}
          justify={["start", "space-between"]}
        >
          <Flex w={["100%", "50%"]} align="center" flexDir="column" mb="3rem">
            <VStack align="center" textAlign="center">
              <Heading fontSize="4xl"> {i18n.t("titles.services")}</Heading>
              <Text fontSize="xl">{i18n.t("services.txt1")}</Text>
            </VStack>

            <AspectRatio display={["block", "none"]} w="100%" mt="3rem">
              <iframe
                src="https://www.youtube-nocookie.com/embed/XBwiz2Q3Bas?controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </AspectRatio>

            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="bold"
              mt="4rem"
              mb="1rem"
            >
              {i18n.t("services.txt2")}
            </Text>

            <Box>
              <Button colorTheme={color.primary}>BAIXAR</Button>
            </Box>
          </Flex>

          <AspectRatio display={["none", "block"]} w="48%" h="37rem">
            <iframe
              src="https://www.youtube-nocookie.com/embed/XBwiz2Q3Bas?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
        </Flex>

        <Box mt="9rem">
          <Flex flexDir="column" align="start" justify="center">
            <VStack align="center" textAlign="center" spacing="0">
              <Heading fontSize="4xl"> {i18n.t("titles.difference")}</Heading>
              <Text w={["100%", "80%"]} fontSize="xl">
                {i18n.t("difference.txt1")}
              </Text>

              <Text fontWeight="semibold" fontSize="xl">
                {i18n.t("difference.txt2")}
              </Text>
            </VStack>

            <Box display={["none", "block"]} w="100%">
              <Gallery />
            </Box>
          </Flex>

          <Box display={["block", "none"]} my="2rem" overflow="auto">
            <GalleryMobile w="140rem">
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem1.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem2.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem3.png"
              />
              <Card
                title="Teste"
                img="http://vipesthetique.lu/imagens/imagem4.png"
              />
            </GalleryMobile>
          </Box>
        </Box>

        <span id="contact"></span>

        <Flex mt="9rem" flexDir="column" align="center" justify="start">
          <VStack align="center" textAlign="center" spacing="0">
            <Heading fontSize="4xl"> {i18n.t("titles.localization")}</Heading>
            <Text fontSize="xl">{i18n.t("localization.txt1")}</Text>
          </VStack>

          <AspectRatio
            my="3rem"
            w="100%"
            h={["100%", "45rem"]}
            _before={{ padding: "none" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.3086484024284!2d5.961401315363969!3d49.648483452704085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eab3c02eafff8d%3A0x3e0ee41c70f87651!2sVIP%20-%20Esth%C3%A9tique%20Automotive!5e0!3m2!1spt-BR!2sbr!4v1643949258154!5m2!1spt-BR!2sbr"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>

          <VStack mt="4rem" align="center" textAlign="center" spacing="0">
            <Heading fontSize="4xl"> {i18n.t("titles.contact")}</Heading>
            <Text fontSize="xl">{i18n.t("contact.txt1")}</Text>
          </VStack>
        </Flex>

        <Box w="100%" py="3rem" overflow="auto" color="white">
          <GalleryMobile w={["115rem", "100%"]}>
            <VStack
              as="a"
              w="25rem"
              p="2rem 0"
              href="tel:+352 621 512 645"
              spacing="0"
              borderRadius="1rem"
              cursor="pointer"
              bg="primary"
            >
              <Image src={imgPhone} alt="phone" />
              <Text fontWeight="semibold" fontSize="2xl">
                {i18n.t("contact.txt2")}
              </Text>
              <Text fontSize="lg">(+352) 621 512 645</Text>
            </VStack>

            <VStack
              as="a"
              w="25rem"
              p="2rem 0"
              href="https://www.instagram.com/vipesthetique.lu"
              spacing="0"
              borderRadius="1rem"
              cursor="pointer"
              bg="primary"
            >
              <Image src={imgInst} alt="instagram" />
              <Text fontWeight="semibold" fontSize="2xl">
                {i18n.t("contact.txt3")}
              </Text>
              <Text fontSize="lg">vipesthetique.lu</Text>
            </VStack>

            <VStack
              as="a"
              w="25rem"
              p="2rem 0"
              href="https://www.facebook.com/vipesthetique.lu"
              spacing="0"
              borderRadius="1rem"
              cursor="pointer"
              bg="primary"
            >
              <Image src={imgFace} alt="facebook" />
              <Text fontWeight="semibold" fontSize="2xl">
                {i18n.t("contact.txt4")}
              </Text>
              <Text fontSize="lg">vipesthetique.lu</Text>
            </VStack>

            <VStack
              as="a"
              w="25rem"
              pt="2rem"
              href="mailto:contact@vipesthetique.lu"
              spacing="0"
              borderRadius="1rem"
              cursor="pointer"
              bg="primary"
            >
              <Image src={imgEmail} alt="email" />
              <Text fontWeight="semibold" fontSize="2xl">
                {i18n.t("contact.txt5")}
              </Text>
              <Text fontSize="lg">contact@vipesthetique.lu</Text>
            </VStack>
          </GalleryMobile>
        </Box>
      </Container>

      <Footer colorTheme={color.primary} colorBg={color.bg} />
    </>
  );
};

export default Home;
