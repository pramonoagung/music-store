// Import a library to help create a component
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

// Create a component
const myApp = () => <Header />;

export default myApp;
// Render it to the device
AppRegistry.registerComponent("albums", () => myApp);
