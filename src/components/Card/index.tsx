import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";

interface Props {
  title: string;
  img: any;
}

const Card = ({ title, img }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="32rem"
      h="50rem"
      justify="start"
      align="end"
      borderRadius="1rem"
      boxShadow="xl"
      bgPos="center"
      bgSize="cover"
      bgImage={img}
    ></Flex>
  );
};

export default Card;
