
import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const content  = {
    alignItems: "center" as const,
 }

 const screen = Dimensions.get('screen').width;


export const homeStyle= StyleSheet.create({
    container:{
        flex: 1,
        ...content,
        backgroundColor: '#fff'
        
        
    },
    viewTitle:{
        ...content,
        rowGap: 8
    },

    title:{
        fontWeight: "700",
        fontSize: 25,
        fontFamily: 'Times New Roman',
        color: Colors.textColors
    },
    subtitle:{
        fontWeight: "500",
        color: Colors.textColors

    },

    saisie:{
        flexDirection: 'row',
        ...content,
        marginVertical: 20
     },

     text:{
        fontWeight: "600",
        textAlign: 'left',
        width: Platform.OS === 'ios' ? 350 : screen*0.9,
        fontSize: 25,
        color: Colors.textColors,
        marginTop: 20
     },

     input:{
        width: Platform.OS === 'ios' ? 350 : screen*0.9,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        paddingLeft: 20
    },

    list:{
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    oauthcontaint:{
       
        backgroundColor: '#ECECEC',
        marginHorizontal: 8,
        borderRadius: 10,
        height: 60,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleIcon:{
        textAlign: 'center',
        marginLeft: 12,
        width: 60,
        marginTop:5,
        color: Colors.textColors,
        fontWeight: '500',

    },

    cityCard: {
        borderRadius: 10,
        alignItems: 'center',
        margin: 5 ,
        elevation: 5
    },

    imageCard:{
        width: screen*0.45,
        height:120,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    cityText: {
      position : 'absolute',
      bottom: 12,
      left: 12,
      color: '#fff',
      fontWeight: '900',
      fontFamily: 'Times New Roman',
    },



})