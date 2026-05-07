import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';

export default function Login() {

  return (
    <View style={styles.background}>
      
      <View style = {styles.alignText}>
           <Text style={styles.nameLogin}>Login</Text>
           
           <Text style={styles.description}> Faça login na sua conta existente </Text>
      </View>

      <View style = {styles.WhiteBG}>
         <Text style = {styles.descriptionInput}>Email</Text>
         <TextInput style = {styles.inputText} placeholder='nomedoseuemail@gmail.com'  />
         <Text style = {styles.descriptionInput}>Senha</Text>
         <TextInput style = {styles.inputText} placeholder='coloque sua senha' /> 

         <Button name = "LOGIN" route = "/home" />
      <View style = {styles.textCreateAcoount}>
         
         
         <Text>Não possui uma conta? </Text>
         <Text style = {{ color : '#ef2a39' }} > Criar uma conta </Text>

      </View>

      </View>

    </View>
 )
}

const styles = StyleSheet.create({
  background : {
    flex: 3,
    backgroundColor: '#ef2a39',
  },

  nameLogin: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingBottom : 5,
    
  },
  
  description: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily : 'Semibold',
  },
  
  alignText : {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 120,
    
  },

  WhiteBG : {
    backgroundColor: '#ffffff',
    marginTop : 70,
    paddingTop : 24,
    borderRadius : 10 ,
    flex : 2,
    marginBottom : -30,
  },

  inputText : {
    
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#e4e4e4',
    borderRadius : 10,
    paddingTop : 20,
    paddingLeft : 20,
    paddingBottom : 20,
    textAlign : 'left',
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 10,
    textAlignVertical : 'center',
  },

  descriptionInput : {
    fontFamily : 'monospace',
    paddingTop : 20,
    paddingLeft : 24,
    paddingBottom : 5,
  },
  
  button : {
    backgroundColor : '#ef2a39',
    borderRadius : 5,
    marginRight : 20,
    marginLeft : 20,
    paddingTop : 15,
    paddingBottom : 15,
    marginTop : 34,
   
  },
  buttonText : {
   color : '#ffffff',
   fontFamily : 'monospace',
    textAlign : 'center',
  },

  textCreateAcoount : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    paddingTop : 20,
  },

  

})