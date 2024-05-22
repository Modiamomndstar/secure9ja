import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const EditProfileScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Input placeholder="Full Name" />
                <Input placeholder="Email" />
                <Button colorScheme="blue">Save Changes</Button>
            </VStack>
        </Box>
    );
};

export default EditProfileScreen;
