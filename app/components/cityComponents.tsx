import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeStyle } from '../style/homeStyle'

interface CityProps {
    item: string,
    source: ImageSourcePropType
}

const CityComponents = ({item,source}:CityProps) => {
  return (
    <View style={homeStyle.cityCard}>
      <Image source={source} style={homeStyle.imageCard}/>
      <Text style={homeStyle.cityText}>{item}</Text>
    </View>
  )
}

export default CityComponents