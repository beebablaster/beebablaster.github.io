'use client'

import {
    Button,
    Card,
    CardBody,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input, InputGroup,
    InputRightElement,
    Link,
    Text
} from "@chakra-ui/react"
import NextLink from 'next/link'
import { useForm, Controller } from "react-hook-form"
import {useState} from "react"
import { useRouter } from "next/navigation";
import {useStore} from "react-redux";

export default function AuthorizationForm() {
    const [show, setShow] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberExists, setNumberExists] = useState(false)
    const [passwordExists, setPasswordExists] = useState(false)
    const store = useStore()
    const accounts = store.getState().authReducer.value

    const router = useRouter()
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = (values: any) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
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

    const numberExistsInRedux = (phoneNumber) => {
        const existsInStore = accounts.some((account) => account.number === phoneNumber);

        const validFormat = /\+\d\s\([0-9]+\)\s[0-9]+\s[0-9]+\s\d\d/i.test(phoneNumber);
        setNumberExists(existsInStore)
        return existsInStore && validFormat;
    };

    const passwordExistsInRedux = (password) => {
        const existsInStore = accounts.some((account) => account.password === password);

        setPasswordExists(existsInStore)
        return existsInStore;
    };

    return (
        <Card>
            <CardBody>
               <Flex direction='column' gap='32px'>
               <Heading>Sign in</Heading>
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
                                           validate: numberExistsInRedux
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
                           {!errors.number && (
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
                                                      validate: passwordExistsInRedux
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
                           )}
                       </Flex>

                       <Flex justifyContent='space-between' gap='64px'>
                       <Link as={NextLink} href='/restore'>
                           Forgot your password?
                       </Link>
                           {(!errors.number && numberExists && passwordExists) ? <Button type='submit' colorScheme='teal'>Login</Button> :
                               <Button type='submit' colorScheme='teal' onClick={() => router.push('/register')}>Register</Button>}
                       </Flex>
                   </Flex>
                   </form>
               </Flex>
            </CardBody>
        </Card>
    )
}