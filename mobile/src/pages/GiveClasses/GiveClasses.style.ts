import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 190,
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    color: '#fff',
    lineHeight: 37,
  },
  description: {
    maxWidth: 260,
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#d4c2ff',
    lineHeight: 26,
  },
  okButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginVertical: 40,
    backgroundColor: '#04d361',
    borderRadius: 8,
  },
  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
