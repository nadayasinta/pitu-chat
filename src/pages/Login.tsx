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
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import BackgroundImage from "../assets/background-login.svg";
import { useAuth } from "../contexts/Auth";
import { login } from "../mock";

const LoginPage = () => {
  const { user, setUser } = useAuth();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userData = login(email, password);
    if (userData) {
      setUser(userData);
    } else {
      setShowAlert(true);
    }
  };

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <Flex height="100vh">
      <Box flex="1" h="100%" bgColor="blue">
        <Image
          src={BackgroundImage}
          alt="Background"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Box flex="1" h="100%" alignContent="center">
        <Box maxWidth="80%" m="auto" as="form" onSubmit={handleSubmit}>
          <Image
            src="/logo.svg"
            alt="PituChat Logo"
            width="15"
            objectFit="cover"
          />
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
                <EmailIcon />
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
                <LockIcon />
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
                    cursor="pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <ViewIcon
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
