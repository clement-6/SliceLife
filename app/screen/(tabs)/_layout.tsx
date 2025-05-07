import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import { tabsStyle } from '@/app/style/tabsStyle';

export default function Layout () {
  return (

   <Tabs screenOptions={{tabBarStyle: tabsStyle.tabsStyle, tabBarShowLabel: false}}>
    <Tabs.Screen name="home" options={{headerShown: false}} />
    <Tabs.Screen name="profile" options={{headerShown: false}} />
    <Tabs.Screen name="user" options={{headerShown: false}} />
    <Tabs.Screen name="setting" options={{headerShown: false}} />
   </Tabs>

  );

}

