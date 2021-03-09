import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';

// // based on https://medium.com/@amanshharma/react-native-todo-app-using-typescript-and-hooks-bacc5db05100 
// // still gotta try out "on key press" stuff and fix the fact that it only inputs one character
// // might move on to another tutorial next, this one is very basic

//type definition for a todo
interface IToDo {
  text: string;
  completed: boolean;
}

//stylesheet with all the relevant items (gonna put in a separate file)
const styles = StyleSheet.create({
  ScrollContainer: {
    width: "100%"
  },
  container: {
    padding: 35,
    alignItems: "center"
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "purple"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  addButton: {
    alignItems: "flex-end"
  },
  task: {
    width: 200
  },
  error: {
    color: "red"
  }
});

export default function App() {
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

  //this is the page, the style items come from the stylesheet above
  
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
       note that I use the IToDo interface from above to define the type of the list */}
      <View style={{height:580, width: 390}}>
        <ScrollView contentContainerStyle={styles.ScrollContainer}>  
          {toDoList.map((toDo: IToDo, index: number) => (
            <View style={styles.listItem} key={`${index}_${toDo.text}`}>

              <Text style={[styles.task,{ textDecorationLine: toDo.completed ? "line-through" : "none" }]}>
                {toDo.text}
              </Text>

              <Button title={toDo.completed ? "Completed" : "To complete"} onPress={() => toggleComplete(index)}/>
              <Button title = "X" onPress={() => removeItem(index)} color="crimson" />
          </View>
          ))}
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}
