// Import libs for making component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Album</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'lightblue'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to the other parts if the app
export default Header;
