import styles from './styles';
import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import BottomBar from './bottombar';
import { Ionicons } from '@expo/vector-icons';
// type imports
import { DetailNavigation, DetailRoute } from '../types/navtypes';
// function imports
import GetParticipations from './functions/getparticipations'


type Props = {
  route: DetailRoute;
  navigation: DetailNavigation;
};


//this is the page, the style items come from the stylesheet in styles.ts
const MainPage: React.FC<Props> = (props) => {

    
        
    // these are the relevant hooks, this manages setting text and errors

    const [survey_list, setSurveyList] = useState<Array<Object>>([{"survey_name":"no surveys available"}]);

    //here are all the functions that perform stuff in the page

    useFocusEffect(() => {
        const fetchData = async () => {
            const data = await GetParticipations();
            setSurveyList(data);
        };
        fetchData();
        
    });


    //onPress = {() => console.log(GetParticipations())}

    return (
    
    <SafeAreaView style={{flex:1, flexDirection:"column"}}>
        <StatusBar style="light" />

        {/*This is a simplified way to write an if/else, instead of writing it out you simply do
        CONDITION && RESULT, if the condition is met the thing after && triggers*/}
        {/* {error && (<Text style={styles.error} >Error: Input field is empty...</Text>)} */}
        
        
        {/*here I map the items in the ToDo array into a list,
        with a style change that does a strike-through if attribute "completed" is true
        note that I use the IToDo interface from above to define the type of the list 
        This is a scrollview that allows the app to scroll when more items are added
        it's wrapped in a view to give it proper sizing, otherwise it goes all over the place*/}
                    
            <View style={styles.ScrollContainer}>
                <ScrollView>  
                    {survey_list.map((survey: any, index: number) => (
                    <View key={`${index}_${survey}`}>


                        <TouchableOpacity
                            onPress={() =>
                            props.navigation.navigate('Details', 
                            {index})}
                            style={styles.InvisibleButtonStyle}
                        >
                            <Text>
                                {survey.reference_key}
                            </Text>
                        {/* <Text style={styles.DefaultButtonText}>More info</Text> */}
                        <Ionicons name="file-tray-stacked-sharp" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                    ))}
                </ScrollView>
            </View>

            <BottomBar {...props}/> 
            <View style={styles.FloatingButtonStyle}>
            <TouchableOpacity onPress={() =>{props.navigation.navigate('Participationcreate');}} >
                <Text style={styles.DefaultButtonText}>+ Survey</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
    )
}

export default MainPage;