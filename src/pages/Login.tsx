import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { useAuth } from "../contexts/Auth";

const LoginPage = () => {
  const { user, login } = useAuth();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (password === "abc123") {
      const id = Math.floor(Math.random() * 1000) + 1;
      login({
        id,
        email,
        name: `User ${id}`,
      });
    } else {
      setShowAlert(true);
    }
  };

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <Flex height="100vh">
      <Box flex="1" h="100%" bgColor="blue"></Box>
      <Box flex="1" h="100%" alignContent="center">
        <Box maxWidth="80%" m="auto" as="form" onSubmit={handleSubmit}>
          <Text fontSize="3xl" fontWeight="bold">
            Login ke akunmu
          </Text>
          <Text mt="1" mb="12">
            Masuk akun untuk menggunakan PituChat
          </Text>
          <FormControl id="email" isRequired>
            <FormLabel mb="0">Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.600" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setShowAlert(false)}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel mb="0" mt="5">
              Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.600" />
              </InputLeftElement>
              <Input
                type={showPassword ? "text" : "password"}
                isRequired
                placeholder="Password"
                pr="10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setShowAlert(false)}
              />
              <InputRightElement width="10">
                {showPassword ? (
                  <ViewOffIcon
                    color="gray.600"
                    cursor="pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <ViewIcon
                    color="gray.600"
                    cursor="pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <FormHelperText
              display="flex"
              justifyContent="flex-end"
              mt="0"
              cursor="pointer"
            >
              Lupa password?
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            width="100%"
            my="5"
            isDisabled={!email || !password || showAlert}
          >
            Masuk
          </Button>
          {showAlert ? (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>Email / password Anda salah!</AlertDescription>
            </Alert>
          ) : (
            <Box height="12" />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
