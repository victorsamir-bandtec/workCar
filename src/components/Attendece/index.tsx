import Image from "next/image";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { i18n } from "translate/i18n";

type Props = {
  title: string;
  description: string;
  img: any;
};

const Attendece = ({ title, description, img }: Props) => {
  return (
    <VStack
      p="5rem 0"
      borderRadius="1rem"
      color="white"
      spacing="1rem"
      bg="primary"
    >
      <Image src={img} alt="icon" />

      <Box textAlign="center">
        <Heading mb="0.5rem" fontSize="2xl">
          {i18n.t(title)}
        </Heading>

        <Text w="80%" m="auto" fontSize="lg">
          {i18n.t(description)}
        </Text>
      </Box>
    </VStack>
  );
};

export default Attendece;
