 import { StyleSheet, TextStyle } from "react-native";
 
 const content  = {
    justifyContent: "center" as const,
    alignItems: "center" as const,
 }
 
 export const indexStyle = StyleSheet.create({
   

    globalView: {
         flex: 1,
         ...content,
         backgroundColor: "#f5f5dc", 
    },

    //style pour la vue textue
    tabscontent: {

       width: "95%",
       height: "90%",
       backgroundColor: "#fff",
       borderRadius: 35, 
         
    },

    //tsyle pour le texte en gors caractere
    title:{
        fontWeight: "bold" ,
        textAlign: "center" ,
        fontSize: 42.5,
        color: '#367cff',

    },

    //style pour le texte descriptif
    text:{
        fontFamily: 'Times New Roman',
        fontWeight:'100',
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 20
    },

//bouton style
    viewbtn: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    textbtn:{
        fontWeight: "bold",
    },

    btn:{
        width: 120,
        height: 40,
        ...content,
        fontSize: 30,
        borderRadius: 8,
        backgroundColor: "#52be20",
    }
    
});