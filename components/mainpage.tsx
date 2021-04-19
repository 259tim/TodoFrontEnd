import styles from './styles';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailPage from './detailpage';
import BottomBar from './bottombar';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
// type imports
import { DetailNavigation, DetailRoute } from '../types/navtypes';
// api import
import api from "../config/apiconfig";

type Props = {
  route: DetailRoute;
  navigation: DetailNavigation;
};

//redux imports
import { useDispatch, useSelector } from 'react-redux';
import {
    save,
    remove,
    selectTodoList 
} from '../store/reducers/todoslice'


//this is the page, the style items come from the stylesheet in styles.ts
const MainPage: React.FC<Props> = ({navigation}) => {

    // var [currentTime, setCurrentTime] = useState(0);

    // for redux
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList); 

    // these are the relevant hooks, this manages setting text and errors

    const [text, setText] = useState<string>("");
    const [error, showError] = useState<Boolean>(false);
    
    //here are all the functions that perform stuff in the page

    // const fetchTime = (): any => {
    //     return fetch(api + "/time")
    //     .then(response => response.json())
    //     .then(responseJson => {
    //          console.log(responseJson.time)
    //          setCurrentTime(responseJson.time)
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }

    // fetchTime()
    const D = Dimensions.get('window').width;
    const H = Dimensions.get('window').height;

    const handleSubmit = (): void => {
    if (text.trim())
        dispatch(save(text))
    else showError(true);
    setText("");
    }

    const removeItem = (index: number): void => {
        dispatch(remove(index))
    }   

    return (
    
    <SafeAreaView style={{flex:1, flexDirection:"column"}}>
        <StatusBar style="light" />

        {/* <View style={styles.container}>
        <TextInput
            placeholder="Enter your todo task..."
            onChangeText={text => setText(text)}
            defaultValue={text}
        style={styles.inputBox}/>
        
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.DefaultButtonStyle}
                    >
                    <Text style={styles.DefaultButtonText}>Add new task</Text>
            </TouchableOpacity>
        </View>
          */}

        {/*This is a simplified way to write an if/else, instead of writing it out you simply do
        CONDITION && RESULT, if the condition is met the thing after && triggers*/}
        {/* {error && (<Text style={styles.error} >Error: Input field is empty...</Text>)} */}
        
        {/* same as above!! */}
        {todoList.length === 0 && <Text>No tasks available</Text>}
        
        {/*here I map the items in the ToDo array into a list,
        with a style change that does a strike-through if attribute "completed" is true
        note that I use the IToDo interface from above to define the type of the list 
        This is a scrollview that allows the app to scroll when more todos are added
        it's wrapped in a view to give it proper sizing, otherwise it goes all over the place*/}
                    
            <View style={styles.ScrollContainer}>
                <ScrollView>  
                    {todoList.map((todo: string, index: number) => (
                    <View style={styles.listItem} key={`${index}_${todo}`}>

                        <Text style={styles.task}>
                        {todo}
                        </Text>

                        {/* <Button 
                            title = "X" 
                            onPress={() => removeItem(index)} 
                            color="#2B0A3D" 
                        /> */}
                        <TouchableOpacity
                            onPress={() =>
                            navigation.navigate('Details', 
                            {index})}
                            style={styles.DefaultButtonStyle}
                        >
                        <Text style={styles.DefaultButtonText}>More info</Text>
                        </TouchableOpacity>
                    </View>
                    ))}
                </ScrollView>
            </View>

            <BottomBar/> 
            <View style={styles.FloatingButtonStyle}>
            <TouchableOpacity>
                <Text style={styles.DefaultButtonText}>+ Survey</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
    )
}

export default MainPage;