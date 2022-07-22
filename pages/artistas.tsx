import type { NextPage } from "next";
import { Box, Flex, Image, Button, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

let teste: ReactElement[] = [];
for (var i = 0; i < 9; i++) {
  teste.push(<Caxa />);
}

const Artistas: NextPage = () => {
  return (
    <>
      <Box w="100%" minH="100vh" top={0} gridArea={"main"}>
        <Flex
          gap={[3, 1]}
          w="100%"
          h="100%"
          justifyContent={"center"}
          py={["90px", 14]}
          px={6}
          flexWrap={"wrap"}
        >
          {teste}
        </Flex>
      </Box>
    </>
  );
};

export default Artistas;

function Caxa() {
  return (
    <Box w={["80%", "35vw"]} h={["286.88px", "30vh"]} overflow={"hidden"}>
      <Box
        w={"100%"}
        h={"100%"}
        bg={"url(ronaldinho2.webp) center/cover no-repeat"}
        _hover={{ transform: "scale(1.05)" }}
        transition={"transform 1s linear 0s"}
        position={"relative"}
      >
        <Box
          w={"100%"}
          h={"100%"}
          position={"relative"}
          color={"white"}
          _hover={{
            transform: "scale(1.05)",
            _before: { opacity: 1 },
            _after: { opacity: 1, transform: "scale(1.05)" },
          }}
          _before={{
            content: `""`,
            opacity: 0,
            background: "rgba(0, 0, 0, 0.33)",
            width: "100%",
            height: "100%",
            position: "absolute",
            transition: "opacity 1s linear 0s",
          }}
          _after={{
            content: `"Bruxo"`,
            position: "absolute",
            opacity: 0,
            bottom: "20%",
            left: "20%",
            color: "white",
            fontSize: ["18px", "22px"],
            lineHeight: "110%",
            transition: "transform 1s linear 0s",
          }}
        ></Box>

        {/* <VStack
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          top={0}
          left={0}
          bg={"transparent"}
          opacity={0.35}
          _hover={{ bg: "black" }}
          transition={"background 1s ease 0s"}
          color={"white"}
        ></VStack> */}
      </Box>

      {/* <Button colorScheme="yellow" size="sm" w={"90px"}>
          Bruxo
        </Button> */}
    </Box>
  );
}
