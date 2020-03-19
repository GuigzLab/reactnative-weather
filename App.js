import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import StatusBarBackground from './components/StatusBarBackground';
import Forecast from './components/Forecast';

export default function App() {
   return (
      <View style={styles.container}>
         <StatusBarBackground/>
         {/* <Home/> */}
         <Forecast></Forecast>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: "#f2b54a",
      height: "100%",
      // padding: 16,
   }
});

