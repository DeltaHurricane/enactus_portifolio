import { VStack, Link } from "@chakra-ui/react";

export function Footer() {
  return (
    <VStack
      as={"footer"}
      gridArea="footer"
      color={"blue.500"}
      justifyContent={"center"}
      fontWeight={"bold"}
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
