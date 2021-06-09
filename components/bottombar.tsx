import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// type imports
import { DetailNavigation, DetailRoute } from '../types/navtypes';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  route: DetailRoute;
  navigation: DetailNavigation;
};

// The detail page can now take information routed to it
// the index that is used to request the correct entry in the store's array is sent through react-navigation
const BottomBar: React.FC<Props> = (props) => {

    return (
        <View style={styles.bottomContainer}>
          <View style={styles.BottomButtonViewStyle}>
            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Home' 
                        )}
                        style={styles.BottomButtonStyle}
                    >    
                    <View style={styles.bottomIconStyle}>
                    <Ionicons name="home-sharp" size={24} color="white" />
                    </View>
                    <Text style={styles.BottomButtonText}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BottomButtonViewStyle}>
            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Details', {index: 1} 
                        )}
                        style={styles.BottomButtonStyle}
                    >    
                    <View style={styles.bottomIconStyle}>
                    <Ionicons name="close-sharp" size={24} color="white" />
                    </View>
                    <Text style={styles.BottomButtonText}>Unfinished</Text>
            </TouchableOpacity>
          </View> 

          <View style={styles.BottomButtonViewStyle}>
            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Details', {index: 1} 
                        )}
                        style={styles.BottomButtonStyle}
                    >    
                    <View style={styles.bottomIconStyle}>
                    <Ionicons name="file-tray-stacked-sharp" size={24} color="white" />
                    </View>
                    <Text style={styles.BottomButtonText}>History</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BottomButtonViewStyle}>
            <TouchableOpacity
                        onPress={() =>
                        props.navigation.navigate('Details', {index: 1} 
                        )}
                        style={styles.BottomButtonStyle}
                    >
                    <View style={styles.bottomIconStyle}>
                    <Ionicons name="settings-sharp" size={24} color="white" />
                    </View>    
                    <Text style={styles.BottomButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }

export default BottomBar;