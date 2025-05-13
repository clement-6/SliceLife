import {Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'

export default function BackComponent() {
  return (
    <TouchableOpacity onPress={() => { router.back() }}>
              <Ionicons name="arrow-back" size={30} color='#367cff' />
    </TouchableOpacity>
  )
}