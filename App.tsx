import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './Screens/HomeScreen'
import { SendDataScreen } from './Screens/SendData'

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name= "SendData" component ={SendDataScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}