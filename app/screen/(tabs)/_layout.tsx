import React from 'react'
import {   Tabs } from 'expo-router';
import { tabsStyle } from '@/app/style/tabsStyle';
import { Ionicons } from '@expo/vector-icons';
import BackComponent from '@/app/components/backComponent';

export default function Layout () {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: tabsStyle.tabsStyle,
        headerStatusBarHeight: 0,
        headerTransparent: true,
        headerTitle: "",
        tabBarShowLabel: false,
        tabBarIconStyle: tabsStyle.iconStyle,
        tabBarActiveTintColor: "#4b8bf8",
        tabBarInactiveTintColor: "#4b8bf8",
        tabBarIcon: ({ focused, color, size }) => {
          type IconName =
            | "home"
            | "home-outline"
            | "person"
            | "person-outline"
            | "people"
            | "people-outline"
            | "settings"
            | "settings-outline";
          let iconName: IconName = "home-outline";
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "user") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "setting") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen
        name="profile"
        options=
        {
          { 
            tabBarStyle: 
            { 
              display: "none" 
            }, 
            
            headerLeft: () => (<BackComponent />),
            headerLeftContainerStyle: {left: 20},
          }
        }
      />
      <Tabs.Screen 
      name="user" 
      options=
      {
        { 
          tabBarStyle: 
          { 
            display: "none" 
          }, 
          
          headerLeft: () => (<BackComponent />),
          headerLeftContainerStyle: {left: 20},
          }
          } 
          />
      <Tabs.Screen
        name="setting"
        options={
          { 
            tabBarStyle: 
            { 
              display: "none" 
            }, 
          headerLeft: () => (<BackComponent />),
          headerLeftContainerStyle: {left: 20},
        }
      }
      />
    </Tabs>
  );

}

