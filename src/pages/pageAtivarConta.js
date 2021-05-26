import axios from 'axios'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import loginReducer from '../redux/login/loginReducer'
import store from '../redux/store'

export class AtivarContaPage extends React.Component {

    constructor(props){
        super(props)
            this.state = {

                emailToken: '',

            }

    }

    enviarToken(){

        console.log("O TOKEN É ESSE ==> ", store.getState(loginReducer(resposta.inactiveUser_accessToken)))

        axios.patch('http://179.213.88.128:3000/contas/ativacao/' + this.state.emailToken,
            {

            },
            {
                headers : {
                  'Authorization': `Bearer ${store.getState(loginReducer(resposta.inactiveUser_accessToken))}`
                }
            }
        )
        .then((response) =>{
            console.log(response);
          })
          .catch((error) => {
            console.log("Temos um problema ==>", error.response);
          })
    }

    onChangeEmailToken(emailToken){
        this.setState({ emailToken });
    }

    render() {

        return (


            <View style={styles.background}>
                
                <Image source={require('../../assets/logo.png')}/>

                <Text>                    </Text>
                <Text>                    </Text>
                <Text>                    </Text>


                <Text style={styles.textTexto}>Ensira abaixo o código que te enviamos</Text>
                <Text style={styles.textTexto}>pelo email que você cadastrou.</Text>

                <Text>                    </Text>

                <TextInput
                    style={styles.input}
                    value={this.state.emailToken}
                    onChangeText={(valueEmailToken) => this.onChangeEmailToken(valueEmailToken)}
                />

                <Text>                    </Text>

                <TouchableOpacity style={styles.confirmarBotao} onPress={() => {this.enviarToken();}}>

                    <Text style={styles.textConfirmarBotao}>Confirmar</Text>

                </TouchableOpacity>

            </View>
            
        )

    }
    
}

const styles = StyleSheet.create({

background:{
    flex:1,
    backgroundColor: '#674ea7',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
input:{
    backgroundColor: '#FFF',
    width: '70%',
    color: '#222',
    fontSize: 17,
    padding: 5,
  },
confirmarBotao: {
    backgroundColor: '#FFF',
    height: 38,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
},
textConfirmarBotao: {
    color: '#000000',
    fontSize: 18,
},
textTexto: {
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    fontSize: 18,
}
})

export default AtivarContaPage