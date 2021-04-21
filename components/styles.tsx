import { StyleSheet } from 'react-native';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
// I have to figure out how to use these fonts in here


//stylesheet with all the relevant items
const styles = StyleSheet.create(
  {
    ScrollContainer: {
      height:'90%',
      width: "100%",
      justifyContent:'flex-start'
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
      alignItems: "center"
    },
    bottomContainer: {
      flexDirection: "row",
      backgroundColor:'#0070AD',
      justifyContent:'space-between',
      height:"10%",
      width:"100%",
      bottom:0,
      position:"absolute"
    },
    BottomButtonViewStyle: {
      width:"25%"
    },
    BottomButtonStyle: {
      width:"100%",
      backgroundColor:'#0070AD',
      borderRadius:0,
      padding:10
    },
    bottomIconStyle: {
      alignItems: "center",
      paddingBottom:5
    },
    BottomButtonText: {
      alignSelf: 'center',
      fontSize: 14,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    FloatingButtonStyle: {
      alignSelf:'center',
      width: 140,
      padding:15,
      height:60,
      backgroundColor:'#2B0A3D',
      borderRadius:30,
      bottom:90,
      right:20,
      position:"absolute"
   },
    DefaultButtonStyle: {
      alignSelf: 'center',
      minWidth: 140,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
      backgroundColor:'#0070AD',
      borderRadius:20
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
    error: {
      color: "red"
    },
    InvisibleButtonStyle: {
      width: "100%",
      height: 80,
      paddingTop:10,
      paddingBottom:10,
      paddingRight:20,
      paddingLeft:20,
      flexDirection: "row"
    }
  });

export default styles;