import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import Map from '../components/Map';
import MapComponent from '../components/MapComponent';

const HomeScreen = () => {
    return (
        <Box>
            <Map />
            <MapComponent />
            <Box p={5}>
                <VStack spacing={4}>
                    <Button colorScheme="blue">Emergency Contacts</Button>
                    <Button colorScheme="blue">Safety News</Button>
                    <Button colorScheme="blue">Report an Incident</Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default HomeScreen;
