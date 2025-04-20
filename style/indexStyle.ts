 import { StyleSheet } from "react-native";
 
 const content  = {
    justifyContent: "center" as const,
    alignItems: "center" as const,
 }
 
 export const indexStyle = StyleSheet.create({

   
    image: {
        flex: 1,       
        ...content
    },

    //style pour la vue textue
    tabscontent: {
       width: 350,
       height: "88%",
       backgroundColor: "#fff",
       borderRadius: 35,
       opacity: 0.9
    },

    btnactive:{
         backgroundColor: '#367cff'
    },

    //tsyle pour le texte en gors caractere
    title:{
        fontWeight: "600" ,
        textAlign: "center" ,
        fontSize: 35,
        color: '#367cff',
        lineHeight: 50

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
        marginTop: 72
    
    },

    textbtn:{
        fontWeight: "bold",
        fontSize: 16
    },

    btn:{
        width: 130,
        height: 50,
        ...content,
        fontSize: 30,
        borderRadius: 8,
    },

    texteactive: {
        color: '#fff'
    }
    
});