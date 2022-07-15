import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />

      <Image 
        style={styles.image}
        source={{uri: 'https://raw.githubusercontent.com/nuevo-rama/nuevo-rama.github.io/main/images/crb-3-nr.jpg'}}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
        >
        
        <Text>Press me</Text>
        
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //center
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    fontSize: 30,
  },
  image: {
    margin: 10,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  button: {
    margin: 10,
    backgroundColor: 'grey',
    width: 150,
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
  },
  
});
