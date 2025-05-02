
import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const content  = {
    alignItems: "center" as const,
 }


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
        width: 345,
        fontSize: 25,
        color: Colors.textColors
     },

     input:{
        width: 380,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        paddingLeft: 20
    },

    oauthcontaint:{
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        height: 60,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleIcon:{
        textAlign:'center',
        marginLeft: 12,
        width: 60,
         marginTop:5,
        color: Colors.textColors,
        fontWeight: '500',

    },



})