'use client'

import {
    Button,
    Card,
    CardBody,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input, InputGroup, InputRightElement,
    Text
} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {signUp} from "../../../../../redux/features/auth-slice";
import {AppDispatch} from "../../../../../redux/store";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function RegistrationForm() {
    const dispatch = useDispatch<AppDispatch>()
    const [show, setShow] = useState(false)
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    console.log(isValid)

    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Sign up</Heading>
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
                                               pattern: /\+\d\s\([0-9]+\)\s[0-9]+\s[0-9]+\s[0-9]+/i,
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
                                <Text>Your name</Text>
                                <FormControl isInvalid={errors.name}>
                                    <Input id='name'
                                           placeholder='Your name'
                                           {...register('name', {
                                               required: 'Name is required',
                                               pattern: /^[a-z ,.'-]+$/i,
                                               minLength: { value: 2, message: 'Name must be at least 2 characters long' },
                                           })}
                                    />
                                    <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Your Email</Text>
                                <FormControl isInvalid={errors.email}>
                                    <Input id='email'
                                           placeholder='Your Email'
                                           {...register('email', {
                                               required: 'Email is required',
                                               pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                               minLength: { value: 3, message: 'Email must be of the following format: hello@example.com' },
                                           })}
                                    />
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex direction='column' gap='4px'>
                                <Text>Your password</Text>
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
                        <Flex justifyContent='space-between' gap='64px'>
                            <Checkbox isChecked={checkboxIsClicked} whiteSpace='wrap' onChange={() => setCheckboxIsClicked(!checkboxIsClicked)}>
                                 I agree to having my  <br />personal data processed
                            </Checkbox>
                            {(isValid && checkboxIsClicked) ? <Button type='submit' colorScheme='teal'>Register</Button> :
                                <Button type='submit' disabled={true}>Register</Button>}
                        </Flex>
                    </Flex>
                    </form>
                </Flex>
            </CardBody>
        </Card>
    )
}