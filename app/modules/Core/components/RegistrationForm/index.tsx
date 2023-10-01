'use client'

import {Button, Card, CardBody, Checkbox, Flex, Heading, Input, Text} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {signUp} from "../../../../../redux/features/auth-slice";
import {AppDispatch} from "../../../../../redux/store";
import {useState} from "react";

export default function RegistrationForm() {
    const dispatch = useDispatch<AppDispatch>()
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false)

    const onRegistrationFormSubmit = () => {
        const payload = {
            isAuth: true,
            number: number,
            password: password,
            name: name,
            email: email
        }
        dispatch(signUp(payload))
    }

    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Sign up</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <Flex direction='column' gap='4px'>
                                <Text>Your number</Text>
                                <Input onChange={(e) => setNumber(e.target.value)} placeholder='+7 (777) 777 77 77'/>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Your name</Text>
                                <Input onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Your Email</Text>
                                <Input onChange={(e) => setEmail(e.target.value)} placeholder='damirsyzdykov@gmail.com'/>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Your password</Text>
                                <Input onChange={(e) => setPassword(e.target.value)} placeholder='*******'/>
                            </Flex>
                        </Flex>
                        <Flex justifyContent='space-between' gap='64px'>
                            <Checkbox isChecked={checkboxIsClicked} whiteSpace='wrap' onChange={() => setCheckboxIsClicked(!checkboxIsClicked)}>
                                 I agree to having my  <br />personal data processed
                            </Checkbox>
                            <Button onClick={onRegistrationFormSubmit}>Register</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}