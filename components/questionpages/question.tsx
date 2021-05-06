import React, { useEffect} from 'react'
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView  } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { QuestionNavigation, QuestionRoute } from '../../types/navtypes';
import styles from '../styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import QuestionNavBar from './questionnavbar';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useDispatch, useSelector } from 'react-redux';
import {
    save,
    remove,
    selectStatus,
    fetchQuestions, 
    selectQuestions
} from '../../store/reducers/questionslice'


type Props = {
  route: QuestionRoute;
  navigation: QuestionNavigation;
};


const OpenQuestion: React.FC<Props> = (props) => {



    // const question = questions[0]
    // console.log(question.question_text)

    const [reference_key, set_reference_key] = useState<string>("");
    const [question_list, setQuestionList] = useState<Array<Object>>([{"survey_name":"no surveys available"}]);

    //here are all the functions that perform stuff in the page

    const questions = useSelector(selectQuestions);
    const questionStatus = useSelector(selectStatus);
    console.log("current list")
    console.log(questions)


    const questiontext = 
`This is a survey about cookies.
Please enter the survey reference key you were given.
This survey is never supposed to store any personal or client information.
Please do not enter such information anywhere in this survey.
You can return to the survey at any time from the home screen.

Your progress will be saved.
This is a survey about cookies.
Please enter the survey reference key you were given.
This survey is never supposed to store any personal or client information.
Please do not enter such information anywhere in this survey.
You can return to the survey at any time from the home screen.

Your progress will be saved.
This is a survey about cookies.
Please enter the survey reference key you were given.
This survey is never supposed to store any personal or client information.
Please do not enter such information anywhere in this survey.
You can return to the survey at any time from the home screen.

Your progress will be saved.`


    return (

        
        <SafeAreaView style={{
            // Try setting `flexDirection` to `"row"`.
            flex:1,
            flexDirection: "column"
            }}>
            <StatusBar style="light" />
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}> 
                <Text style={[styles.title,{color:'#2B0A3D'}]}>Question #3</Text>
            </View>
            <View style={{flex:6, justifyContent:'center', alignItems:'center'}}>
                <ScrollView 
                contentContainerStyle={{justifyContent:'center', alignItems:'center' }}
                >
                <Text style={[styles.defaultText,{fontSize:15, padding:20}]}>{questions[1].question_text}</Text>

                </ScrollView>
                <TextInput
                            multiline={true}
                            style={styles.inputBoxLarge}
                            value= {reference_key}
                            onChangeText={reference_key => set_reference_key(reference_key)}
                            placeholder='Answer here'
                            autoCapitalize='none'
                        />
            </View>
            <KeyboardAvoidingView style={{ flex: 2}} behavior='height'>
                <QuestionNavBar {...props}/>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                <HideWithKeyboard>
                <TouchableOpacity onPress={() =>
                                    props.navigation.navigate('Login')} 
                                    style={styles.SecondaryButtonStyle}>
                                <Text style={styles.SecondaryButtonText}>Skip question</Text>
                            </TouchableOpacity>
                            </HideWithKeyboard>
            </KeyboardAvoidingView>
            </SafeAreaView>

    )
}
 
export default OpenQuestion;