import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Switch, Button, Vibration } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const vibreur = () => {
    if (isEnabled) {
      Vibration.vibrate()
    }
  }
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Woohoo !</Text>
      <Text style={styles.bold}>Traducteur en chat</Text>
      <StatusBar style="auto" />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        style={{height: 40}}
        placeholder="écrit ici en gros"
        onChangeText={() => console.log("Adding text")}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && 'nya').join(' ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
