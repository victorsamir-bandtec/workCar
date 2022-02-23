import { useState } from "react";
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
import GalleryMobile from "components/GalleryMobile";
import Attendece from "components/Attendece";
import Plans from "components/Plans";
import Footer from "components/Footer";

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
            <Heading fontSize="4xl">Vip Esthetique</Heading>

            <Text fontSize="xl" maxW="52rem">
              Somos uma empresa especializada em detalhamento automotivo, Com
              cede no Luxemburgo.
            </Text>

            <Box as="a" href="#about" mt="7rem">
              <Button colorTheme={color.primary}>CONHECER</Button>
            </Box>
          </VStack>
        </FlexMotion>

        <span id="about"></span>

        <Box mt="9rem">
          <Flex
            flexDir={["column"]}
            align={["start", "center"]}
            justify={["center", "space-between"]}
          >
            <VStack
              align={["start", "center"]}
              textAlign={["left", "center"]}
              maxW={["45rem", "70rem"]}
              spacing="0"
            >
              <Heading fontSize={["4xl", "5xl"]}>Sobre nós</Heading>
              <Text fontSize={["xl", "2xl"]}>
                Somos uma empresa especializada em embelezamento automotivo, Com
                profissionais qualificados e certificados para atender todas
                necessidades dos nossoss.
              </Text>
            </VStack>

            <Box my="2rem" overflow="auto">
              <GalleryMobile w={["140rem", "135rem"]}>
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
          </Flex>
        </Box>

        <span id="attendece"></span>

        <Flex
          mt="9rem"
          mb="5rem"
          flexDir="column"
          align={["center", "start"]}
          justify="start"
        >
          <VStack mb="6rem" align="start" textAlign="left" spacing="0">
            <Heading fontSize="4xl">Nosso atendimento</Heading>
            <Text fontSize="xl">
              Trabalhamos com agendamento dos serviços para melhor atendimento
              dos nossos clientes.
            </Text>
          </VStack>

          <Stack direction={["column", "row"]} spacing="5rem">
            <Attendece
              title="Agendamento"
              description="Ligue para nós ou envie uma mensagem por um dos nossos canais"
              img={imgCalendar}
            />

            <Attendece
              title="Check in doseu carro."
              description="Após agendado aguardamos você para recebermos seu carro.​"
              img={imgTruck}
            />

            <Attendece
              title="Faremos o serviço"
              description="Cuidaremos do seu veiculo de acordo com os serviços escolhidos."
              img={imgTool}
            />
          </Stack>
        </Flex>

        <span id="services"></span>

        <Flex
          mt="9rem"
          flexDir={["column", "row-reverse"]}
          align="center"
          justify={["start", "space-between"]}
        >
          <VStack mb="3rem" align="center" spacing="0">
            <Heading fontSize="4xl">Nossos serviços</Heading>
            <Text fontSize="xl">
              Somos uma empresa especializada em embelezamento automotivo, Com
              profissionais qualificados e certificados para atender todas
              necessidades dos nossos clientes. O nosso diferencial é que vamos
              até
            </Text>

            <Box my="2rem">
              <Button colorTheme={color.primary}>BAIXAR</Button>
            </Box>
          </VStack>

          <AspectRatio w="100%">
            <iframe
              src="https://www.youtube-nocookie.com/embed/XBwiz2Q3Bas?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
        </Flex>

        <Box mt="9rem">
          <Flex flexDir="column" align="start" justify="center">
            <VStack align="start" spacing="0">
              <Heading fontSize="4xl">Diferenciados</Heading>
              <Text fontSize="xl">
                Somos uma empresa especializada em embelezamento automotivo, Com
                profissionais qualificados e certificados para atender todas
                necessidades dos nossos clientes. O nosso diferencial é que
                vamos até
              </Text>
            </VStack>
          </Flex>

          <Box my="2rem" overflow="auto">
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

          <Text fontWeight="semibold" fontSize="xl">
            Avaliação de valores sob análise do veículo.
          </Text>
        </Box>

        <span id="contact"></span>

        <Flex mt="9rem" flexDir="column" align="start" justify="start">
          <VStack align="start" spacing="0">
            <Heading fontSize="4xl">Localizados</Heading>
            <Text fontSize="xl">
              Somos uma empresa especializada em embelezamento automotivo,
              profissionais qualificados e certificados para para.
            </Text>
          </VStack>

          <AspectRatio my="3rem" w="100%" h="45rem">
            <iframe
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.3086484024284!2d5.961401315363969!3d49.648483452704085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eab3c02eafff8d%3A0x3e0ee41c70f87651!2sVIP%20-%20Esth%C3%A9tique%20Automotive!5e0!3m2!1spt-BR!2sbr!4v1643949258154!5m2!1spt-BR!2sbr"
              loading="lazy"
            ></iframe>
          </AspectRatio>

          <Text fontWeight="semibold" fontSize="xl">
            Vamos até você, aonde você estiver - Serviço móvel
          </Text>

          <VStack my="4rem" align="start" spacing="0">
            <Heading fontSize="4xl">Contato</Heading>
            <Text fontSize="xl">
              Somos uma empresa especializada em embelezamento automotivo.
            </Text>
          </VStack>
        </Flex>

        <Box py="3rem" overflow="auto">
          <GalleryMobile w="80rem">
            <VStack as="a" href="tel:+352 621 512 645" spacing="0">
              <Image src={imgPhone} alt="phone" />
              <Text fontWeight="semibold" fontSize="2xl">
                Telefone
              </Text>
              <Text fontSize="lg">(+352) 621 512 645</Text>
            </VStack>

            <VStack
              as="a"
              href="https://www.instagram.com/vipesthetique.lu"
              spacing="0"
            >
              <Image src={imgInst} alt="instagram" />
              <Text fontWeight="semibold" fontSize="2xl">
                Instagram
              </Text>
              <Text fontSize="lg">vipesthetique.lu</Text>
            </VStack>

            <VStack
              as="a"
              href="https://www.facebook.com/vipesthetique.lu"
              spacing="0"
            >
              <Image src={imgFace} alt="facebook" />
              <Text fontWeight="semibold" fontSize="2xl">
                Facebook
              </Text>
              <Text fontSize="lg">vipesthetique.lu</Text>
            </VStack>

            <VStack as="a" href="mailto:contact@vipesthetique.lu" spacing="0">
              <Image src={imgEmail} alt="email" />
              <Text fontWeight="semibold" fontSize="2xl">
                Email
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
