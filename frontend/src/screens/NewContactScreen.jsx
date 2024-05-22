import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const NewContactScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Input placeholder="Name" />
                <Input placeholder="Phone Number" />
                <Button colorScheme="blue">Save Contact</Button>
            </VStack>
        </Box>
    );
};

export default NewContactScreen;
