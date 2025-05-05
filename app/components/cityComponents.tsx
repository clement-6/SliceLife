import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeStyle } from '../style/homeStyle'

interface CityProps {
    item: string,
    source: ImageSourcePropType
}

const CityComponents = ({item,source}:CityProps) => {
  return (
    <TouchableOpacity style={homeStyle.cityCard}>
      <Image source={source} style={homeStyle.imageCard}/>
      <Text>{item}</Text>
    </TouchableOpacity>
  )
}

export default CityComponents