import {Flex, Text, Input} from "@chakra-ui/react";

export interface Props {
    heading: string
    placeholder: string
}

export default function InputForm({heading, placeholder}: Props) {
    return (
        <Flex direction='column' gap='4px'>
            <Text>{heading}</Text>
                <Input placeholder={placeholder}/>
        </Flex>
    )
}