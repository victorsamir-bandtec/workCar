import { Flex } from "@chakra-ui/react";
import Card from "components/Card";
import { ReactNode } from "react";

interface Props {
  w: string;
  children: ReactNode;
}

const Gallery = ({ children, w = "120rem" }: Props) => {
  return (
    <Flex w={w} p="1rem" justify="space-between">
      {children}
    </Flex>
  );
};

export default Gallery;
