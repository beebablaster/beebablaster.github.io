import {Button, Card, CardBody, Checkbox, Flex, Heading} from "@chakra-ui/react";
import InputForm from "../presentational/InputForm/index";

export default function RegistrationForm() {
    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Sign up</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <InputForm heading={'Your number'} placeholder={'+7 (777) 777 77 77'}/>
                            <InputForm heading={'Your name'} placeholder={'Damir'}/>
                            <InputForm heading={'Your Email'} placeholder={'damirsyzdykov96@gmail.com'}/>
                            <InputForm heading={'Your password'} placeholder={'*******'}/>
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