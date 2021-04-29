import React from 'react'
import { View, Text, TextInput, SafeAreaView, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ParticipationCreateNavigation, ParticipationCreateRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CreateParticipations from './functions/createparticipation'


type Props = {
  route: ParticipationCreateRoute;
  navigation: ParticipationCreateNavigation;
};


const ParticipationCreate: React.FC<Props> = (props) => {

    const [reference_key, set_reference_key] = useState<string>("");

    const introtext = `

This is a survey about cookies.
Please enter the survey reference key you were given.
This survey is never supposed to store any personal or client information.
Please do not enter such information anywhere in this survey.
You can return to the survey at any time from the home screen.

Your progress will be saved.
    `

    const shape1 = require('../assets/greenblue1.png');
    const shape2 = require('../assets/zestshape.png');

    return (
        <View>
            <ImageBackground source={shape1} style={{width:"100%", height:'60%', top:550, position:'absolute'}} resizeMode='contain'/>
            <ImageBackground source={shape2} style={{width:"100%", height:'100%', top:-290, position:'absolute'}} resizeMode='contain'/>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={[styles.title,{color:'#0070AD'}]}>New survey</Text>
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Text style={[styles.defaultText,{fontSize:15}]}>{introtext}</Text>
                    </View>
                    <View style={[styles.container, {paddingBottom:15}]}>
                        <TextInput
                            style={styles.inputBox}
                            value= {reference_key}
                            onChangeText={reference_key => set_reference_key(reference_key)}
                            placeholder='Survey reference key'
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            CreateParticipations(reference_key, 1, 1);
                            props.navigation.navigate('Question');
                                }
                            }   
                             
                            style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 240}]}>Start survey</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                                props.navigation.navigate('Question')} 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                
                    
                </SafeAreaView>
                
            </View>

    )
}
 
export default ParticipationCreate;