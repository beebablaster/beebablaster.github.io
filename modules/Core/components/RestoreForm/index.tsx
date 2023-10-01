import {Button, Card, CardBody, Flex, Heading} from "@chakra-ui/react";
import InputForm from "../presentational/InputForm/index";

export default function RestoreForm() {

    const isPasswordFieldShown = true
    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Restore your password</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <InputForm heading={'Your number'} placeholder={'+7 (777) 777 77 77'}/>
                            {isPasswordFieldShown && (
                                <InputForm heading={'Enter a new password'} placeholder={'*******'}/>
                            )}
                        </Flex>
                            <Button>Restore</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}