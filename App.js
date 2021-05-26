import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // const [text, setText] = useState("YOOOO Open up App.js to start working on your app!")
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput placeholder='Course Goal' style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}/>
      <Button title='Add'/>
      </View>
      <View>

      </View>
    </View>
  );
}

