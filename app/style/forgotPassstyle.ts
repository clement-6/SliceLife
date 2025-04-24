import { StyleSheet, Dimensions } from "react-native"

const {width} = Dimensions.get('window')

export const forgotPassStyle = StyleSheet.create({
    tabscontent: {
        paddingTop: 30,
        width: width * 0.9,
        minHeight: "50%",
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
})