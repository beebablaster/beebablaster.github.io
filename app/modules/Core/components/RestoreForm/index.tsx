'use client'

import {
    Button,
    Card,
    CardBody,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input,
    InputGroup, InputRightElement, Link,
    Text
} from "@chakra-ui/react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RestoreForm() {
    const [show, setShow] = useState(false)
    const router = useRouter()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const onSubmit = (values) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                router.push('/')
                resolve()
            }, 3000)
        })
    }

    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Restore your password</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='16px'>
                            <Flex direction='column' gap='4px'>
                                <Text>Your number</Text>
                                <FormControl isInvalid={errors.number}>
                                    <Input id='number'
                                           placeholder='+7 (777) 777 77 77'
                                           {...register('number', {
                                               required: 'Phone number is required',
                                               pattern: {
                                                   value: /\+\d\s\([0-9]+\)\s[0-9]+\s[0-9]+\s\d\d/i,
                                                   message: 'Invalid number format',
                                               },
                                               minLength: { value: 11, message: 'Number must be of the following format: +7 (777) 777 77 77' },
                                               maxLength: { value: 18, message: 'Number must be of the following format: +7 (777) 777 77 77'},
                                           })}
                                    />
                                    <FormErrorMessage>
                                        {errors.number && errors.number.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Enter a new password</Text>
                                <FormControl isInvalid={errors.password}>
                                    <InputGroup>
                                        <Input id='password'
                                               placeholder='Enter password'
                                               type={show ? 'text' : 'password'}
                                               {...register('password', {
                                                   required: 'Password is required',
                                                   minLength: { value: 5, message: 'Your password must be at least 5 characters long' },
                                               })}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button size='xs' onClick={() => setShow(!show)}>
                                                {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.password && errors.password.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                        </Flex>
                            <Button type='submit' colorScheme='teal'>
                                Restore
                            </Button>
                    </Flex>
                    </form>
                </Flex>
            </CardBody>
        </Card>
    )
}