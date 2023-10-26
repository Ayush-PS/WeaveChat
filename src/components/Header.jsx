import { Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={"6"} mb={"12"}>
      <Image
        cursor={"pointer"}
        src={colorMode === "dark" ? "/light-logo-1.svg" : "/dark-logo.svg"}
        alt={"Logo"}
        w={16}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
