import React,{useState} from "react";
import {  TextInput, View} from "react-native";
import { loginStyle } from "@/app/style/loginstyle";

interface CustomInputProps {
    placeholder: string,
    isSecure?: boolean,
    keyboardType?: 'email-address'
}

const CustomInput = ({placeholder, isSecure, keyboardType} : CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return(
        <View>
            <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={isSecure} style={[loginStyle.input,isFocused && loginStyle.inputFocused]} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
        </View>
            
    )
}


export default CustomInput;

