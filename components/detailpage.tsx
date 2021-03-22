import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import {
  selectTodoList 
} from '../store/reducers/todoslice'

// This defines the types for all the props that this page will use!
export interface Props {
    text: string;
  }

// Cat has some different things: it has props containing "name" and it has a button that
// triggers a state defined above
const DetailScreen: React.FC<Props> = (props) => {

    const [isHungry, setIsHungry] = useState(true);
    const todoList = useSelector(selectTodoList);  
    console.log(todoList)
    return (
      <View>
  
        <Text>Hello, I am {todoList[0]} and I am {isHungry ? "hungry!" : "full of food..."} </Text>
        
        <Button
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? "Pour me some milk!" : "Thanks!"}
          />
  
      </View>
    )
  }

export default DetailScreen;