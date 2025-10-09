import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CreateNativeStackNavigator } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.HomeScreen
                name = "home"
                options = {{ headerShown: false}}
                component= {HomeScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}