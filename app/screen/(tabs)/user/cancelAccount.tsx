import { View, Text, TextInputComponent, Pressable, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {Colors} from '../../../constants/colors';
import { userStyler } from '@/app/style/userStyle';

const CancelAccount = () => {
  return (
    <View style={userStyler.container}>

      <View style={userStyler.header}>
          <Text style={userStyler.title}>Cancel Account</Text>
          <Text style={[userStyler.subtitle,{fontSize: 13, textAlign: 'justify'}]}>Hello, after deleting this account, the account will be destroyed, so the account can not be restored</Text>
      </View>

      <TextInput style={styles.input}/>

      <Pressable style={styles.mybtn}>
        <Text style={styles.text}>Cancel Account</Text>
      </Pressable>
      
    </View>
  )
}

export default CancelAccount

const width =  Dimensions.get('screen').width

export const styles = StyleSheet.create({
  input: {
          borderColor: Colors.commonColors,
          width: width * 0.9,
          borderRadius: 10,
          backgroundColor: "#ECECEC",
          paddingLeft: 20,
          alignSelf: 'center',
          height: 200
  },

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