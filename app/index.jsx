import { Link } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> index </Text>
        <Link href={'/signup'}>signup</Link>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default index;