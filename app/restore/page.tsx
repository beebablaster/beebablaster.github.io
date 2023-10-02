import RestoreForm from "../modules/Core/components/RestoreForm/index";
import {Flex} from "@chakra-ui/react";

export default function Restore() {
    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <RestoreForm/>
        </Flex>
    )
}