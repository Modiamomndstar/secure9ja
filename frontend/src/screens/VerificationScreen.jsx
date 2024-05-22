import React from 'react';
import { Box, Button, Input, VStack, HStack } from '@chakra-ui/react';

const VerificationScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <HStack>
                    <Input placeholder="0" maxLength={1} />
                    <Input placeholder="0" maxLength={1} />
                    <Input placeholder="0" maxLength={1} />
                    <Input placeholder="0" maxLength={1} />
                </HStack>
                <Button colorScheme="blue">Verify</Button>
            </VStack>
        </Box>
    );
};

export default VerificationScreen;
