import { View, Text, Image,  ImageSourcePropType } from 'react-native'
import React from 'react'
import { FormStyle } from '../style/formstyle'
import { homeStyle } from '../style/homeStyle';

interface ItemPros{
    item: string;
    source: ImageSourcePropType;
    

}

const ItemComponent = ({item,source}:ItemPros) => {
  return (
    <View style={{ borderStyle:"solid", borderWidth:1}}>
        <View style={homeStyle.oauthcontaint}>
            <Image source={source} style={{width: 38, height: 38}}/>
        </View>
      <Text style={homeStyle.titleIcon} numberOfLines={1} ellipsizeMode='tail'>{item}</Text>
    </View>
  )
}

export default ItemComponent