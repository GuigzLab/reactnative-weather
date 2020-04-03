import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Home from './components/Home';
import StatusBarBackground from './components/StatusBarBackground';
import Forecast from './components/Forecast';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navHeaderStyle = {
   backgroundColor: '#f2b54a',
   borderWidth: 0,
   shadowColor: 'transparent',
   height: 0
}

const navTitleStyle = {
   fontWeight: 'bold',
   color: "white"
}

export default function App() {

   return (
      <NavigationContainer style={styles.container}>
         <StatusBar barStyle="dark-content" />
         <StatusBarBackground style={{backgroundColor: '#f2b54a'}} />
         <Stack.Navigator>
            {/* Syntaxe pour pouvoir fournir des props à Home */}
            <Stack.Screen
               name="Home"
               options={{
                  title: '',
                  headerStyle: navHeaderStyle,
                  headerTitleStyle: navTitleStyle
               }}
            >
               {props => <Home testProp="test" />}
            </Stack.Screen>
            <Stack.Screen
               name="Forecast"
               component={Forecast}
               options={{
                  title: '',
                  headerStyle: navHeaderStyle,
                  headerTitleStyle: navTitleStyle
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#f2b54a",
      height: "100%",
   }
});

