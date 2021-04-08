import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Alert  } from 'react-native'
import { LoginRoute, LoginNavigation } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import api from "../config/apiconfig";

// the login screen has email, pw, and the react navigation entities
type Props = {
  route: LoginRoute;
  navigation: LoginNavigation;
};


const login: React.FC<Props> = (props) => {

    const [email, set_email] = useState<string>("");
    const [password, set_password] = useState<string>("");
    const [error, showError] = useState<Boolean>(false);

    const handleLogin = (email: string, password: string): any => {
        fetch(api + "/api/token")
        .then((response) => response.json())
        .then((responseJson) => {
             console.log(responseJson);
             console.log(responseJson.status);
             props.navigation.navigate('Home');
        })
        .catch(error => {
            console.error(error);
        });
    }

    // const handleLogin = (email: string, password: string): void => {
    //     Firebase.auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => props.navigation.navigate('Home'))
    //     .catch((error) => {
    //         console.log(error);
    //         showError(true);  
    //     })
    // }


    const logo = require('../assets/cap_logo.png');
    const shape = require('../assets/fixed_shape_1_blue.png');

    return (
        <View>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Image source={logo} style={{ width: 300, height: 100, resizeMode:'contain' }} />
                        <Text style={styles.title}>Quick Scan</Text>
                    </View>
                    <View style={[styles.container, {paddingBottom:15}]}>
                        <TextInput
                            style={styles.inputBox}
                            value= {email}
                            onChangeText={email => set_email(email)}
                            placeholder='Email'
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={[styles.container, {paddingBottom:0, paddingTop:10,}]}>
                        <TextInput
                            style={styles.inputBox}
                            value={password}
                            onChangeText={password => set_password(password)}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => handleLogin(email, password)} style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 200}]}>Login</Text>
                        </TouchableOpacity>
                        
                        <View style={{height:40}}>
                            {error && (<TouchableOpacity onPress={() =>{
                                    showError(false);
                                    props.navigation.navigate('Pwreset');
                                    }} 
                                    style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                                <Text style={[styles.SecondaryButtonText, {color: 'red'}]}>Error: Reset password?</Text>
                            </TouchableOpacity>)}
                        </View>
                        <TouchableOpacity onPress={() =>
                                props.navigation.navigate('Signup')} 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Don't have an account yet? Sign up.</Text>
                        </TouchableOpacity>
                    </View>
                
                    
                </SafeAreaView>
                <ImageBackground source={shape} style={{width:'100%', height:'100%', top:420, position:'absolute'}} resizeMode='cover'/>
            </View>
            

    )
}
 
export default login;