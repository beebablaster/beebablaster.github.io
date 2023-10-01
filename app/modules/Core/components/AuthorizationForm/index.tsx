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

export default function AuthorizationForm() {
    const [show, setShow] = useState(false)

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
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
                                       defaultValue=""
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
                                           <Input {...field} placeholder='+7 (777) 777 77 77' />
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
                           {!errors.number ? <Button type='submit' colorScheme='teal'>Login</Button> :
                               <Button type='submit' colorScheme='teal'>Register</Button>}
                       </Flex>
                   </Flex>
                   </form>
               </Flex>
            </CardBody>
        </Card>
    )
}