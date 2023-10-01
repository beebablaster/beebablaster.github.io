import {Button, Card, CardBody, Checkbox, Flex, Heading, Input} from "@chakra-ui/react";

export default function RegistrationForm() {
    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Enter your number:</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <Input placeholder='+7 (777) 777 77 77'/>
                            <Input placeholder='Damir'/>
                            <Input placeholder='damirsyzdykov@gmail.com'/>
                            <Input placeholder='******'/>
                        </Flex>
                        <Flex justifyContent='space-between'>
                            <Checkbox whiteSpace='wrap'>I agree to having my personal data processed</Checkbox>
                            <Button>Register</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}