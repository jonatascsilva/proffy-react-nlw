import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem/TeacherItem';

import styles from './Favorites.style';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  // Load favorites every time that Favorites's tab was clicked
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited // True
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
