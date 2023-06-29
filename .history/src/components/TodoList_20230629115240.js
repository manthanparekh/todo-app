import React from 'react'; 


const TodoList = ({ todos, deleteItem }) => {
    if (!todos.length) {
        return (
            <Ba
        );
    }

    return (
        <VStack divider={<StackDivider />} borderWidth='2px' bordorColor='gray.100' bordorRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>
            {todos.map(todo => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon{} isRound='true' onClick={() => deleteTodo(todo.id)}
                </HStack>
            ))}
        </VStack>
    )
}