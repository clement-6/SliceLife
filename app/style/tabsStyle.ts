import { Dimensions, StyleSheet } from "react-native";
import { back } from '../components/backImage';

const screen = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const tabsStyle = StyleSheet.create({
    tabsStyle:{
        borderRadius: 20,
        bottom: 10,
        marginHorizontal: 38,
        position: 'absolute',
        opacity: 0.89,
        height: height*0.05,
        width: screen*0.8
        
    },

    iconStyle: {
        marginTop: 4,
    },

    header:{
        backgroundColor: 'white',
        marginBottom: 150
        
    }
    
})
