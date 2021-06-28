import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import FormRow from '../component/FormRow.js';
import meuAccessToken from "../services/AutenticarCliente";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { saveToken } from '../utils/storeInactiveTokens'
import { saveRefreshToken } from '../utils/storeInactiveTokens'
import { saveUserToken } from '../utils/storeUserToken'
import { saveUserRefreshToken } from '../utils/storeUserToken'
import { saveRespostaApi } from '../utils/storeRespostaApiLogin'
import AsyncStorage from '@react-native-community/async-storage'

/*
import { getUserTokensSave } from '../utils/storeUserToken'
import { getTokensSave } from '../utils/storeInactiveTokens'
import { getRespostaApi } from '../utils/storeRespostaApiLogin'
*/

import SyncStorage from 'sync-storage';

export function TelaLogin(){

  const navigation = useNavigation();

  useEffect(() => {

    async function syncStorage(){
      const data = await SyncStorage.init();
      console.log('AsyncStorage is ready!', data);
      setData(data)
    }

    syncStorage();

    meuAccessToken()
    .then((result) => {
        setToken(result)
    })
    .catch((error) =>{
        console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
        console.log("Opa, temos um probleminha aqui: ", error.response)
        console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    })
  }, [])

  const [tokenUser, setTokenUser] = useState('');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [resposta, setResposta] = useState(JSON);

  const [dadosDoPerfil, setDadosDoPerfil] = useState(JSON);
  const [data, setData] = useState('');

  function entrarNaConta(){

    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log('TOKEN ENVIADO COM SUCESSO ==>', token)
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

    axios.post('http://179.213.88.128:3000/autenticacoes/usuarios/login',
    {

      email: email,
      senha: senha,

    },
    {

    headers : {
        'Authorization': `Bearer ${token}`
    }
    })
    .then((response) => {
        console.log(response);

        setResposta(response.data)

        saveRespostaApi('RespostaApi', response.data);

        navigation.navigate('dadosDoUsuario');

        if(response.data.exemplo_ativacao){

            saveToken('userInactiveToken', response.data.inactiveUser_accessToken)
            saveRefreshToken('userInactiveRefreshToken', response.data.inactiveUser_refreshToken)

          Alert.alert(
            'Sua conta ainda não foi ativada',
            "Deseja ativa-la agora? se não a ativar só poderar ver as coisas aqui, não podera interagir com nada!",
            [
                { text: "SIM", onPress: () => sim() },
                { text: "NÃO", onPress: () => console.log("NÃO Pressed") }

            ]
          ); 

        } else {
          
          console.log("Este usuario já confirmou sua conta")

            saveUserToken('userToken', response.data.user_accessToken)
            saveUserRefreshToken('userRefreshToken', response.data.user_refreshToken)

        }

      })
    .catch((error) => {
        console.log('Temos um problema ==>', error.response);

        if(error.response.data.code == "INVALID_USER_CREDENTIALS"){
          Alert.alert(
              'Os dados inseridos são inválidos!',
              "Ensira os dados validos nos campos para acessar sua conta!",
              [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
          );
      }

      if(error.response.data.code == "ACCESS_NOT_ALLOWED"){
        Alert.alert(
            'Requisição não autorizada.',
            "Essa requisição não foi autorizada.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
        
      }

      });
  }

  function sim(){

    navigation.navigate('ativaConta')

    axios.post('http://179.213.88.128:3000/contas/ativacao/reenvio/' + resposta.cod_usuario,
      {

      },
      {
        headers : {
          'Authorization': `Bearer ${resposta.inactiveUser_accessToken}`
        }
      }
    )
    .then((response) =>{
      console.log(response);
    })
    .catch((error) => {
      console.log("Temos um problema ==>", error.response);

      if(error.response.data.code == "ACCESS_NOT_ALLOWED"){
        Alert.alert(
            'Requisição não autorizada.',
            "A requisição não foi aceita",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    if(error.response.data.code == "USER_HAS_ACTIVE_TOKEN"){
      Alert.alert(
          'ATENÇÃO!',
          "Ainda existe um código de ativação vigente para esta conta! cheque seu email.",
          [
              { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
      );
  }
    })

  }

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
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  style={styles.inputEmail}
                ></TextInput>

              </FormRow>

              <Text>                      </Text>

              <FormRow>

                <Text style={styles.textLogin}>Senha</Text>
                <TextInput placeholder="Digite aqui"
                  autoCorrect={false}
                  value={senha}
                  onChangeText={(senha) => setSenha(senha)}
                  style={styles.inputSenha}
                  secureTextEntry={true}
                ></TextInput>

              </FormRow>

              <TouchableOpacity onPress={() => {navigation.navigate('RecuperarSenha');}}>
                <Text style={styles.submitTextEsqueci}>Esqueci a senha</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.acessarCriar}>

              <View>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitTextAcessar}  onPress={() => {entrarNaConta();/*navigation.navigate('HomePage');*/}}>Acessar      <Image source={require('../../assets/entrar.png')}/></Text>
                </TouchableOpacity>
              </View>

            <Text>                      </Text>

              <View>
                <TouchableOpacity style={styles.btnCriar} onPress={() => {navigation.navigate('CadastroPetAdote');}}>
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

const styles = StyleSheet.create({ 
  
  background:{
    flex:1,
    backgroundColor: '#674ea7',
  },
  containerLogo:{
    justifyContent:'center',
    alignItems:'flex-start',
    margin: 20,
  },

  container:{
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
  acessarCriar: {
    flexDirection: 'row',
    margin: 20,
  },
  textLogin: {
    color: '#FFF',
    fontSize: 20,
    margin: 5,
  },
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