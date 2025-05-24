import React,{useState} from "react";
import { TextInput, View, StyleSheet, Dimensions, Platform } from 'react-native';
import { FormStyle } from "@/app/style/formstyle";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from '@/app/constants/colors';

const width = Dimensions.get('screen').width


interface CustomInputProps {
    placeholder: string,
    isSecure?: boolean,
    name: string
}

const CustomInput = ({
  placeholder,
  isSecure,
  name
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{alignItems: 'center', justifyContent:'center'}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        secureTextEntry={isSecure}
        style={[style.input, isFocused && FormStyle.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <FontAwesome6 name={name} size={22} color="grey" style={{position:"absolute", right:32}}/>
    </View>
  );
};


export default CustomInput;

export const style = StyleSheet.create({
  
      input:{
          borderColor: Colors.commonColors,
          width: Platform.OS === 'ios' ? width * 0.8 : width * 0.9,
          height: 50,
          borderRadius: 10,
          backgroundColor: "#ECECEC",
          paddingLeft: 20
      },
  header: {
    marginVertical: 60,
    marginHorizontal: 20
  },
  
})
