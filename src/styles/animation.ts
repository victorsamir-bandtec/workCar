import { motion } from "framer-motion";
import {
  Flex,
  Box,
  FlexProps,
  BoxProps,
  VStack,
  StackProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  LinkProps,
  Link,
} from "@chakra-ui/react";

export const animationMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

export const itenXL = {
  hidden: { x: -700, opcity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const itenXR = {
  hidden: { opcity: 0, x: 700 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const FlexMotion = motion<FlexProps>(Flex);
export const BoxMotion = motion<BoxProps>(Box);
export const VStackMotion = motion<StackProps>(VStack);
export const HeadingMotion = motion<HeadingProps>(Heading);
export const TextMotion = motion<TextProps>(Text);
export const LinkMotion = motion<LinkProps>(Link);
