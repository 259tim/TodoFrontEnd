import { StyleSheet } from 'react-native';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
// I have to figure out how to use these fonts in here


//stylesheet with all the relevant items
const styles = StyleSheet.create(
  {
    ScrollContainer: {
      width: "100%",
      paddingBottom: 160
    },
    container: {
      padding: 35,
      alignItems: "center"
    },
    inputWrapper: {
      justifyContent: "center",
      alignItems: "center",
      width: "110%",
      height: 50,
      flexDirection: "row", 
      marginBottom: 10,

    },
    inputBox: {
      width: '100%',
      height: 40,
      borderColor: "#2B0A3D",
      borderBottomWidth: 2,
      paddingLeft: 8
    },
    title: {
      fontSize: 40,
      marginBottom: 40,
      // fontFamily: 'Ubuntu_700Bold',
      color: "#2B0A3D"
    },
    subtitle: {
      fontSize: 20,
      marginBottom: 20,
      color: "#2B0A3D"
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
    DefaultButtonStyle: {
      width: 120,
      height: 50,
      paddingTop:15,
      paddingBottom:15,
      backgroundColor:'#007DB7',
      borderRadius:10,
    },
    DefaultButtonText: {
      textAlign: 'center',
      color: '#FFFFFF'
    },
    task: {
      width: 200
    },
    error: {
      color: "red"
    }
  });

export { styles };