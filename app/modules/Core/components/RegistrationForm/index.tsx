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
import {AuthState} from "../../../../../redux/features/auth-slice";
import {AppDispatch} from "../../../../../redux/store";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
    const dispatch = useDispatch<AppDispatch>()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [show, setShow] = useState(false)
    const [checkboxIsClicked, setCheckboxIsClicked] = useState(false)
    const router = useRouter()

    const {
        handleSubmit,
        register,
        control,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = (values) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const payload = values as AuthState
                dispatch(signUp(payload))
                router.push('/success')
                resolve()
            }, 1000)
        })
    }

    const formatPhoneNumber = (input) => {
        const numericInput = input.replace(/\D/g, '');

        let formattedNumber = '+';
        for (let i = 0; i < numericInput.length; i++) {
            if (i === 1 || i === 4 || i === 7 || i === 9) {
                if(i === 4) {
                    formattedNumber += ')'
                }
                formattedNumber += ' ';
                if(i === 1) {
                    formattedNumber += '('
                }
            }
            formattedNumber += numericInput[i];
        }

        return formattedNumber;
    };

    const handleChange = (event) => {
        const input = event.target.value;
        const formattedValue = formatPhoneNumber(input).substring(0, 18);
        setPhoneNumber(formattedValue);
        event.target.value = formattedValue;
    };

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
                                    <Controller
                                        name='number'
                                        control={control}
                                        defaultValue=''
                                        rules={{
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /\+\d\s\([0-9]+\)\s[0-9]+\s[0-9]+\s\d\d/i,
                                                message: 'Invalid number format',
                                            },
                                            minLength: { value: 11, message: 'Number must be of the following format: +7 (777) 777 77 77' },
                                            maxLength: { value: 18, message: 'Number must be of the following format: +7 (777) 777 77 77'},
                                        }}
                                        render={({ field }) => (
                                            <Input {...field} placeholder='+7 (777) 777 77 77' onChange={(e) => {
                                                handleChange(e)
                                                field.onChange(e)
                                            }}/>
                                        )}/>
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
                                               pattern: {
                                                   value: /^[a-z ,.'-]+$/i,
                                                   message: 'Invalid name format'
                                               },
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
                                               pattern: {
                                                   value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                                   message: 'Invalid Email format'
                                               },
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