import type { NextPage } from "next";
import { Box, VStack, Image, Text, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Box
        gridArea={"main"}
        w="100%"
        overflow={"hidden"}
        h={["100vh", "100vh"]}
        bg={"url(bg.png) center/cover no-repeat"}
        filter="auto"
        blur="3px"
        brightness="70%"
        zIndex={-1}
        top={0}
      />

      <Box w="100%" h="100vh" bg={"transparent"} top={0} gridArea={"main"}>
        <VStack
          gap={4}
          w="100%"
          h="100%"
          justifyContent={"center"}
          p={4}
          fontWeight={"bold"}
        >
          <Image
            borderRadius="full"
            boxSize={["150px", "350px", "400px"]}
            src="/logoFaelo.png"
            alt="logo da Faelo"
            alignItems={"center"}
          />
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={["18px", "22px"]}
            lineHeight="110%"
          >
            texto super legal que vai ser passado bla bla bla
          </Text>
          <Button bgColor={"yellow.400"} _hover={{ bgColor: "blue.200" }}>
            Conheça nossos artistas
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
