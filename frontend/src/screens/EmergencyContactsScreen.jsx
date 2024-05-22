import React from 'react';
import { Box, VStack, Button } from '@chakra-ui/react';
import ContactList from '../components/ContactList';

const contacts = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '987-654-3210' },
];

const EmergencyContactsScreen = () => {
    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Button colorScheme="blue">Add New Contact</Button>
                <ContactList contacts={contacts} />
            </VStack>
        </Box>
    );
};

export default EmergencyContactsScreen;
