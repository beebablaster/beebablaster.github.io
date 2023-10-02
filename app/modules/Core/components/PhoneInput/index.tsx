import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

export interface Props {
    placeholder: string
}

export default function PhoneInput({placeholder}: Props) {
    const [phoneNumber, setPhoneNumber] = useState('');

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
    };

    return (
        <Input
            placeholder={placeholder}
            value={phoneNumber}
            onChange={handleChange}
        />
    );
}