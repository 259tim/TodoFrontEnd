import React, { useEffect} from 'react'
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView  } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { QuestionNavigation, QuestionRoute } from '../../types/navtypes';
import styles from '../styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import qstyles from './questionnavbar';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Button from 'react-native-paper';
import {
    selectStatus,
    selectQuestions
} from '../../store/reducers/questionslice'


type Props = {
  route: QuestionRoute;
  navigation: QuestionNavigation;
};


const OpenQuestion: React.FC<Props> = (props) => {



    // const question = questions[0]
    // console.log(question.question_text)
    // hooks
    const [question_number, set_question_number] = useState<number>(0);
    const [question_type, set_question_type] = useState<number>(0);
    const [comment, set_comment] = useState<string>("");
    
    const questions = useSelector(selectQuestions);
    const questionStatus = useSelector(selectStatus);

    
    //here are all the functions that perform stuff in the page


    // this cycles the contents of the page to the relevant question, and stores data 
    const cycleQuestions = (questions: Array<Object>, question_number: number, action: number) : any => {


        // what to do if backward arrow is pressed
        if (action == 0){
            if ((question_number - 1) < 0 ) {
                return;
            }
            
            set_question_number(question_number - 1)
            set_question_type(questions[question_number - 1].question_type)
        }

        // what to do if forward arrow is pressed
        else if (action == 1){
            if ((question_number + 1) >= questions.length ) {
                return;
            }
    
            set_question_number(question_number + 1)
            set_question_type(questions[question_number + 1].question_type)
        }

        // what to do if skip button is pressed
        else if (action == 2){
            if ((question_number + 1) >= questions.length ) {
                return;
            }

            set_question_number(question_number + 1)
            set_question_type(questions[question_number + 1].question_type)
        }


    }

    const renderChoice = (question_type: number) : any => {
        if (question_type == 0) {
            // question is a yes/no question
            return (
            <View style={{width:100, height:100, backgroundColor:'green'}}>
                <Text>hello</Text>
            </View>)
            
        }
        else if (question_type == 1) {
            // question is a multiple choice, single answer (radio buttons) question
            return(
            <View style={{width:100, height:100, backgroundColor:'red'}}>
                <Text>hello</Text>
            </View>
            )
        }
        else if (question_type == 2) {
            // question is a check box question
            return (
            <View style={{width:100, height:100, backgroundColor:'blue'}}>
                <Text>hello</Text>
            </View>
            )
        }
        else if (question_type == 3) {
            //question is an open answered question
            return (
            <View style={{width:100, height:100, backgroundColor:'yellow'}}>
                <Text>hello</Text>
            </View>
            )
        }
    }



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
                <Text style={[styles.title,{color:'#2B0A3D'}]}>Question #{question_number + 1}</Text>
            </View>
            <View style={{flex:6, justifyContent:'center', alignItems:'center'}}>
                <ScrollView 
                contentContainerStyle={{justifyContent:'center', alignItems:'center' }}
                >
                    <Text style={[styles.defaultText,{fontSize:15, padding:20}]}>{questions[question_number].question_text}</Text>
                    <View>{renderChoice(question_type)}</View>
                </ScrollView>
                <TextInput
                            multiline={true}
                            style={styles.inputBoxLarge}
                            value= {comment}
                            onChangeText={comment => set_comment(comment)}
                            placeholder='Answer here'
                            autoCapitalize='none'
                        />
            </View>
            <KeyboardAvoidingView style={{ flex: 2}} behavior='height'>
            <View style={qstyles.QuestionNavContainer}>
            {/* back arrow */}
            <TouchableOpacity
                        onPress={() =>
                            cycleQuestions(questions, question_number, 0)}
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="arrow-back" size={96} color="#2B0A3D" />
                    </View>
            </TouchableOpacity>
            {/* middle button */}
            <TouchableOpacity
                        // onPress={() =>
                          
                        // // props.navigation.navigate('Details', {index: 1})
                        //  }
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="md-list-circle" size={96} color="#0070AD" />
                    </View>
            </TouchableOpacity>
            {/* forward arrow */}
            <TouchableOpacity
                        onPress={() =>
                        cycleQuestions(questions, question_number, 1)}
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="arrow-forward" size={96} color="#2B0A3D" />
                    </View>
            </TouchableOpacity>


        </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                <HideWithKeyboard>
                <TouchableOpacity onPress={() =>
                                    cycleQuestions(questions, question_number, 2)} 
                                    style={styles.SecondaryButtonStyle}>
                                <Text style={styles.SecondaryButtonText}>Skip question</Text>
                            </TouchableOpacity>
                            </HideWithKeyboard>
            </KeyboardAvoidingView>
            </SafeAreaView>

    )
}
 
export default OpenQuestion;