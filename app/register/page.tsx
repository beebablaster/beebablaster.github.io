import RegistrationForm from "../modules/Core/components/RegistrationForm/index";
import {Flex} from "@chakra-ui/react";

export default function Register() {
    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
        <RegistrationForm/>
        </Flex>
    )
}