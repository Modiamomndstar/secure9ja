import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const WelcomeScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />
                <Button colorScheme="blue">Log In</Button>
                <Button variant="link">Create an Account</Button>
            </VStack>
        </Box>
    );
};

export default WelcomeScreen;
