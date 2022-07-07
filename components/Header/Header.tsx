import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
  Box,
  Image,
  Center,
  Flex,
  Square,
  Text,
  HStack,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useShadow } from "./hooks";

export function Header(): ReactElement {
  const shadow = useShadow();
  return (
    <Box
      as={"header"}
      gridArea={"header"}
      position={"fixed"}
      bg={["transparent", "white"]}
      width={"100%"}
      h={"60px"}
      shadow={[
        "none",
        shadow
          ? "0px 12px 4px -5px rgba(0,0,0,0.4)"
          : "0px 0px 0px 0px rgba(0,0,0,0)",
      ]}
      transition={"box-shadow 0.2s ease 0s"}
    >
      <Show above="sm">
        <Image
          position={"absolute"}
          h="50px"
          left={5}
          top={1}
          src="logo_e_nome.png"
          alt="Enactus"
        />
        <HStack
          spacing="24px"
          alignItems={"center"}
          h={"100%"}
          justifyContent={"center"}
        >
          <Button colorScheme="yellow" size="sm" w={"90px"}>
            Home
          </Button>
          <Button colorScheme="yellow" size="sm" w={"90px"}>
            Sobre nós
          </Button>
          <Button colorScheme="yellow" size="sm" w={"90px"}>
            Portfólios
          </Button>
          <Button colorScheme="yellow" size="sm" w={"90px"}>
            Contato
          </Button>
        </HStack>
      </Show>

      <Hide above="sm">
        <Menu>
          <MenuButton
            gridRowEnd={1}
            as={IconButton}
            colorScheme="transparent"
            aria-label="Toggle menu"
            background={"#0332dd29"}
            borderRadius={"15px"}
            w={"60px"}
            h={"60px"}
            icon={
              <Image
                background={"transparent"}
                boxSize="40px"
                left={5}
                top={1}
                src="logo.png"
                alt="Enactus"
              />
            }
            left={3}
            top={3}
            zIndex={1}
          ></MenuButton>
          <MenuList>
            <MenuItem minH="40px">Home</MenuItem>
            <MenuItem minH="40px">Sobre nós</MenuItem>
            <MenuItem minH="40px"> Portfólios</MenuItem>
            <MenuDivider />
            <MenuItem minH="40px"> Contato</MenuItem>
          </MenuList>
        </Menu>
      </Hide>
    </Box>
  );
}
