import Image from "next/image";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
  img: any;
};

const Attendece = ({ title, description, img }: Props) => {
  return (
    <VStack spacing="1rem">
      <Image src={img} alt="icon" />

      <Box textAlign="center">
        <Heading mb="0.5rem" fontSize="2xl" fontWeight="normal">
          {title}
        </Heading>

        <Text w="80%" m="auto" fontSize="lg">
          {description}
        </Text>
      </Box>
    </VStack>
  );
};

export default Attendece;
