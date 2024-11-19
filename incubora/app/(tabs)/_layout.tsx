import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  if (!isAuthenticated) {
    return <Redirect href="/login" />
  }
  else {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Entypo name="home" size={20} color="black" />,
          }}
        />
        <Tabs.Screen
          name='network'
          options={{
            title: 'Networks',
            tabBarIcon: ({ color }) => <FontAwesome5 name="network-wired" size={20} color="black" />,
          }}
        />
        <Tabs.Screen
          name='events'
          options={{
            title: 'Events',
            tabBarIcon: ({ color }) => <Entypo name="calendar" size={20} color="black" />,
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notifications',
            tabBarIcon: ({ color }) => <Ionicons name="notifications" size={20} color="black" />,
          }}
        />
        <Tabs.Screen
          name='hire'
          options={{
            title: 'Hire',
            tabBarIcon: ({ color }) => <FontAwesome5 name="toolbox" size={20} color="black" />,
          }}
        />

      </Tabs>
    );
  }
}
