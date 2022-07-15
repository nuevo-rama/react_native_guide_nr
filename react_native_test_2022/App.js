import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />

      <Image 
        style={styles.image}
        source={{uri: 'https://raw.githubusercontent.com/nuevo-rama/nuevo-rama.github.io/main/images/crb-3-nr.jpg'}}
        
      />

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
    fontSize: 30,
  },
  image: {
    height: 200,
    width: 200,
  }
  
});
