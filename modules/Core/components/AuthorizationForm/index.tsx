import {Button, Card, CardBody, Flex, Heading, Input, Link} from "@chakra-ui/react";
import NextLink from 'next/link'

export default function AuthorizationForm() {

    const isPasswordFieldShown = true
    return (
        <Card>
            <CardBody>
               <Flex direction='column' gap='32px'>
               <Heading>Enter your number:</Heading>
                   <Flex direction='column' gap='32px'>
                       <Flex direction='column' gap='12px'>
               <Input placeholder='+7 (777) 777 77 77'/>
               {isPasswordFieldShown && (
                   <Input placeholder='******'/>
               )}
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