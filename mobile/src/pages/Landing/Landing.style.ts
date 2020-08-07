import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain', // Resize with correct proportions
  },
  title: {
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    justifyContent: 'space-between',
    width: '48%',
    height: 150,
    padding: 24,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },
  totalConnections: {
    maxWidth: 150,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#d4c2ff',
    lineHeight: 20,
  },
});

export default styles;
