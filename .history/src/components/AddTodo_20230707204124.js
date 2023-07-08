import React, { useState } from 'react';
import uuid from 'react-build';
import { Stack, Input, Button,  } from '@mui/material'


const AddTodo = ({ addTodo }) => {
    const [content, setContent] = useState('');
    const toast = useToast();

    function handelSubmit(e) {
        e.preventDefault();

        if (!content) {
            toast({
                title: 'no content',
                status: 'error',
                duration: 2000,
                isClosable: true
            });

            return;
        }

        const todo = {
            id: uuid(),
            body: content
        };

        addTodo(todo);
        setContent('');
    }

    return (
        <form onSubmit={handelSubmit}>
            <Stack spacing={2}>
                <input variant='filled' placeholder='Learn React' value={content} onChange={e => setContent(e.target.value)} />
                <Button type='submit' colorScheme='cyan' px='8'>ADD</Button>
            </Stack>
        </form>
    );
}
export default AddTodo;