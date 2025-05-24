import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { back } from '../components/backImage';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = (width - 40) / 2;

export const profileStyle = StyleSheet.create({
    containt:{
       width: ITEM_WIDTH,
       height: 100,
       borderRadius: 10,
       backgroundColor: '#ECECEC',
       margin: 4,
       padding: 15,
       alignItems: 'center',
       justifyContent: 'center',
       
    },

    icone:{
        width: 25,
        height:25,
        marginTop: 8,
        marginBottom: 8,
        resizeMode: 'contain',
        tintColor: Colors.commonColors
    
    },

    text:{
       color: Colors.commonColors
    }
})