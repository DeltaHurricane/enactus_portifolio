import { VStack, Link } from "@chakra-ui/react";

export function Footer() {
  return (
    <VStack
      as={"footer"}
      gridArea="footer"
      color={"blue.800"}
      justifyContent={"center"}
      textDecoration={"underline"}
      fontSize={"16px"}
      boxShadow={"0px 0px 4px 4px rgba(0,0,0,0.31)"}
    >
      <Link
        href="https://www.instagram.com/enactus.ufesvitoria/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enactus UFES Vitória
      </Link>
      <Link
        href="https://www.instagram.com/a_faelo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        FAELO
      </Link>
    </VStack>
  );
}
