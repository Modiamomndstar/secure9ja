import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const CreateAccountScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Input placeholder="Full Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />
                <Button colorScheme="blue">Create Account</Button>
            </VStack>
        </Box>
    );
};

export default CreateAccountScreen;
