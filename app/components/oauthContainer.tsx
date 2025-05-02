import { View } from "react-native"
import {  FontAwesome6 } from '@expo/vector-icons';
import { FormStyle } from "../style/formstyle";



interface OauthContainerProps{
    iconName: string
}


const OauthContainer = ({iconName}: OauthContainerProps) => {
    return(
        <View style={FormStyle.oauthcontaint}>
           <FontAwesome6 name={iconName} size={18} color={'black'}/>
        </View>
    )
}

export default OauthContainer;