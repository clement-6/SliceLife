import { Dimensions, StyleSheet } from "react-native";


const {width} = Dimensions.get('window')

export const commonStyle = StyleSheet.create({

    tabscontent: {
        width: width * 0.9,
        minHeight: "88%",
        backgroundColor: "#fff",
        borderRadius: 35,
        opacity: 0.85,
        alignItems: "center",
     },

})

