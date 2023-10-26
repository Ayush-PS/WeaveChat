import { Avatar, Box, Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2x1"} fontWeight={"bold"}>AyushP</Text>
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={"sm"}>AyushP</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              WeaveChat.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="AyushP" src="/kemem88c.bmp" size={"xl"}></Avatar>
        </Box>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
