import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  contextImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    alignItems: 'center',
    width:'100%',
  },

  resultImc: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    width: '100%',
  },

  numberImc: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,

  },

  information:{
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold',
    
  },

  boxShareButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },

  share:{
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
    padding: 30,
    marginBottom: 10,
    marginTop: 10,
  },

  textShare:{
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 30,
  }
})

export default styles