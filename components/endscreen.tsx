import React, { useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ParticipationCreateNavigation, ParticipationCreateRoute } from '../types/navtypes';
import styles from './styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CreateParticipations from './functions/createparticipation'
import { useDispatch } from 'react-redux';
import {
    fetchQuestions
} from '../store/reducers/questionslice'

type Props = {
  route: ParticipationCreateRoute;
  navigation: ParticipationCreateNavigation;
};


const EndScreen: React.FC<Props> = (props) => {

    const [reference_key, set_reference_key] = useState<string>("");

    // dispatch: Allows you to send actions to redux 
    // these depend on what you define in the slice

    // selector: This is how you select the data from redux
    const dispatch = useDispatch();


    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!reference_key.trim()) {
          alert('Please enter reference key');
          return;
        }
        //Checked Successfully
        //Do whatever you want
        CreateParticipations(reference_key, 1, 1);
        props.navigation.navigate('Question');
      };

    useEffect(() => {
        console.log('dispatching fetch')
        dispatch(fetchQuestions())
    }, []);

    const introtext = `

You have reached the end of the quick scan survey.
Thank you for filling in this survey for us.
You can still go back and adjust your answers if you wish. 

If you want to finish the quickscan please tap the button below.
    `

    const shape1 = require('../assets/greenblue1.png');
    const shape2 = require('../assets/zestshape.png');

    return (
        <View>
            <ImageBackground source={shape1} style={{width:"100%", height:'60%', top:550, position:'absolute'}} resizeMode='contain'/>
            <ImageBackground source={shape2} style={{width:"100%", height:'100%', top:-290, position:'absolute'}} resizeMode='contain'/>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={[styles.title,{color:'#2B0A3D'}]}>Thank you!</Text>
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Text style={[styles.defaultText,{fontSize:15}]}>{introtext}</Text>
                    </View>
                    <View style={[styles.container, {paddingBottom:15}]}>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            checkTextInput()
                            
                                }
                            }   
                             
                            style={[styles.DefaultButtonStyle, {width: '90%'}]}>
                            <Text style={[styles.DefaultButtonText, { width: 240}]}>Finalize survey</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                                props.navigation.goBack()
                                } 
                                style={[styles.SecondaryButtonStyle, {paddingBottom:0}]}>
                            <Text style={styles.SecondaryButtonText}>Adjust answers</Text>
                        </TouchableOpacity>
                    </View>
                
                    
                </SafeAreaView>
                
            </View>

    )
}
 
export default EndScreen;