import { styles } from './styles';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//type definition for a todo
interface IToDo {
    text: string;
    completed: boolean;
  }

export type StackParamList = {
    Details: { name: string };
    Profile: { name: string};
};

type Props = {
    navigation: StackNavigationProp<StackParamList,'Details'>;
};

//this is the page, the style items come from the stylesheet in styles.ts
const MainPage: React.FC<Props> = ({navigation}) => {

    // these are the relevant hooks, this manages the values in a todo, the full array of todo items, and errors

    const [text, setText] = useState<string>("");
    const [toDoList, setToDos] = useState<IToDo[]>([]);
    const [error, showError] = useState<Boolean>(false);

    //here are all the functions that perform stuff in the page

    const handleSubmit = (): void => {
    if (text.trim())
        setToDos([...toDoList, {text: text, completed: false}])
    else showError(true);
    setText("");
    }

    const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
    }

    const toggleComplete = (index: number): void =>{
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
    }

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo List</Text>

        <View style={styles.inputWrapper}>
        <TextInput
            placeholder="Enter your todo task..."
            onChangeText={text => setText(text)}
            defaultValue={text}
        style={styles.inputBox}/>
        <Button title="Add Task" onPress={handleSubmit} />
        </View>

        {/*This is a simplified way to write an if/else, instead of writing it out you simply do
        CONDITION && RESULT, if the condition is met the thing after && triggers*/}
        {error && (<Text style={styles.error} >Error: Input field is empty...</Text>)}

        <Text style={styles.subtitle}> Your Tasks:</Text>
        
        {/* same as above!! */}
        {toDoList.length === 0 && <Text>No tasks available</Text>}
        
        {/*here I map the items in the ToDo array into a list,
        with a style change that does a strike-through if attribute "completed" is true
        note that I use the IToDo interface from above to define the type of the list 
        This is a scrollview that allows the app to scroll when more todos are added
        it's wrapped in a view to give it proper sizing, otherwise it goes all over the place*/}
        <View style={{height:580, width: 390}}>
        <ScrollView contentContainerStyle={styles.ScrollContainer}>  
            {toDoList.map((toDo: IToDo, index: number) => (
            <View style={styles.listItem} key={`${index}_${toDo.text}`}>

                <Text style={[styles.task,{ textDecorationLine: toDo.completed ? "line-through" : "none" }]}>
                {toDo.text}
                </Text>

                <Button 
                    title={toDo.completed ? "Completed" : "To complete"} 
                    onPress={() => toggleComplete(index)}
                />
                <Button 
                    title = "X" 
                    onPress={() => removeItem(index)} 
                    color="crimson" 
                />
                <Button 
                    title = "INFO" onPress={() =>
                    navigation.navigate('Details', {name: 'Details'})}
                />
            </View>
            ))}
        </ScrollView>
        </View>
    </SafeAreaView>
    )
}

export default MainPage;