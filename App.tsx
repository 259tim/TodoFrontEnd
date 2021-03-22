// custom font was set as such: https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native 
import * as React from 'react';
import 'react-native-gesture-handler';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import AppLoading from 'expo-app-loading';

//react-navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// redux imports
import store from './store'
import { Provider } from 'react-redux';
// my own component imports
import MainPage from './components/mainpage';
import DetailPage from './components/detailpage';
//type imports
import { RootStackParameters } from './types/navtypes'

// integrating the navigation library for multiple windows
const Stack = createStackNavigator<RootStackParameters>();

// type definitions for navigation 
export type StackParamList = {
  Profile: { name: string };
};

//add ubuntu as custom default font
const customTextProps = {
  style: {
    fontFamily: 'Ubuntu_500Medium'
  }
}

setCustomText(customTextProps);
setCustomTextInput(customTextProps);

export default function App() {
  let [fontsloaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{
             title: 'Home',
             headerStyle: {
               backgroundColor: '#007DB7'
             },
             headerTitleStyle: {
              fontFamily: "Ubuntu_500Medium"
             },
             headerTintColor: '#FFFFFF' 
            }}
        />
        
        <Stack.Screen
         name="Details" 
         component={DetailPage} 
         options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#007DB7'
          },
          headerTitleStyle: {
           fontFamily: 'Ubuntu_500Medium'
          },
          headerTintColor: '#FFFFFF' 
         }} 
         />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}