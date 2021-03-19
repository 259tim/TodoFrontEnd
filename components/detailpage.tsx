import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  store,
  selectText 
} from '../store/reducers/todoslice'
// ^ this might be wrong

// This defines the types for all the props that this page will use!
export interface Props {
    text: string;
  }

// Cat has some different things: it has props containing "name" and it has a button that
// triggers a state defined above
const DetailScreen: React.FC<Props> = (props) => {

    const [isHungry, setIsHungry] = useState(true);
    const stateText = useSelector(selectText)  

    return (
      <View>
  
        <Text>Hello, I am {stateText} and I am {isHungry ? "hungry!" : "full of food..."} </Text>
        
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