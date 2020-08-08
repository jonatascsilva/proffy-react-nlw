import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
  },
  input: {
    justifyContent: 'center',
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  filterButton: {
    flexDirection: 'row',
    width: '100%',
    height: 54,
  },
  filterButtonText: {
    color: '#d4c2ff',
    marginLeft: 16,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 16,
    backgroundColor: '#04d361',
    borderRadius: 8,
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
