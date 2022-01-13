import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  VStack,
} from "@chakra-ui/react";

interface Props {
  colorTheme: string;
  isOpen: boolean;
  onClose: () => void;
}

const mobile = ({ isOpen, onClose, colorTheme }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent py="3rem" bg={colorTheme}>
        <DrawerCloseButton
          top="30px"
          fontSize="xl"
          color="#ffd100 !important"
          bg="transparent !important"
          _hover={{
            backgroundColor: "unset !important",
          }}
        />
        <DrawerHeader fontSize="2xl">Menu</DrawerHeader>

        <DrawerBody onClick={onClose}>
          <VStack
            mt="3rem"
            spacing="2.5rem"
            align="stretch"
            fontSize="xl"
            fontWeight="semibold"
          >
            <Link href="#">Inicio</Link>
            <Link href="#">Atendimento</Link>
            <Link href="#">Serviços</Link>
            <Link href="#">Localização</Link>
            <Link href="#">Sobre nós</Link>
            <Link href="#">Contato</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default mobile;
