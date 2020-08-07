import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader/PageHeader';

import styles from './TeacherList.style';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;
