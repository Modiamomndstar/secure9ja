import React from 'react';
import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react';

const ReportIncidentScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Input placeholder="Location" />
                <Textarea placeholder="Describe the incident" />
                <Button colorScheme="blue">Submit Report</Button>
            </VStack>
        </Box>
    );
};

export default ReportIncidentScreen;
