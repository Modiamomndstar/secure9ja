import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import VerificationScreen from './screens/VerificationScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen';
import SafetyNewsScreen from './screens/SafetyNewsScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';
import ReportIncidentScreen from './screens/ReportIncidentScreen';
import EmergencyContactsScreen from './screens/EmergencyContactsScreen';
import NewContactScreen from './screens/NewContactScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import Navigation from './components/Navigation';
const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
  },
  {
    path: '/verification',
    element: <VerificationScreen />,
  },
  {
    path: '/create-account',
    element: <CreateAccountScreen />,
  },
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/home',
        element: <HomeScreen />,
      },
      {
        path: '/safety-news',
        element: <SafetyNewsScreen />,
      },
      {
        path: '/profile-settings',
        element: <ProfileSettingsScreen />,
      },
      {
        path: '/report-incident',
        element: <ReportIncidentScreen />,
      },
      {
        path: '/emergency-contacts',
        element: <EmergencyContactsScreen />,
      },
      {
        path: '/new-contact',
        element: <NewContactScreen />,
      },
      {
        path: '/edit-profile',
        element: <EditProfileScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />

    </ChakraProvider>
  );
}

export default App;
