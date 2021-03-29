import React from 'react'
import { View, Text, TextInput, SafeAreaView, Image, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignupNavigation, SignupRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import Firebase from '../config/firebaseconf'
import { StatusBar } from 'expo-status-bar';


type Props = {
  route: SignupRoute;
  navigation: SignupNavigation;
};


const signup: React.FC<Props> = (props) => {

    const [email, set_email] = useState<string>("");
    const [password, set_password] = useState<string>("");
    // const [first_name, set_first_name] = useState<string>("");
    // const [last_name, set_last_name] = useState<string>("");

    const handleSignup = (email: string, password: string): void => {
        Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => props.navigation.navigate('Home'))
        .catch(error => console.log(error))
    }

    const logo = require('../assets/cap_logo.png');
    const shape = require('../assets/fixed_shape_1_blue.png');

    return (
        <View>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Image source={logo} style={{ width: 300, height: 100, resizeMode:'contain' }} />
                        <Text style={styles.defaultText}>Enter your email below. You will receive an email to reset your password.</Text>
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
                        <TouchableOpacity onPress={() => handleSignup(email, password)} style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 200}]}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                                props.navigation.navigate('Login')} 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                
                    
                </SafeAreaView>
                <ImageBackground source={shape} style={{width:'100%', height:'100%', top:420, position:'absolute'}} resizeMode='cover'/>
            </View>

    )
}
 
export default signup;