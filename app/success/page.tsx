import {Flex, Heading, Link} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Success() {
    return (
        <Flex direction='column' height='100vh' alignItems='center' justifyContent='center' gap='64px'>
            <Heading> Logged in successfully! </Heading>
            <Link as={NextLink} href='/'>Go back</Link>
        </Flex>
    )
}