import { StyleSheet } from 'react-native';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
// I have to figure out how to use these fonts in here


//stylesheet with all the relevant items
const styles = StyleSheet.create(
  {
    ScrollContainer: {
      height:'85%',
      width: "100%",
      alignSelf: 'center'
    },
    container: {
      width:'100%',
      padding: 15,
      alignItems: "center"
    },
    inputBox: {
      textDecorationColor:"#2B0A3D",
      width: '100%',
      alignSelf:'center',
      height: 40,
      borderColor: "#2B0A3D",
      borderBottomWidth: 2,
      paddingLeft: 8
    },
    title: {
      fontSize: 30,
      marginBottom: 0,
      // fontFamily: 'Ubuntu_700Bold',
      color: "#2B0A3D"
    },
    subtitle: {
      fontSize: 20,
      marginBottom: 20,
      color: "#2B0A3D"
    },
    defaultText: {
      paddingBottom:10,
      paddingTop:10,
      fontSize: 16,
      color:"#2B0A3D"
    },
    listItem: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      marginBottom: 10,
      paddingLeft: 20,
      paddingRight: 20
    },
    bottomContainer: {
      flexDirection: "row",
      flex: 1,
      justifyContent: 'space-between',
      alignSelf:"stretch"
    },
    BottomButtonViewStyle: {
      width:"25%"
    },
    BottomButtonStyle: {
      width:"100%",
      height:"100%",
      backgroundColor:'#0070AD',
      borderRadius:0,
      padding:10
    },
    bottomIconStyle: {
      alignItems: "center",
      paddingBottom:2
    },
    BottomButtonText: {
      alignSelf: 'center',
      fontSize: 14,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    DefaultButtonStyle: {
      alignSelf: 'center',
      minWidth: 140,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      backgroundColor:'#0070AD',
      borderRadius:20,
    },
    DefaultButtonText: {
      alignSelf: 'center',
      fontSize: 20,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    SecondaryButtonStyle: {
      alignSelf: 'center',
      minWidth: 120,
      padding: 20
    },
    SecondaryButtonText: {
      alignSelf: 'center',
      fontSize: 16,
      textAlign: 'center',
      color: '#0070AD'
    },
    task: {
      width: 200
    },
    error: {
      color: "red"
    }
  });

export default styles;