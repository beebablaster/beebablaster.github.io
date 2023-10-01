import {Button, Card, CardBody, Flex, Heading, Link} from "@chakra-ui/react";
import NextLink from 'next/link'
import InputForm from "../presentational/InputForm/index";

export default function AuthorizationForm() {

    const isPasswordFieldShown = true
    return (
        <Card>
            <CardBody>
               <Flex direction='column' gap='32px'>
               <Heading>Sign in</Heading>
                   <Flex direction='column' gap='32px'>
                       <Flex direction='column' gap='16px'>
                           <InputForm heading={'Your number'} placeholder={'+7 (777) 777 77 77'}/>
                           {isPasswordFieldShown && <InputForm heading={'Your password'} placeholder={'*******'}/>}
                       </Flex>
                       <Flex justifyContent='space-between'>
                       <Link as={NextLink} href='/restore'>
                           Forgot your password?
                       </Link>
                           <Button>Login</Button>
                       </Flex>
                   </Flex>
               </Flex>
            </CardBody>
        </Card>
    )
}