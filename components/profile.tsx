import React from 'react'
import { View, Text } from 'react-native'
import { DetailNavigation, DetailRoute } from '../types/navtypes';
// have to change the route to a new one

type Props = {
  route: DetailRoute;
  navigation: DetailNavigation;
};


const profile: React.FC<Props> = ({route, navigation}) => {
    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    )
}
 
export default profile;