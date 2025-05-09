import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import { tabsStyle } from '@/app/style/tabsStyle';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';

export default function Layout () {
  return (
    <Tabs
      screenOptions={({route}) => ({
        tabBarStyle: tabsStyle.tabsStyle,
        tabBarShowLabel: false,
        tabBarIconStyle: tabsStyle.iconStyle,
        tabBarActiveTintColor: '#4b8bf8',
        tabBarInactiveTintColor: '#4b8bf8',
        tabBarIcon: ({ focused, color, size }) => {
          type IconName = 'home' | 'home-outline' | 'person' | 'person-outline' | 'people' | 'people-outline' | 'settings' | 'settings-outline';
          let iconName : IconName = 'home-outline';
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'user') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        }

      })}
    >
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
      <Tabs.Screen name="user" options={{ headerShown: false }} />
      <Tabs.Screen name="setting" options={{ headerShown: false }} />
    </Tabs>
  );

}

