import React from "react";
import { i18n } from "translate/i18n";

import Image from "next/image";

import imgBrazil from "assets/brasil.png";
import imgFrance from "assets/franca.png";
import imgEnglish from "assets/ingles.png";

import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";

interface Props {
  colorBg?: string;
  fw?: string;
}

const Languages = ({ colorBg, fw = "semibold" }: Props) => {
  const handleLanguage = (language: string) => {
    const local = localStorage.getItem("i18nextLng");

    if (local === language) {
      return;
    }

    localStorage.setItem("i18nextLng", language);
    location.reload();
  };

  return (
    <Menu>
      <MenuButton _hover={{ color: "secundary" }} fontWeight={fw} fontSize="xl">
        {i18n.t("menu.languages")}
      </MenuButton>

      <MenuList bg={colorBg} fontSize="md">
        <MenuItem onClick={() => handleLanguage("pt-BR")}>
          <Image width="20px" height="20px" src={imgBrazil} alt="brazil" />

          <Text as="span" ml="2rem">
            Portugues
          </Text>
        </MenuItem>

        <MenuItem my="1rem" onClick={() => handleLanguage("en-US")}>
          <Image width="20px" height="20px" src={imgEnglish} alt="english" />

          <Text as="span" ml="2rem">
            Ingles
          </Text>
        </MenuItem>

        <MenuItem onClick={() => handleLanguage("fr-FR")}>
          <Image width="20px" height="20px" src={imgFrance} alt="frace" />

          <Text as="span" ml="2rem">
            Frances
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Languages;
