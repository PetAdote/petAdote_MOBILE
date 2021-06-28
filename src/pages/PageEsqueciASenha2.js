import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { getTokensSave } from '../utils/storeInactiveTokens'
import { useNavigation } from '@react-navigation/native'; 
import meuAccessToken from "../services/AutenticarCliente";

export function RecuperacaoPage2(){

    const navigation = useNavigation();

    useEffect(() => {

        meuAccessToken()
        .then((result) => {
            setToken(result)
        })
        .catch((error) =>{
            console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            console.log("Opa, temos um probleminha aqui: ", error.response)
            console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
        })
/*
        async function getToken() {
            const result = await getTokensSave('userInactiveToken');
            setToken(result)
        }

        getToken();
        */
    }, [])

    const [token, setToken] = useState('');
    const [tokenEmail, setTokenEmail] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [resposta, setResposta] = useState(JSON);

    function enviarEmail(){

        console.log("=============================================================================================================================================")

        console.log("O TOKEN É ESSE => ", token) 

        axios.patch('http://179.213.88.128:3000/contas/recuperacao/',
            {
                email: emailUsuario,
                tokenRecuperacao: tokenEmail,
            },
            {
                headers : {
                  'Authorization': `Bearer ${token}`
                }
            }
        )
        .then((response) =>{
            setResposta(response)
            console.log(response);

            navigation.navigate('LoginPetAdote')

                Alert.alert(
                'Pronto!',
                "Uma nova senha foi enviada para o email informado, use ela para entrar e colocar outra senha do seu gosto.",
                [
                    { text: "Ok", onPress: () => console.log("SIM Pressed")},
    
                ]
                );   

          })
          .catch((error) => {
            console.log("Temos um problema ==>", error);

            /*
            if(error.data.code == 'TOKEN_NOT_FOUND'){
                Alert.alert(
                'Nenhum token de ativação foi solicitado para esta conta',
                "Essa conta de usuario não posui uma solicitação de ativação!",
                [
                    { text: "SIM", onPress: () => console.log("SIM Pressed")},
                    { text: "NÃO", onPress: () => console.log("NÃO Pressed") }
    
                ]
                );   
            }
            
            if(error.data.code == 'ACCESS_NOT_ALLOWED'){
                Alert.alert(
                'Acesso negado',
                "Você não está autorizado para utilizar esta chamada!",
                [
                    { text: "SIM", onPress: () => console.log("SIM Pressed") },
                    { text: "NÃO", onPress: () => console.log("NÃO Pressed") }
                ]
                );   

            }
          */

          })

    }

        return (


            <View style={styles.background}>
                
                <Image source={require('../../assets/logo.png')}/>

                <Text>                    </Text>
                <Text>                    </Text>
                <Text>                    </Text>

                <Text style={styles.textTexto}>Ensira abaixo o código de recuperação</Text>
                <Text style={styles.textTexto}>que foi enviado para o seu email e o email</Text>
                <Text style={styles.textTexto}>em que deseja receber sua nova senha temporaria.</Text>

                <Text>                    </Text>

                <TextInput
                    style={styles.input}
                    value={emailUsuario}
                    placeholder={"O email aqui!"}
                    onChangeText={(emailUsuario) => setEmailUsuario(emailUsuario)}
                />

                <Text>                    </Text>

                <Text>                    </Text>

                <TextInput
                    style={styles.input}
                    value={tokenEmail}
                    placeholder={"O código aqui!"}
                    onChangeText={(tokenEmail) => setTokenEmail(tokenEmail)}
                />

                <Text>                    </Text>

                <TouchableOpacity style={styles.confirmarBotao} onPress={() => {enviarEmail();}}>

                    <Text style={styles.textConfirmarBotao}>Confirmar</Text>

                </TouchableOpacity>

            </View>
            
        )
    
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

export default RecuperacaoPage2