import { ChakraProvider, Flex } from "@chakra-ui/react";
import AuthorizationForm from "../modules/Core/components/AuthorizationForm/index";

export default function Home() {
  return (
      <ChakraProvider>
          <Flex height='100vh' alignItems='center' justifyContent='center'>
        <AuthorizationForm/>
          </Flex>
      </ChakraProvider>
  )
}
