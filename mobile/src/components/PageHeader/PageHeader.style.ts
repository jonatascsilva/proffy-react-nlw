import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 170,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#fff',
    lineHeight: 32,
    marginVertical: 40,
  }
});

export default styles;
