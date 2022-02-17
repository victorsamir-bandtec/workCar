import React from "react";

import { ButtonProps, Button as Buttons } from "@chakra-ui/react";

interface Props {
  colorTheme: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  secundary?: boolean;
}

const Button = ({
  children,
  colorTheme,
  onClick,
  secundary,
}: Props & ButtonProps) => {
  return (
    <>
      {secundary ? (
        <Buttons
          onClick={onClick}
          p="2rem 3.2rem"
          fontSize="md"
          borderRadius="0.5rem"
          borderColor={colorTheme}
          border="1px solid"
          letterSpacing="0.3rem"
          boxShadow="4px 8px 19px -3px rgba(0,0,0,0.27)"
          color={colorTheme}
          bg="transparent"
        >
          {children}
        </Buttons>
      ) : (
        <Buttons
          className="btn"
          position="relative"
          onClick={onClick}
          p="2rem 3.2rem"
          fontSize="md"
          borderRadius="0.5rem"
          border="unset"
          letterSpacing="0.3rem"
          boxShadow="4px 8px 19px -3px rgba(0,0,0,0.27)"
          zIndex="1"
          color="#fff"
          bg={colorTheme}
        >
          {children}
        </Buttons>
      )}
    </>
  );
};

export default Button;
