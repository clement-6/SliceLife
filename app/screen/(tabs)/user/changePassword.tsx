import { View, Text, StyleSheet, Pressable, Dimensions, Platform, Alert } from 'react-native';
import React from 'react'
import CustomInputPass from '../../../components/customInputPass';
import { userStyler } from '@/app/style/userStyle';
import { Colors } from '@/app/constants/colors';
import {  useRouter } from 'expo-router';

const width = Dimensions.get('screen').width

const router = useRouter();

const handleAlert = () => {
  Alert.alert("Password Changed!", "Your password has been changed successfully.",[
    {text: "Cancel", style: "cancel"},
    {text: "OK", onPress: () => router.navigate('/auth/login')},
    
  ]
);
}

const ChangePassword = () => {
  return (
    <View style={userStyler.container}>
      <View style={userStyler.header}>
        <Text style={userStyler.title}>Change Password</Text>
        <Text style={userStyler.subtitle}>Update your password</Text>
      </View>
      
      <View style= {{rowGap: 10}}>  
        <CustomInputPass placeholder={"Old password"} isSecure={true} name="lock"/>
        <CustomInputPass placeholder={"New Password"} isSecure={true} name="lock"/>
        <CustomInputPass placeholder={"Confirm New Password"} isSecure={true} name="lock"/>
      </View>

      <Pressable style={style.mybtn} onPress={handleAlert}>
        <Text style={style.text}>Update</Text>
      </Pressable>
      
    </View>
  )
}

export default ChangePassword

export const style = StyleSheet.create({
 
  mybtn:{
    backgroundColor: Colors.commonColors,
    width:  width * 0.9,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  text:{
    fontSize: 15,
    color: "white",
    fontWeight: '500'
  }
})