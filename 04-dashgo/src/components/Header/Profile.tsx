import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Ericlys Moreira</Text>
      <Text color="gray.300" fontSize="small">
        ericlysm@gmail.com
      </Text>
    </Box>

    <Avatar size="md" name="Ericlys Moreira" src="https://github.com/ericlys.png"/>

  </Flex>
  )
}