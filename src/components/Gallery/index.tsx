import { Flex, Box } from "@chakra-ui/react";

import {
  FlexMotion,
  BoxMotion,
  animationMotion,
  VStackMotion,
  HeadingMotion,
  TextMotion,
  itenXL,
  itenXR,
} from "styles/animation";

const Gallery: React.FC = () => {
  return (
    <BoxMotion initial="hidden" animate="visible" variants={animationMotion}>
      <Flex h="24rem" justify="space-between" mt="4rem">
        <BoxMotion
          w="39rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXL}
          bgImage="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />

        <BoxMotion
          w="39rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXL}
          bgImage="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

        <BoxMotion
          w="39rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXL}
          bgImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </Flex>

      <Flex w="95%" h="16rem" m="2rem auto" justify="space-around">
        <BoxMotion
          w="27rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXR}
          bgImage="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />

        <BoxMotion
          w="27rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXR}
          bgImage="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

        <BoxMotion
          w="27rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXR}
          bgImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

        <BoxMotion
          w="27rem"
          borderRadius="1rem"
          boxShadow="base"
          bgPos="center"
          bgSize="cover"
          variants={itenXR}
          bgImage="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </Flex>
    </BoxMotion>
  );
};

export default Gallery;
