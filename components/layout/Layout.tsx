import { ReactElement } from "react";
import Head from "next/head";
import {
  IconButton,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Footer } from "../Footer";

interface LayoutProps {
  children: ReactElement;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Enactus - Faelo</title>
        <meta name="descrição" content="Site da Faelo" />
        <link rel="icon" href="/favicon_ico.webp" />
      </Head>
      <Grid
        templateAreas={`"main"
                        "main"
                        "footer"`}
        gridTemplateRows={"40px 1fr 10vh"}
      >
        <Menu>
          <MenuButton
            gridArea={"main"}
            gridRowEnd={1}
            as={IconButton}
            colorScheme="blue"
            aria-label="Toggle menu"
            variant="outline"
            w={"50px"}
            h={"50px"}
            icon={<HamburgerIcon />}
            position={"sticky"}
            left={2}
            top={2}
            zIndex={1}
          ></MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre nós</MenuItem>
            <MenuItem>Portfólios</MenuItem>
          </MenuList>
        </Menu>

        {children}

        <Footer />
      </Grid>
    </>
  );
}
