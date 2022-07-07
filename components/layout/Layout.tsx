import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import {
  IconButton,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Footer } from "../Footer";
import { Header } from "../Header";

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
        <link rel="icon" href="/logo.png" />
      </Head>
      <Grid
        templateAreas={[
          `             "main"
                        "footer"`,
          `"header"
                        "main"
                        "footer"`,
        ]}
        gridTemplateRows={["1fr 10vh", "60px 1fr 10vh"]}
      >
        <Header />
        {children}
        <Footer />
      </Grid>
    </>
  );
}
