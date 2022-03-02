import { Flex } from "@chakra-ui/react";
import Card from "components/Card";
import { ReactNode } from "react";

interface Props {
  w: string | string[];
  children: ReactNode;
}

const GalleryMobile = ({ children, w = "120rem" }: Props) => {
  return (
    <Flex w={w} p="4rem 1rem" justify="space-between">
      {children}
    </Flex>
  );
};

export default GalleryMobile;