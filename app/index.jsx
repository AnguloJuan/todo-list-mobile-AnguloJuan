import { Link, Redirect } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function index (){
    return (
      // Redirect('/signup')
      <View style={{
        width: '100%',
        marginTop: '50%',
        justifyContent: 'center',
        color: 'white',
      }}>
        <Text style={styles.text} > index </Text>
        <Link style={styles.text} href={'/signup'}>signup</Link>

      </View>
    );
  }

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default index;