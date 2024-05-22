import React from 'react';
import { List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';

const ContactList = ({ contacts }) => {
    return (
        <List spacing={3}>
            {contacts.map((contact, index) => (
                <ListItem key={index}>
                    <ListIcon as={MdPerson} color="blue.500" />
                    {contact.name} - {contact.phone}
                    <Button variant="link" colorScheme="blue" ml={4}>Edit</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default ContactList;
