import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { PROFILE_DATA } from '../../data/profileData';
import ProfileComponents from '../../components/profileComponents';


const profile = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{marginVertical: 70, marginHorizontal: 20}}>
        <Text style={{fontSize: 30, fontWeight: '700'}}>Profile</Text>
        <Text style={{fontWeight: '500'}}>Manage your profile settings</Text>
      </View>

      <FlatList
      data={PROFILE_DATA}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
       <ProfileComponents item={item.title} path={item.path}/>
      )}
      style={{marginHorizontal: 10, paddingBottom: 10}}
      />

    </View>
  )
}

export default profile