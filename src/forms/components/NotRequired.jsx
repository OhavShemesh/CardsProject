import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import Input from './Input';

export default function NotRequired({ name, label, error, onChange, data, sm, required }) {
    const [clicked, setClicked] = useState(false);

    const handleNotRequired = () => {
        if (clicked) {
            return (
                <Input
                    name={name}
                    label={label}
                    error={error}
                    onChange={onChange}
                    data={data}
                    sm={sm}
                    required={required}
                />
            );
        } else {
            return (
                <Container>
                    <Button onClick={() => setClicked(true)}>+ {label} (Not Required) </Button>
                </Container>
            );
        }
    };

    return handleNotRequired();
}
