import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ children }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <Box>
            {children}
            <Flex justify="space-around" position="fixed" bottom="0" width="100%" bg="white" p={3} boxShadow="md">
                <Link to="/home">
                    <Button variant={isActive('/home') ? 'solid' : 'ghost'} colorScheme="blue">Home</Button>
                </Link>
                <Link to="/safety-news">
                    <Button variant={isActive('/safety-news') ? 'solid' : 'ghost'} colorScheme="blue">Safety News</Button>
                </Link>
                <Link to="/profile-settings">
                    <Button variant={isActive('/profile-settings') ? 'solid' : 'ghost'} colorScheme="blue">Profile</Button>
                </Link>
            </Flex>
        </Box>
    );
};

export default Navigation;
