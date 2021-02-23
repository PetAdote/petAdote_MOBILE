import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>


        <Image source={require('./assets/logo.png')}/>

        <Text style={styles.petAdoteLogo}>PetAdote</Text>

        </View>

        <View style={styles.containerInputs}>

          <Text style={styles.textLogin}>Email</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="Digite aqui"
            autoCorrect={false}
            onChangeText={()=>{}}
          />

          <Text style={styles.textLogin}>Senha</Text>
          <TextInput
            style={styles.inputSenha}
            placeholder="Digite aqui"
            autoCorrect={false}
            onChangeText={()=>{}}
          />
          <TouchableOpacity>
            <Text style={styles.submitTextEsqueci}>Esqueci a senha</Text>
          </TouchableOpacity>

        </View>


          <View style={styles.btnSubmit}>
            
          <TouchableOpacity style={styles.btnAcessar}>
            <Text style={styles.submitTextAcessar}>Acessar</Text>
          </TouchableOpacity>
        
          <Text>                             </Text>

          <View style={styles.submitTextCriarConta}>
          <TouchableOpacity>
            <Text>Não tem conta?</Text>
            <Text>Crie uma aqui!</Text>
            </TouchableOpacity>
          </View>

        </View>
    </KeyboardAvoidingView>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

const styles = StyleSheet.create({ 

  background:{
    flex:1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#621299'
},

  containerLogo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
  container:{
    flex:1,
    //alignItems: 'center',
    //justifyContent: 'center',
    width: '100%'
},
  inputEmail:{
    backgroundColor: '#FFF',
    width: '70%',
    color: '#222',
    fontSize: 17,
    padding: 5,
},
  inputSenha:{
    backgroundColor: '#FFF',
    width: '70%',
    color: '#222',
    fontSize: 17,
    padding: 5,

},

  btnSubmit: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  
  submitTextAcessar: {
    backgroundColor: '#06BE00',
    color: '#FFF',
    height: 35,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
},
submitTextCriarConta: {
  flex:1, 
  flexDirection:'row',
  color: '#7AF476',
  fontSize: 38,
},
  textLogin: {
    color: '#FFF',
    fontSize: 20,
    margin: 5,
},
  containerInputs: {
    flex: 1,
    width: '100%',
    margin: 20,
},
submitTextEsqueci: {
  color: '#7AF476',
  fontSize: 18,
},
petAdoteLogo: {
  fontSize: 30,
},

 });
