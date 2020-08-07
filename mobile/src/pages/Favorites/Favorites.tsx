import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader/PageHeader';

import styles from './Favorites.style';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;
