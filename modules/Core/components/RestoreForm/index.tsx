import {Button, Card, CardBody, Flex, Heading, Input} from "@chakra-ui/react";

export default function RestoreForm() {

    const isPasswordFieldShown = true
    return (
        <Card>
            <CardBody>
                <Flex direction='column' gap='32px'>
                    <Heading>Restore password</Heading>
                    <Flex direction='column' gap='32px'>
                        <Flex direction='column' gap='12px'>
                            <Input placeholder='+7 (777) 777 77 77'/>
                            {isPasswordFieldShown && (
                                <Input placeholder='******'/>
                            )}
                        </Flex>
                            <Button>Restore</Button>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}