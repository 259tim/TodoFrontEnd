import React from 'react'
import { View, Text, TextInput  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SignupNavigation, SignupRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import Firebase from '../config/firebaseconf'

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

    return (
        <View style={styles.container}>
                {/* <TextInput
                    style={styles.inputBox}
                    value= {first_name}
                    onChangeText={first_name => set_first_name(first_name)}
                    placeholder='First name'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value= {last_name}
                    onChangeText={Last_name => set_last_name(Last_name)}
                    placeholder='Last name'
                    autoCapitalize='none'
                /> */}
                <TextInput
                    style={styles.inputBox}
                    value= {email}
                    onChangeText={email => set_email(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={password => set_password(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => handleSignup(email, password)} style={styles.DefaultButtonStyle}>
                    <Text style={styles.DefaultButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

    )
}
 
export default signup;