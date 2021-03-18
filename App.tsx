// started out with https://medium.com/@amanshharma/react-native-todo-app-using-typescript-and-hooks-bacc5db05100
// currently working on: https://redux.js.org/tutorials/essentials/part-1-overview-concepts ->
// Redux will allow me to store data locally
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import MainPage from './components/mainpage';
import DetailPage from './components/detailpage';
 
// integrating the navigation library for multiple windows
const Stack = createStackNavigator();

// type definitions for navigation 

export type StackParamList = {
  Profile: { name: string };
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{ title: 'Home' }}
        />
        
        <Stack.Screen
         name="Details" 
         component={DetailPage} 
         options={{ title: 'To-do details'}} 
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
}