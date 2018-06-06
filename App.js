// Import a library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create a component
const myApp = () => (
  <View>
    <Header headerTitle={"Album"} />
    <AlbumList />
  </View>
);
export default myApp;
// Render it to the device
AppRegistry.registerComponent("albums", () => myApp);
