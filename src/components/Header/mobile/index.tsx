import React from "react";
import { i18n } from "translate/i18n";

import {
  FlexMotion,
  BoxMotion,
  animationMotion,
  itenXR,
  VStackMotion,
  LinkMotion,
} from "styles/animation";

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
import Languages from "components/Languages";

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
        <DrawerHeader fontSize="2xl">{i18n.t("titles.menu")}</DrawerHeader>

        <DrawerBody overflow="hidden">
          <VStackMotion
            mt="3rem"
            mb="2.5rem"
            spacing="2.5rem"
            align="stretch"
            fontSize="xl"
            fontWeight="semibold"
            onClick={onClose}
            initial="hidden"
            animate="visible"
            variants={animationMotion}
          >
            <LinkMotion variants={itenXR} href="#">
              {i18n.t("menu.home")}
            </LinkMotion>
            <LinkMotion variants={itenXR} href="#about">
              {i18n.t("menu.about")}
            </LinkMotion>
            <LinkMotion variants={itenXR} href="#attendace">
              {i18n.t("menu.attendace")}
            </LinkMotion>
            <LinkMotion variants={itenXR} href="#services">
              {i18n.t("menu.services")}
            </LinkMotion>
            <LinkMotion variants={itenXR} href="#contact">
              {i18n.t("menu.contact")}
            </LinkMotion>
          </VStackMotion>

          <Languages />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default mobile;
