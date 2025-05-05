import { View, Text, Image,  ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeStyle } from '../style/homeStyle';

interface ItemPros{
    item: string;
    source: ImageSourcePropType;
    

}

const ItemComponent = ({item,source}:ItemPros) => {
  return (
    <TouchableOpacity style={{height: 160}}>
        <View style={homeStyle.oauthcontaint}>
            <Image source={source} style={{width: 38, height: 38, backgroundColor: '#ECECEC'}}/>
        </View>
      <Text style={homeStyle.titleIcon} numberOfLines={1} ellipsizeMode='tail'>{item}</Text>
    </TouchableOpacity>
  )
}

export default ItemComponent