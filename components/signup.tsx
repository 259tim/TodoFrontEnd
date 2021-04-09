import React from 'react'
import { View, Text, TextInput, SafeAreaView, Image, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignupNavigation, SignupRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import api from "../config/apiconfig";

type Props = {
  route: SignupRoute;
  navigation: SignupNavigation;
};


const signup: React.FC<Props> = (props) => {

    const [email, set_email] = useState<string>("");
    const [name, set_name] = useState<string>("");
    const [password, set_password] = useState<string>("");
    const [error, showError] = useState<Boolean>(false);
    const [error_text, set_error_text] = useState<string>("");

    const handleSignup = (email: string, name: string, password: string): any => {
        fetch(api + "/api/usercreate", {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "name": name,
                "password": password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
             console.log(responseJson);
             if (responseJson.name) 
             {
                props.navigation.navigate('Login');
             }
             else if (responseJson.message == "Missing arguments")
             {
                 showError(true)
                 set_error_text("Please check that you filled in all fields.")
             }
             else if (responseJson.message == "User exists")
             {
                 showError(true)
                 set_error_text("This email is already linked to an account.")
             }

             
            })
        .catch(error => {
            console.error(error);
        });
    }


    const logo = require('../assets/cap_logo.png');
    const shape = require('../assets/fixed_shape_1_blue.png');

    return (
        <View>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Image source={logo} style={{ width: 300, height: 100, resizeMode:'contain' }} />
                        <Text style={styles.defaultText}>Enter your credentials here to sign up.</Text>
                    </View>
                    <View style={[styles.container, {paddingBottom:15}]}>
                        <TextInput
                            style={styles.inputBox}
                            value= {name}
                            onChangeText={name => set_name(name)}
                            placeholder='Name'
                            autoCapitalize='none'
                        />
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
                        <TouchableOpacity onPress={() => handleSignup(email, name, password)} style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 200}]}>Sign up</Text>
                        </TouchableOpacity>
                        <View style={{height:40}}>
                            {error && (<Text 
                                    style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                                <Text style={[styles.SecondaryButtonText, {color: 'red'}]}>{error_text}</Text>
                            </Text>)}
                        </View>
                        <TouchableOpacity onPress={() =>
                                props.navigation.navigate('Login')} 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                
                    
                </SafeAreaView>
                <ImageBackground source={shape} style={{width:'100%', height:'100%', top:480, position:'absolute'}} resizeMode='cover'/>
            </View>

    )
}
 
export default signup;