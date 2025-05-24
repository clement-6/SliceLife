import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { OPTIONS } from '../../../data/account';
import { useRouter } from 'expo-router';
import { userStyler } from '../../../style/userStyle';

const users = () => {
  const router = useRouter();
  return (
    <View style={userStyler.container}>
      <View style={userStyler.header}>
        <Text style={userStyler.title}>Account</Text>
        <Text style={userStyler.subtitle}>Manage your account details</Text>
      </View>
      <View>
        {OPTIONS.map((option) => (
          <TouchableOpacity
            style={userStyler.optionItem}
            key={option.id}
            onPress={() => router.navigate(option.screen)}
          >
          <View style={userStyler.iconContainer}>
            {option.icon}
          </View>
            <Text style={userStyler.optionText}>
              {option.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default users