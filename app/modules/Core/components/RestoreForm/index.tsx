'use client'

import {Button, Card, CardBody, Flex, Heading, Input, Text} from "@chakra-ui/react";
import {useState} from "react";

export default function RestoreForm() {
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const isPasswordFieldShown = true
    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Restore your password</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <Flex direction='column' gap='4px'>
                                <Text>Your number</Text>
                                <Input onChange={(e) => setNumber(e.target.value)} placeholder='+7 (777) 777 77 77'/>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Enter a new password</Text>
                                <Input onChange={(e) => setPassword(e.target.value)} placeholder='*******'/>
                            </Flex>
                        </Flex>
                            <Button>Restore</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}