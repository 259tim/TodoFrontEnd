import React from 'react'
import { View, Text, SafeAreaView, ImageBackground  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ParticipationCreateNavigation, ParticipationCreateRoute } from '../types/navtypes';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import {
questionsState, selectSet
} from '../store/reducers/questionslice'
import CreateSurveyData from './functions/createsurveydata';

type Props = {
  route: ParticipationCreateRoute;
  navigation: ParticipationCreateNavigation;
};


const EndScreen: React.FC<Props> = (props) => {

    // dispatch: Allows you to send actions to redux 
    // these depend on what you define in the slice

    // selector: This is how you select the data from redux
    const questions = useSelector(selectSet);
    console.log("the questions:")
    console.log(questions)

    const sendFinalResult = (questions: questionsState): any => {
        console.log("posting final question results")
        const json_questions = JSON.stringify(questions)
        console.log(json_questions)
        CreateSurveyData(json_questions)
    }


    const introtext = `

You have reached the end of the quick scan survey.
Thank you for filling in this survey for us.
If you want to finish the quickscan please tap the button below.

You can still go back and adjust your answers if you wish. 
    `

    const shape1 = require('../assets/pinkblue.png');
    const shape2 = require('../assets/purpleblue.png');

    return (
        <View>
            <ImageBackground source={shape1} style={{width:"100%", height:'100%', top:350, position:'absolute'}} resizeMode='contain'/>
            <ImageBackground source={shape2} style={{width:"100%", height:'80%', top:-100, position:'absolute'}} resizeMode='contain'/>
            <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    <Text style={[styles.title,{color:'#2B0A3D', paddingTop:20}]}>Thank you!</Text>
                    <View style={[styles.container, {paddingBottom:10, paddingTop:0}]}>
                        <Text style={[styles.defaultText,{fontSize:15, paddingTop:150}]}>{introtext}</Text>
                    </View>
                    <View style={[styles.container, {paddingBottom:15}]}>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                                    (
                                        sendFinalResult(questions),
                                        props.navigation.navigate('Home')
                                    )
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