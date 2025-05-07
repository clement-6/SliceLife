import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const tabsStyle = StyleSheet.create({
    tabsStyle:{
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 38,
        position: 'absolute',
        opacity: 0.9,
        height: height*0.089,
        paddingHorizontal: 20,
    }
    
})
