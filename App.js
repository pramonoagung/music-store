// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const myApp = () => <Text> Some Text </Text>;

export default myApp;
// Render it to the device
AppRegistry.registerComponent('albums', () => myApp);
