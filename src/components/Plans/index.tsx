import { Flex, Heading, List, ListItem } from "@chakra-ui/react";

interface Props {
  title: string;
  price: string;
  children: React.ReactNode;
}

const Plans = ({ title, price, children }: Props) => {
  return (
    <Flex
      pos="relative"
      w="41rem"
      h="63rem"
      p="2rem"
      flexDir="column"
      justify="start"
      align="start"
      borderRadius="1rem"
      boxShadow="0 0 10px #ffc904"
    >
      <Heading textAlign="center" w="100%" mb="2rem">
        {title}
      </Heading>

      <Heading pos="absolute" color="secundary" bottom="1.5rem" right="2rem">
        {price}
      </Heading>

      <List className="plans" pos="relative" fontSize="lg" spacing="1rem">
        {children}
      </List>
    </Flex>
  );
};

export default Plans;
