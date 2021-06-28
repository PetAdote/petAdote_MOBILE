import AsyncStorage from '@react-native-community/async-storage'
import SyncStorage from 'sync-storage';
import axios from 'axios'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import meuAccessToken from "../../services/AutenticarCliente";
import { useNavigation } from '@react-navigation/native'; 

export function logout() {

    const navigation = useNavigation();

    const [data, setData] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    useEffect(() => {
        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            //setData(data)
          }

        if(SyncStorage.get('RespostaApi').inactiveUser_accessToken) {
            setData(SyncStorage.get('userInactiveToken'))
        }  
        if(SyncStorage.get('RespostaApi').user_accessToken){
            setData(SyncStorage.get('userToken'))
        }

        if(SyncStorage.get('RespostaApi').inactiveUser_accessToken) {
            setRefreshToken(SyncStorage.get('userInactiveRefreshToken'))
        }  
        if(SyncStorage.get('RespostaApi').user_accessToken){
            setRefreshToken(SyncStorage.get('userRefreshToken'))
        }

        syncStorage();
        
    }, []);

    function fazerLogout() {

        console.log("Token do usuário ativo ==> ", SyncStorage.get('userToken'))
        console.log("Token do usuário inativo ==> ", SyncStorage.get('userInactiveToken'))

        axios.delete('http://179.213.88.128:3000/autenticacoes/usuarios/logout',{  
            headers : {
                'Authorization': `Bearer ${ data }`
            },
            data: {
                refreshToken: refreshToken
            }
        })
        .then((result) => {
            console.log("VOCÊ DESLOGOU! ==> ", result)
            limparStoage();
            navigation.navigate('LoginPetAdote')
        })
        .catch((error) => {
            console.log("ERRO: ", error.response)
        })

    async function limparStoage() {

        
        
    }
}

     return (

        <View style={styles.background}>
                
        <Image source={require('../../../assets/logo.png')}/>

        <Text>                    </Text>
        <Text>                    </Text>
        <Text>                    </Text>


        <Text style={styles.textTexto}>Você quer mesmo sair?</Text>
        <Text style={styles.textTexto}>Se sim aperta "Confirmar".</Text>

        <Text>                    </Text>
        <Text>                    </Text>

        <TouchableOpacity style={styles.confirmarBotao} onPress={() => {fazerLogout();}}>

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

export default logout