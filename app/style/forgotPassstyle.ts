import { StyleSheet, Dimensions } from "react-native"

const {width} = Dimensions.get('window')

export const forgotPassStyle = StyleSheet.create({
    tabscontent: {
        width: width * 0.9,
        minHeight: "70%",
        backgroundColor: "#fff",
        borderRadius: 35,
        opacity: 0.95,
        alignItems: 'center',
        padding: 20
     },

     viewTitle:{
        width: "100%",
        alignItems: "center",
        gap: 30
    },

    saisie:{
       alignItems: 'center',
        marginTop: 35,
    },


    image_header: {
        width: 180, 
        height: 180 
    },


})