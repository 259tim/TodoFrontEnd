import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
// redux imports
import {
  selectTodoList 
} from '../store/reducers/todoslice'
// type imports
import { DetailNavigation, DetailRoute } from '../types/navtypes';


type Props = {
  route: DetailRoute;
  navigation: DetailNavigation;
};

// The detail page can now take information routed to it
// the index that is used to request the correct entry in the store's array is sent through react-navigation
const DetailScreen: React.FC<Props> = (props) => {

    const index = props.route.params.index;
    const [isHungry, setIsHungry] = useState(true);
    const todoList = useSelector(selectTodoList);  
    console.log(todoList)
    return (
      <View>
        <StatusBar style="light" />
        <Text style={styles.inputWrapper}>Hello, I am {todoList[index]} and I am {isHungry ? "hungry!" : "full of food..."} </Text>
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