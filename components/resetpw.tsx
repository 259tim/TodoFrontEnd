import React from 'react'
import { View, Text, TextInput, SafeAreaView, Image, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PwresetNavigation, PwresetRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import Firebase from '../config/firebaseconf'
import { StatusBar } from 'expo-status-bar';

type Props = {
  route: PwresetRoute;
  navigation: PwresetNavigation;
};

const pwreset: React.FC<Props> = (props) => {

    const [error, showError] = useState<Boolean>(false);
    const [message, showMessage] = useState<Boolean>(false);
    const [email, set_email] = useState<string>("");

    const PasswordReset = (email: string): void => {
        console.log("here")
        Firebase.auth().sendPasswordResetEmail(email)
        .then(() => showMessage(true))
        .catch(error => error && console.log(error + "here") && showError(true) && showMessage(false) )
    }

    const logo = require('../assets/cap_logo.png');
    const shape = require('../assets/fixed_shape_1_blue.png');

    return (
        <View>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Image source={logo} style={{ width: 300, height: 100, resizeMode:'contain' }} />
                        <Text style={styles.defaultText}>Enter your email in the box below. You will receive an email in your inbox that will allow you to reset your password.</Text>
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
                   
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => PasswordReset(email)} style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 200}]}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                                props.navigation.navigate('Login')} 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        {error && (<Text style={[styles.SecondaryButtonText, {color: 'red'}]}>Error: Wrong email</Text>)}
                        {message && (<Text style={[styles.title]}>Email has been sent</Text>)}

                    </View>
                
                    
                </SafeAreaView>
                <ImageBackground source={shape} style={{width:'100%', height:'100%', top:420, position:'absolute'}} resizeMode='cover'/>
            </View>

    )
}
 
export default pwreset;