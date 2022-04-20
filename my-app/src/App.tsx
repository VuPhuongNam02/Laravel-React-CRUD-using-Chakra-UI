import * as React from "react";
import { ChakraProvider, Box, VStack, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Student from "./student";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Logo h="10vmin" pointerEvents="none" />
      </VStack>
      <Student />
    </Box>
  </ChakraProvider>
);
