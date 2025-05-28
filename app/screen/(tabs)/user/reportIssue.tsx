import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Pressable, Alert } from 'react-native';
import React from 'react'
import { userStyler } from '@/app/style/userStyle'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import {Colors} from '../../../constants/colors';

export default function ReportIssue() {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  return (
    <View style={userStyler.container}>
      <View style={userStyler.header}>
        <Text style={userStyler.title}>Report an Issue</Text>
        <Text style={userStyler.subtitle}>Write your issues</Text>
      </View>

      <View style={{ rowGap: 20 }}>
        <View style={style.saisie}>
          <TextInput
            placeholder="Subject"
            placeholderTextColor={"grey"}
            style={[style.input, { height: 50 }]}
          />
          <FontAwesome6
            name="lock"
            size={22}
            color="#465964"
            style={{ position: "absolute", right: 28 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            multiline
            placeholder="Comments"
            placeholderTextColor={"grey"}
            style={[style.input, { height: 200, textAlignVertical: "top" }]}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            onChangeText={setText}
            value={text}
          />

          {!visible && text === "" && (
            <MaterialCommunityIcons
              name="comment-alert-outline"
              size={22}
              color="#465964"
              style={{ position: "absolute", right: 28, top: 10 }}
            />
          )}
        </View>
      </View>
      <Pressable style={style.mybtn}>
        <Text style={style.text}>Send</Text>
      </Pressable>
    </View>
  );
}


const width = Dimensions.get('screen').width

export const style = StyleSheet.create({
input:{
          borderColor: Colors.commonColors,
          width: width * 0.9,
          borderRadius: 10,
          backgroundColor: "#ECECEC",
          paddingLeft: 20
      },

      saisie:{
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10
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