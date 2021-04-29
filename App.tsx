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
import mystore from './store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist"
// my own component imports
import MainPage from './components/mainpage';
import Login from './components/login';
import Signup from './components/signup';
import Pwreset from './components/resetpw';
import ParticipationCreate from './components/createsurvey';
import OpenQuestion from './components/questionpages/question';
//type imports
import { RootStackParameters } from './types/navtypes'

// persist the store
const persistor = persistStore(mystore);

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
    <Provider store={mystore}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
                        
          <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#0070AD'
                },
                headerTitleStyle: {
                  fontFamily: "Ubuntu_500Medium"
                },
                headerTintColor: '#FFFFFF' 
                }}
            />

            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                title: 'Sign up',
                headerStyle: {
                  backgroundColor: '#0070AD'
                },
                headerTitleStyle: {
                  fontFamily: "Ubuntu_500Medium"
                },
                headerTintColor: '#FFFFFF' 
                }}
            />

            {/* <Stack.Screen
              name="Pwreset"
              component={Pwreset}
              options={{
                title: 'Password Reset',
                headerStyle: {
                  backgroundColor: '#0070AD'
                },
                headerTitleStyle: {
                  fontFamily: "Ubuntu_500Medium"
                },
                headerTintColor: '#FFFFFF' 
                }}
            /> */}

            <Stack.Screen
              name="Home"
              component={MainPage}
              options={{
                title: 'Quick Scan',
                headerLeft: () => null,
                headerStyle: {
                  backgroundColor: '#0070AD'
                },
                headerTitleStyle: {
                  fontFamily: "Ubuntu_500Medium"
                },
                headerTintColor: '#FFFFFF' 
                }}
            />

          <Stack.Screen
            name="Participationcreate" 
            component={ParticipationCreate} 
            options={{
              title: 'New survey',
              headerLeft: ()=> null,
              headerStyle: {
                backgroundColor: '#0070AD'
              },
              headerTitleStyle: {
              fontFamily: 'Ubuntu_500Medium'
              },
              headerTintColor: '#FFFFFF' 
            }} 
            />

          <Stack.Screen
            name="Question" 
            component={OpenQuestion} 
            options={{
              title: 'question',
              gestureEnabled: false,
              headerLeft: ()=> null,
              headerStyle: {
                backgroundColor: '#0070AD'
              },
              headerTitleStyle: {
              fontFamily: 'Ubuntu_500Medium'
              },
              headerTintColor: '#FFFFFF' 
            }} 
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}