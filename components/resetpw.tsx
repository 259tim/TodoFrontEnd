import React from 'react'
import { View, Text, TextInput, TouchableOpacity  } from 'react-native'
import { PwresetRoute, PwresetNavigation } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import Firebase from '../config/firebaseconf'

// the login screen has email, pw, and the react navigation entities
type Props = {
  route: PwresetRoute;
  navigation: PwresetNavigation;
};


const pwreset: React.FC<Props> = (props) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const HandleLogin = (email: string, password: string): void => {
        Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => props.navigation.navigate('Home'))
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value= {email}
                    onChangeText={email => setEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={password => setPassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => HandleLogin(email, password)} style={styles.DefaultButtonStyle}>
                    <Text style={styles.DefaultButtonText}>Reset your password</Text>
                </TouchableOpacity>
            </View>

    )
}
 
export default pwreset;