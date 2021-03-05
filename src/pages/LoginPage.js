import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import FormRow from '../component/FormRow.js';

export class TelaLogin extends React.Component {

    render() {
        
      return (

        <View style={styles.background}>

          <KeyboardAvoidingView>

          <Text>                      </Text>
          <Text>                      </Text>

            <View style={styles.containerLogo}>

              <Image source={require('../../assets/logo.png')}/>

              <Text style={styles.petAdoteLogo}>PetAdote</Text>

            </View>

            <View style={styles.container}>

              <FormRow>

                <Text style={styles.textLogin}>Email</Text>
                <TextInput placeholder="Digite aqui"
                  autoCorrect={false}
                  onChangeText={()=>{}}
                  style={styles.inputEmail}
                ></TextInput>

              </FormRow>

              <Text>                      </Text>

              <FormRow>

                <Text style={styles.textLogin}>Senha</Text>
                <TextInput placeholder="Digite aqui"
                  autoCorrect={false}
                  onChangeText={()=>{}}
                  style={styles.inputSenha}
                ></TextInput>

              </FormRow>

              <TouchableOpacity>
                <Text style={styles.submitTextEsqueci}>Esqueci a senha</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.acessarCriar}>

              <View>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitTextAcessar}>Acessar      <Image source={require('../../assets/entrar.png')}/></Text>
                </TouchableOpacity>
              </View>

              <Text>                      </Text>

              <View>
                <TouchableOpacity style={styles.btnCriar}>
                  <Text style={styles.submitCriar}>Não tem conta?</Text>
                  <Text style={styles.submitCriar}>Crie uma aqui!</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.acessarCriar}> 

              <TouchableOpacity style={styles.btnLoginGoogle}>
                <Image source={require('../../assets/googleLogo.png')} />
              </TouchableOpacity>

              <Text>                      </Text>

              <TouchableOpacity style={styles.btnLoginFacebook}>
                <Image source={require('../../assets/facebookLogo.png')} />
              </TouchableOpacity>

            </View>

          </KeyboardAvoidingView>

        </View>
    )
  }
}

const styles = StyleSheet.create({ 

  
background:{
  flex:1,
  backgroundColor: '#674ea7',
},
containerLogo:{
  //flex:1,
  justifyContent:'center',
  alignItems:'flex-start',
  margin: 20,
},

container:{
  //flex:1,
  //alignItems: 'center',
  //justifyContent: 'center',
  margin: 20,
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
  backgroundColor: '#009e0f',
  height: 38,
  width: 125,
  alignItems: 'center',
  justifyContent: 'center',
},
submitTextAcessar: {
  color: '#FFF',
  fontSize: 18,
},
submitCriar:{
  color: '#acc8a7',
  fontSize: 18,
},
btnCriar: {
  height: 35,
  justifyContent: 'center',
},
btnLoginGoogle: {
  backgroundColor: '#ea4335',
  height: 38,
  width: 125,
  alignItems: 'center',
  justifyContent: 'center',
},
btnLoginFacebook: {
  backgroundColor: '#3c5a9a',
  height: 38,
  width: 125,
  alignItems: 'center',
  justifyContent: 'center',
},
/*
submitGoogleFacebook:{
  color: '#FFF',
  fontSize: 18,
},
*/
acessarCriar: {
  //flex: 1,
  flexDirection: 'row',
  margin: 20,
},
textLogin: {
  color: '#FFF',
  fontSize: 20,
  margin: 5,
},
/*
containerInputs: {
  width: '100%',
  margin: ,
},
*/
submitTextEsqueci: {
  color: '#acc8a7',
  fontSize: 18,
},
petAdoteLogo: {
  fontSize: 12.5,
  color: '#fefe00',
},

});

export default TelaLogin

/*
        <KeyboardAvoidingView>


          <View>
            <Text>   </Text>
          </View>

          <Text style={styles.textLogin}>Senha</Text>
          <TextInput
            style={styles.inputSenha}
            placeholder="Digite aqui"
            autoCorrect={false}
            onChangeText={()=>{}}
          />

        </View>


    </KeyboardAvoidingView>
    */

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