import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { getTokensSave } from '../utils/storeInactiveTokens'
import { useNavigation } from '@react-navigation/native'; 

export function AtivarContaPage(){

    const navigation = useNavigation();

    useEffect(() => {
        async function getToken() {
            const result = await getTokensSave('userInactiveToken');
            setToken(result)
        }

        getToken();
    }, [])

    const [token, setToken] = useState('');
    const [emailToken, setEmailToken] = useState('');
    const [resposta, setResposta] = useState(JSON);

    function enviarToken(){

        console.log("=============================================================================================================================================")

        console.log("O TOKEN É ESSE => ", token) 

        axios.patch('http://179.213.88.128:3000/contas/ativacao/' + emailToken,
            {

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
                'Conta ativada com sucesso!',
                "Parabéns, agora su conta foi ativada, viva!",
                [
                    { text: "SIM", onPress: () => console.log("SIM Pressed")},
    
                ]
                );   

          })
          .catch((error) => {
            console.log("Temos um problema ==>", error);

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

          })
    }

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
                    value={emailToken}
                    onChangeText={(emailToken) => setEmailToken(emailToken)}
                />

                <Text>                    </Text>

                <TouchableOpacity style={styles.confirmarBotao} onPress={() => {enviarToken();}}>

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

export default AtivarContaPage