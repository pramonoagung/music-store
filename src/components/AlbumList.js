import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  //Initial albums state
  state = { albums: [] };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data })); // Update Albums state from the new data retrieved  
  }
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
