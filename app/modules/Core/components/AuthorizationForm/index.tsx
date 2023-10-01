'use client'

import {Button, Card, CardBody, Flex, Heading, Input, Link, Text} from "@chakra-ui/react";
import NextLink from 'next/link'
import {useState} from "react";

export default function AuthorizationForm() {
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Card>
            <CardBody>
               <Flex direction='column' gap='32px'>
               <Heading>Sign in</Heading>
                   <Flex direction='column' gap='32px'>
                       <Flex direction='column' gap='16px'>
                           <Flex direction='column' gap='4px'>
                               <Text>Your number</Text>
                               <Input onChange={(e) => setNumber(e.target.value)} placeholder='+7 (777) 777 77 77'/>
                           </Flex>
                           <Flex direction='column' gap='4px'>
                               <Text>Your password</Text>
                               <Input onChange={(e) => setPassword(e.target.value)} placeholder='*******'/>
                           </Flex>
                       </Flex>
                       <Flex justifyContent='space-between' gap='64px'>
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