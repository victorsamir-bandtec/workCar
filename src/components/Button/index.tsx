import React from "react";

import { ButtonProps, Button as Buttons } from "@chakra-ui/react";

interface Props {
  colorTheme: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

const Button = ({ children, colorTheme, onClick }: Props & ButtonProps) => {
  return (
    <>
      <Buttons
        onClick={onClick}
        p="2rem 3.2rem"
        fontSize="md"
        borderRadius="0.5rem"
        borderColor={colorTheme}
        border="1px solid"
        letterSpacing="0.3rem"
        color={colorTheme}
        bg="transparent"
      >
        {children}
      </Buttons>
    </>
  );
};

export default Button;
