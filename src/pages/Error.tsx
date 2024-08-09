import { Link } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";

import { useAuth } from "../contexts/Auth";

const ErrorPage = () => {
  const { user } = useAuth();

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Text fontSize="xl" fontWeight="semibold">
        Halaman tidak ditemukan.
      </Text>
      <Text
        fontSize="xl"
        color="gray.500"
        textDecoration="underline"
        cursor="pointer"
      >
        <Link to={user ? "/chat" : "/login"}> Silahkan kembali</Link>
      </Text>
    </Flex>
  );
};

export default ErrorPage;
