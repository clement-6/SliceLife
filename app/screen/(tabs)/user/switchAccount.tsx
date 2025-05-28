import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react'
import {Colors} from '../../../constants/colors';
import { userStyler } from '@/app/style/userStyle';

const width = Dimensions.get('screen').width

export default function SwitchAccount() {
  return (
    <View style={userStyler.container}>
      <View style={userStyler.header}>
        <Text style={userStyler.title}>Switch Account</Text>
        <Text style={userStyler.subtitle}>Switch Account</Text>
      </View>
      <TouchableOpacity style={style.mybtn}>
        <Text style={style.text}>Switch Account</Text>
      </TouchableOpacity>
    </View>
  )
}


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