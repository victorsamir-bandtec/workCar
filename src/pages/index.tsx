import { useState } from "react";
import Image from "next/image";

import Head from "next/head";
import Header from "components/Header";

import Container from "components/Container";
import Button from "components/Button";
import Card from "components/Card";

import imgProscheDark from "assets/cars/mustang.png";
import imgCalendar from "assets/icons/calendar.svg";
import imgTruck from "assets/icons/truck.svg";
import imgTool from "assets/icons/tool.svg";

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
  ListItem,
  List,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Gallery from "components/Gallery";
import Attendece from "components/Attendece";
import Plans from "components/Plans";

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
            <VStack mb="3rem">
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
            <Gallery w="120rem">
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
            </Gallery>
          </Box>

          <Text mt="3rem" fontWeight="semibold" fontSize="xl">
            Somos uma empresa especializada em.
          </Text>
        </Box>

        <span id="attendece"></span>

        <Flex
          mt="9rem"
          mb="5rem"
          flexDir="column"
          align="center"
          justify="start"
          textAlign="center"
        >
          <VStack mb="6rem">
            <Heading fontSize="3xl">Nosso atendimento</Heading>
            <Text fontSize="xl">
              Somos uma empresa especializada em embelezamento automotivo
            </Text>
          </VStack>

          <Stack direction="column" spacing="5rem">
            <Attendece
              title="Agendamento"
              description="Ligue para nós ou envie uma mensagem por um dos nossos canais"
              img={imgCalendar}
            />

            <Attendece
              title="Iremos até você"
              description="iremos até você para efetuar o serviço selecionado na data e horário."
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

        <Box mt="9rem">
          <Flex
            flexDir="column"
            align="start"
            justify="center"
            textAlign="center"
          >
            <VStack mb="3rem">
              <Heading fontSize="3xl">Nossos serviços</Heading>
              <Text fontSize="xl">
                Somos uma empresa especializada em embelezamento automotivo.
              </Text>
            </VStack>
          </Flex>

          <Box overflow="auto">
            <Gallery w="140rem">
              <Plans title="VIP" price="€110.00">
                <ListItem fontWeight="bold" fontSize="2xl">
                  Exterior
                </ListItem>
                <ListItem>Polimento de cromo</ListItem>
                <ListItem>Limpeza de janelas externas</ListItem>
                <ListItem>Limpeza de jantes ou calotas</ListItem>
                <ListItem>Limpeza de vestígios de insetos</ListItem>
                <ListItem>Polimento de carroceria - MANUAL</ListItem>
                <ListItem>Limpeza de vestígios de alcatrão</ListItem>
                <ListItem>Tratamento para engraxar os pneus</ListItem>
                <ListItem>Limpeza profissional manual da carroceria</ListItem>
                <ListItem>Tratamento de brilho de plásticos externos</ListItem>

                {/* Interior */}
                <List
                  className="plansContent"
                  pos="absolute"
                  w="100%"
                  h="50rem"
                  top="-1rem"
                  opacity="0"
                  visibility="hidden"
                  cursor="default"
                  spacing="1rem"
                  bg="gray.800"
                >
                  <ListItem fontWeight="bold" fontSize="2xl">
                    Interior
                  </ListItem>

                  <ListItem>Limpeza de portas</ListItem>
                  <ListItem>Limpeza dos painéis das portas</ListItem>
                  <ListItem>Lavagem e tratamento do painel</ListItem>
                  <ListItem>Lavagem e tratamento de plasticos</ListItem>
                  <ListItem>Limpeza de carpetes por compressor</ListItem>
                  <ListItem>Limpeza do headliner (pequenas manchas)</ListItem>
                  <ListItem>Limpeza e nutrição dos assentos de couro</ListItem>
                  <ListItem>
                    Limpeza completa das sedes por injeção-extração
                  </ListItem>
                  <ListItem>
                    Limpeza e desengorduramento das janelas interiores
                  </ListItem>
                  <ListItem>
                    Aspiração profunda e seca da cabine e do porta-malas
                  </ListItem>
                </List>
              </Plans>

              <Plans title="Premium" price="€60.00">
                <ListItem fontWeight="bold" fontSize="2xl">
                  Exterior
                </ListItem>
                <ListItem>Limpeza de janelas externas</ListItem>
                <ListItem>Limpeza manual da carroceria</ListItem>
                <ListItem>Tratamento para engraxar os pneus</ListItem>
                <ListItem>Lavagem de borda ou calota (exterior)</ListItem>
                <ListItem>Limpeza de vestígios de insetos leves</ListItem>
                <ListItem>Tratamento de brilho externo de plástico</ListItem>

                {/* Interior */}
                <List
                  className="plansContent"
                  pos="absolute"
                  w="100%"
                  h="50rem"
                  top="-1rem"
                  opacity="0"
                  visibility="hidden"
                  cursor="default"
                  spacing="1rem"
                  bg="gray.800"
                >
                  <ListItem fontWeight="bold" fontSize="2xl">
                    Interior
                  </ListItem>

                  <ListItem>Limpeza de manchas leves</ListItem>
                  <ListItem>Lavagem completa do tapete</ListItem>
                  <ListItem>Limpeza de janelas internas</ListItem>
                  <ListItem>Lavagem de plásticos internos</ListItem>
                  <ListItem>Limpeza dos painéis das portas</ListItem>
                  <ListItem>Lavagem e tratamento do painel</ListItem>
                  <ListItem>Limpeza do interior das portas</ListItem>
                  <ListItem>Limpeza dos painéis das portas</ListItem>
                </List>
              </Plans>

              <Plans title="Basic" price="€40.00">
                <ListItem fontWeight="bold" fontSize="2xl">
                  Exterior
                </ListItem>
                <ListItem>Limpeza manual da carroceria</ListItem>
                <ListItem>Lavagem de vestígios de insetos</ListItem>
                <ListItem>Lavagem rápida dos aros ou calotas</ListItem>

                {/* Interior */}
                <List
                  className="plansContent"
                  pos="absolute"
                  w="100%"
                  h="50rem"
                  top="-1rem"
                  opacity="0"
                  visibility="hidden"
                  cursor="default"
                  spacing="1rem"
                  bg="gray.800"
                >
                  <ListItem fontWeight="bold" fontSize="2xl">
                    Interior
                  </ListItem>

                  <ListItem>Limpeza de janelas</ListItem>
                  <ListItem>Sucção a seco do habitáculo e da mala</ListItem>
                  <ListItem>Lavagem do painel e plásticos internos</ListItem>
                  <ListItem>Limpeza expressa dos painéis das portas</ListItem>
                  <ListItem>Limpeza e nutrição dos assentos de couro</ListItem>
                </List>
              </Plans>
            </Gallery>
          </Box>

          <VStack align="start" my="4rem">
            <Heading fontSize="3xl">Serviços extras</Heading>
            <Text fontSize="xl">
              Somos uma empresa especializada em embelezamento automotivo.
            </Text>
          </VStack>

          <Table h="80rem" fontSize="xl">
            <Thead h="7rem">
              <Tr>
                <Th w="85%" fontSize="xl" color="primary">
                  Serviço
                </Th>
                <Th fontSize="xl" color="primary">
                  Preço
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Polimento de farol</Td>
                <Td>€40.00</Td>
              </Tr>

              <Tr>
                <Td>Troca de rodas </Td>
                <Td>€40.00</Td>
              </Tr>

              <Tr>
                <Td>Remoção de pelo de animal</Td>
                <Td>€30.00</Td>
              </Tr>

              <Tr>
                <Td>Higienização a Vapor</Td>
                <Td>€80.00</Td>
              </Tr>

              <Tr>
                <Td>Desinfecção de bactérias</Td>
                <Td>€70.00</Td>
              </Tr>

              <Tr>
                <Td>Higienização de cadeira </Td>
                <Td>€30.00</Td>
              </Tr>

              <Tr>
                <Td>Polimento de carroceria</Td>
                <Td>Avaliação</Td>
              </Tr>

              <Tr>
                <Td>Polimento de painel interno</Td>
                <Td>Avaliação</Td>
              </Tr>

              <Tr>
                <Td>Hidratação de banco</Td>
                <Td>Avaliação</Td>
              </Tr>

              <Tr>
                <Td>Revitalização dos plásticos </Td>
                <Td>Avaliação</Td>
              </Tr>

              <Tr>
                <Td>Xampu para carpetes</Td>
                <Td>Avaliação</Td>
              </Tr>

              <Tr>
                <Td>Polimento dos vidros</Td>
                <Td>Avaliação</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Container>

      <Flex minH="100vh"></Flex>
    </>
  );
};

export default Home;
