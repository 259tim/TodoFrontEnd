import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// type imports
import { QuestionRoute, QuestionNavigation } from '../../types/navtypes';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  route: QuestionRoute;
  navigation: QuestionNavigation;
};

// The detail page can now take information routed to it
// the index that is used to request the correct entry in the store's array is sent through react-navigation
const QuestionNavBar: React.FC<Props> = (props) => {

    return (
        <View style={qstyles.QuestionNavContainer}>
            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Home' 
                        )}
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="arrow-back" size={96} color="#2B0A3D" />
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Details', {index: 1} 
                        )}
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="md-list-circle" size={96} color="#0070AD" />
                    </View>
            </TouchableOpacity>

            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Details', {index: 1} 
                        )}
                        style={qstyles.QuestionNavButton}
                    >    
                    <View style={qstyles.QuestionNavIconStyle}>
                    <Ionicons name="arrow-forward" size={96} color="#2B0A3D" />
                    </View>
            </TouchableOpacity>


        </View>
    )
  }

const qstyles = StyleSheet.create(
  {
    QuestionNavContainer: {
    alignItems:'center',
    flexDirection: "row",
    justifyContent:'space-between',
    height:"100%",
    width:"100%"
  },
  QuestionNavButton: {
    width:"100%",
    borderRadius:0,
    padding:10
  },
  QuestionNavIconStyle: {
    alignItems: "center",
    paddingBottom:5
  }
}
)

export default qstyles;
//export default QuestionNavBar;
