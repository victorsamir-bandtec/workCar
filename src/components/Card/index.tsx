import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";

interface Props {
  title: string;
  img: any;
}

const Card = ({ title, img }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="28rem"
      h="40rem"
      justify="start"
      align="end"
      borderRadius="1rem"
      boxShadow="xl"
      bgPos="center"
      bgSize="cover"
      bgImage={img}
    >
      <Box
        w="100%"
        h="8rem"
        p="2rem"
        borderRadius="0.5rem"
        backdropFilter="blur(12px)"
        bg="whiteAlpha.200"
      >
        <Heading textAlign="left">{title}</Heading>
      </Box>
    </Flex>
  );
};

export default Card;
