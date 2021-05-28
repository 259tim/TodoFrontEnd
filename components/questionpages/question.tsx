import React from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { QuestionNavigation, QuestionRoute } from '../../types/navtypes';
import styles from '../styles'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import qstyles from './questionnavbar';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton, Checkbox, ToggleButton } from 'react-native-paper';
import {
    selectQuestions,
    choiceState,
    addChoice,
    addRadio,
    addVarious
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
    const [text_answer, set_text_answer] = useState<string>("");
    const [comment, set_comment] = useState<string>("");

    const dispatch = useDispatch();
    var questions = useSelector(selectQuestions);

    
    //here are all the functions that perform stuff in the page

    // this saves a text answer

    const saveTextAnswer = (text_answer: string, question_number: number) : void => {
        dispatch(
            addVarious({
                questionIndex: question_number,
                option_choice: "text_answer",
                addition: text_answer
            })
        )
        set_text_answer("")
    }

    const saveComment = (comment: string, question_number: number) : void => {
        dispatch(
            addVarious({
                questionIndex: question_number,
                option_choice: "text_answer",
                addition: comment
            })
        )
        set_comment("")
    }

    const saveYN = (bool_choice: boolean, question_number: number, option_choice: string) : void => {
        dispatch(
            addVarious({
                questionIndex: question_number,
                option_choice: "bool_choice",
                addition: bool_choice
            })
        )
        set_comment("")
    }

    // this cycles the contents of the page to the relevant question, and stores data 
    const cycleQuestions = (questions: any, question_number: number, action: number) : any => {


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


    // the components that are rendered on each type of question

    const renderChoice = (question_type: number) : any => {
        if (question_type == 0) {
            
            // question is a yes/no question
            return (
            <View style={{paddingTop:20, width:360}}>
                
                <RadioButton.Item
                    value="true"
                    label="Yes"
                    status="unchecked"
                    color='#0070AD'
                />
                <RadioButton.Item
                    value="false"
                    label="No"
                    status="unchecked"
                    color='#0070AD'
                />
                
              <View style={{alignItems:'center'}}>
                        <TextInput
                                multiline={true}
                                style={styles.inputBoxLarge}
                                value= {comment}
                                onChangeText={comment => set_comment(comment)}
                                placeholder='Additional comments here'
                                autoCapitalize='none'
                            />
                        </View>
            </View>
            )
            
        }
        else if (question_type == 1) {
            var choices = questions[question_number].choices;
            // question is a multiple choice, single answer (radio buttons) question
            
            return(
                <View style={{paddingTop:20, width:360}}> 
                    {choices.map((choice: choiceState, index: number) => (
                        <View key={`${index}_${choice}`}>
                            <View>
                            <RadioButton.Item
                                value={choice.choice_text}
                                label={choice.choice_text}
                                status={choice.chosen}
                                color='#0070AD'
                                // uncheck all of them
                                onPress={() => {
                                    // we use this loop to uncheck all options
                                    // take the length of all the options this question has
                                    // then uncheck everything 
                                    var l = choices.length;
                                    var i;
                                    for (i = 0; i < l; i++ ){
                                        dispatch(
                                            addRadio({
                                                questionIndex: question_number,
                                                choiceIndex: i,
                                                chosen: "unchecked"
                                            })
                                        )
                                    }
                                    // then we check the right one
                                    dispatch(
                                        addRadio({
                                            questionIndex: question_number,
                                            choiceIndex: (choice.id - questions[question_number].choices[0].id),
                                            chosen: "checked"
                                        })
                                    )
                                }}
                           />
                           
                            </View>
                        </View>
                        ))}
                        <View style={{alignItems:'center'}}>
                        <TextInput
                                multiline={true}
                                style={styles.inputBoxLarge}
                                value= {comment}
                                onChangeText={comment => set_comment(comment)}
                                placeholder='Additional comments here'
                                autoCapitalize='none'
                            />
                        </View>

            </View>
            )
        }
        else if (question_type == 2) {
            var choices = [...questions[question_number].choices];
            console.log(question_number)
            // question is a check box question
            // https://stackoverflow.com/questions/61549475/react-native-checkbox-list-structure 
            // example of how to store this data
            return (

                // font has to be changed still https://callstack.github.io/react-native-paper/fonts.html
                // uses this https://callstack.github.io/react-native-paper/radio-button.html
                <View style={{paddingTop:20, width:360}}>

                    {choices.map((choice: choiceState, index: number) => (
                        <View key={`${index}_${choice}`}>
                            <View>
                            <Checkbox.Item
                                label={choice.choice_text}
                                color='#0070AD'
                                status={choice.chosen}
                                onPress={() => {
                                    if(choice.chosen == "unchecked"){
                                        console.log('hi')
                                        dispatch(
                                            addChoice({
                                                questionIndex: question_number,
                                                choiceIndex: (choice.id - questions[question_number].choices[0].id),
                                                chosen: "checked"
                                            })
                                        )
                                    }
                                    else{
                                        console.log('not hi')
                                        dispatch(
                                            addChoice({
                                                questionIndex: question_number,
                                                choiceIndex: (choice.id - questions[question_number].choices[0].id),
                                                chosen: "unchecked"
                                            })
                                        )
                                    }
                                    
                                }}
                            />
                            </View>

                        </View>
                        ))}
                        <View style={{alignItems:'center'}}>
                            <TextInput
                                    multiline={true}
                                    style={styles.inputBoxLarge}
                                    value= {comment}
                                    onChangeText={comment => set_comment(comment)}
                                    placeholder='Additional comments here'
                                    autoCapitalize='none'
                                />
                        </View>
                </View>
            )
        }
        else if (question_type == 3) {
            //question is an open answered question
            return (
            <View style={{width:300, alignItems:'center'}}>
                <View style={{height:200}}></View>
                <TextInput
                    multiline={true}
                    style={styles.inputBoxLarge}
                    value= {text_answer}
                    onChangeText={text_answer => set_text_answer(text_answer)}
                    placeholder='Answer here'
                    autoCapitalize='none'
                />
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
                        onPress={() => (
                        console.log(questions))
                         }
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="md-list-circle" size={96} color="#0070AD" />
                    </View>
            </TouchableOpacity>
            {/* forward arrow */}
            <TouchableOpacity
                        onPress={() =>
                        (
                            saveTextAnswer(text_answer, question_number),
                            saveComment(comment, question_number),
                            cycleQuestions(questions, question_number, 1)
                        )}
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