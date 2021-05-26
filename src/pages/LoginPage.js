import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import FormRow from '../component/FormRow.js';
import meuAccessToken from "../services/AutenticarCliente";
import axios from 'axios';
import store from '../redux/store'
import { ativarConta } from '../redux/login/loginAction.js';
import { ATIVAR_CONTA } from '../redux/login/loginType.js';

export class TelaLogin extends React.Component {

  componentDidMount(){
    
    meuAccessToken()
    .then((result) => {
        this.state.token = result
    })
    .catch((error) =>{
        console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
        console.log("Opa, temos um probleminha aqui: ", error.response)
        console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    })

}

  //Criar props para ligar para próxima tela.
  constructor(props){
    super(props)

    this.state ={

      email: '',
      senha: '',

      token: '',
      resposta: JSON,

    }
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangeSenha(senha) {
    this.setState({ senha });
  }

  sim(){
    this.props.navigation.navigate('ativaConta')

    store.dispatch(ativarConta(this.state.resposta))

    axios.post('http://179.213.88.128:3000/contas/ativacao/reenvio/' + this.state.resposta.cod_usuario,
      {

      },
      {
        headers : {
          'Authorization': `Bearer ${this.state.resposta.inactiveUser_accessToken}`
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

  entrarNaConta(){

    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log('TOKEN ENVIADO COM SUCESSO ==>', this.state.token)
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

    axios.post('http://179.213.88.128:3000/autenticacoes/usuarios/login', 
    {

      email: this.state.email,
      senha: this.state.senha,

    },
    {

    headers : {
        'Authorization': `Bearer ${this.state.token}`
    }
    })
    .then((response) => {
        console.log(response);

        this.props.navigation.navigate('HomePage');

        console.log("Resposta do exemplo ==> ", response.data.exemplo_ativacao)

        this.state.resposta = response.data

        if(response.data.exemplo_ativacao){
          Alert.alert(
            'Sua conta ainda não foi ativada',
            "Deseja ativa-la agora? se não a ativar só poderar ver as coisas aqui, não podera interagir com nada!",
            [
                { text: "SIM", onPress: () => this.sim() },
                { text: "NÃO", onPress: () => console.log("NÃO Pressed") }

            ]
          );       
        } else {
          
          console.log("Este usuario já confirmou sua conta")

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
                  value={this.state.email}
                  onChangeText={(valueEmail) => this.onChangeEmail(valueEmail)}
                  style={styles.inputEmail}
                ></TextInput>

              </FormRow>

              <Text>                      </Text>

              <FormRow>

                <Text style={styles.textLogin}>Senha</Text>
                <TextInput placeholder="Digite aqui"
                  autoCorrect={false}
                  value={this.state.senha}
                  onChangeText={(valueSenha) => this.onChangeSenha(valueSenha)}
                  style={styles.inputSenha}
                  secureTextEntry={true}
                ></TextInput>

              </FormRow>

              <TouchableOpacity>
                <Text style={styles.submitTextEsqueci}>Esqueci a senha</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.acessarCriar}>

              <View>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitTextAcessar}  onPress={() => {this.entrarNaConta();}}>Acessar      <Image source={require('../../assets/entrar.png')}/></Text>
                </TouchableOpacity>
              </View>

            <Text>                      </Text>

              <View>
                <TouchableOpacity style={styles.btnCriar} onPress={() => {this.props.navigation.navigate('CadastroPetAdote');}}>
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