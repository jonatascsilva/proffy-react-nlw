import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList/TeacherList';
import Favorites from '../pages/Favorites/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: Platform.OS === 'ios' ? 84 : 64,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Linha modificada
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20, // Linha modificada
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
