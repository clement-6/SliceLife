import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeStyle } from '../style/homeStyle'
import { profileStyle } from '../style/profileStyle'

interface ProfileProps {
    item: string,
    path: ImageSourcePropType
}

const ProfileComponents = ({item,path}:ProfileProps) => {
  return (
    <View style={profileStyle.containt}>
      <Image source={path} style={profileStyle.icone}/>
      <Text style={profileStyle.text}>{item}</Text>
    </View>
  )
}

export default ProfileComponents