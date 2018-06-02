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
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop:5,
    shadowColor: 'black',
    shadowOffset: { width:0, height: 2},
    shadowOpacity: 0.2,
    elevation:2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to the other parts if the app
export default Header;
