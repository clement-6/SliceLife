import { StyleSheet } from "react-native"
import { back } from '../components/backImage';
import { Colors } from "../constants/colors";



export const userStyler = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },

    header:{
        marginVertical:60,
        marginBottom:40,
        marginHorizontal: 20
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.textColors
    },
    subtitle:{
        fontSize: 16,
        color: Colors.textColors,
        fontWeight: '500'
    },
   
    optionItem:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:18,
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor: '#ECECEC'
    },
    iconContainer:{
        marginRight: 15,
    },
    optionText:{

        fontSize: 16
    },
})