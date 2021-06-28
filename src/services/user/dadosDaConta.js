import AsyncStorage from '@react-native-community/async-storage'
import SyncStorage from 'sync-storage';
import axios from 'axios'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { saveUserDataLogin } from '../../utils/storeUserDataLogin'
import { useNavigation } from '@react-navigation/native'; 

export function dadosDaContaDoUsuario() {

    const navigation = useNavigation();

    const [dadosDoPerfil, setDadosDoPerfil] = useState(JSON);
    const [data, setData] = useState('');

    useEffect(() => {
        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            setData(data)
          }

        syncStorage();
        
    }, []);

    function confirmar() {

        axios.get('http://179.213.88.128:3000/usuarios/' + SyncStorage.get('RespostaApi').cod_usuario,
        {
            headers : {
            'Authorization': `Bearer ${SyncStorage.get('userToken') || SyncStorage.get('userInactiveToken') /*token*/}`
            }
        }
        )
        .then((response) => {

            saveUserDataLogin('LoginData', response.data.usuario)

            console.log("_________________________________________________________________________________________________________________________________________")
            console.log(response)
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI É O TOKEN ===>", SyncStorage.get('userInactiveToken') || SyncStorage.get('userToken'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI É A RESPOSTA ===>", SyncStorage.get('RespostaApi'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI SÃO OS DADOS DO PERFIL ===>", SyncStorage.get('LoginData'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI SÃO OS DADOS SYNC STORAGE ===>", data)
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("FIM RESPONSE")
            console.log("=========================================================================================================================================")
        })
        .catch((error) => {

            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("Opa, temos um probleminha aqui ==> ", error.response)
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI É O TOKEN ===>", SyncStorage.get('userInactiveToken') || SyncStorage.get('userToken'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI É A RESPOSTA ===>", SyncStorage.get('RespostaApi'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI SÃO OS DADOS DO PERFIL ===>", SyncStorage.get('LoginData'))
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("ESSE AQUI SÃO OS DADOS SYNC STORAGE ===>", data)
            console.log("_________________________________________________________________________________________________________________________________________")
            console.log("FIM ERROR")
            console.log("=========================================================================================================================================")
        })
    
        navigation.navigate('HomePage');

    }

    return (
        <View style={styles.background}>
                
        <Image source={require('../../../assets/logo.png')}/>

        <Text>                    </Text>
        <Text>                    </Text>
        <Text>                    </Text>


        <Text style={styles.textTexto}>Olá, vamos gravar alguns dados no seu dispositivo</Text>
        <Text style={styles.textTexto}>Sempre que você logar verá essa mensagem, apenas toque em "confirmar".</Text>

        <Text>                    </Text>
        <Text>                    </Text>

        <TouchableOpacity style={styles.confirmarBotao} onPress={() => {confirmar();}}>

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

export default dadosDaContaDoUsuario