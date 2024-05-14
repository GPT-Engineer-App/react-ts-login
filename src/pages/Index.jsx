import React, { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, Heading, Text, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">
          Login
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement>
              <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handleShowClick} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
