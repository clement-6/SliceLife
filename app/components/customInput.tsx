import React,{useState} from "react";
import {  TextInput, View} from "react-native";
import { FormStyle } from "@/app/style/formstyle";
import { FontAwesome6 } from "@expo/vector-icons";


interface CustomInputProps {
    placeholder: string,
    isSecure?: boolean,
    keyboardType?: 'email-address',
    name: string
}

const CustomInput = ({
  placeholder,
  isSecure,
  keyboardType,
  name
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{alignItems: 'center', justifyContent:'center'}}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={"#465964"}
        secureTextEntry={isSecure}
        style={[FormStyle.input, isFocused && FormStyle.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <FontAwesome6 name={name} size={22} color="#465964" style={{position:"absolute", right:10}}/>
    </View>
  );
};


export default CustomInput;

