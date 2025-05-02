import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const content  = {
    alignItems: "center" as const,
    justifyContent: 'center' as const
 }

export const FormStyle = StyleSheet.create({

    textTitle: {
        fontSize: 30,
        fontWeight: "700",  
        color: Colors.commonColors,
    },

    viewTitle:{
        marginTop: 40,
        width: "100%",
        alignItems: "center",
        gap: 10
    },

    subTitle: {
        fontWeight: "600",
        width: 228,
        textAlign: "center",
        fontSize: 20
    },

    saisie:{
        rowGap: 29,
        marginTop: 40
    },

    input:{
        borderColor: Colors.commonColors,
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#ebf2ff",
        paddingLeft: 20
    },

    inputFocused: {
        borderWidth: 3,
        borderColor: Colors.commonColors
    },

    forget:{
        color: Colors.commonColors,
        fontWeight: "bold",
        textAlign: "right",
        width: 290,
        marginVertical: 20
    },

    accountText:{
       marginVertical: 30 
     },

    smallSemiBold:{
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
    },

    mybtn: {
        backgroundColor: Colors.commonColors,
        width: 300,
        height: 60,
        ...content,
        borderRadius: 10
    },

    textbtn:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    oauthcontaint:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        height: 40,
        width: 50,
        ...content
    },

    oauthcontaintView:{
        flexDirection: 'row',
        columnGap: 10,
        marginTop: 20,
        
    },

    alterText:{
            color: Colors.commonColors,
            marginTop: 65

    }
   
     
})