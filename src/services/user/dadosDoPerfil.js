import axios from "axios"
import { useState, useEffect } from "react"
import { getUserTokensSave } from '../../utils/storeUserToken'
import { getTokensSave } from '../../utils/storeInactiveTokens'
import { getRespostaApi } from '../../utils/storeRespostaApiLogin'
import SyncStorage from 'sync-storage';

export function dadosDaContaDoUsuario() {
      
    useEffect(() => {
        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            setData(data)
          }

        syncStorage();
        
    }, []);

    useEffect(() => {

        Alert.alert(
            'Vamos exibir seu perfil',
            "Clique em 'OK' para exirbir seus dados!",
            [
                { text: "OK", onPress: () => perfilUsuario()},
            ]
          );    

        function perfilUsuario() {

            axios.get('http://179.213.88.128:3000/usuarios/' + SyncStorage.get('RespostaApi').cod_usuario,
            {
                headers : {
                'Authorization': `Bearer ${SyncStorage.get('userToken') || SyncStorage.get('userInactiveToken') /*token*/}`
                }
            }
            )
            .then((response) => {

                setDadosDoPerfil(response.data.usuario);

                console.log("_________________________________________________________________________________________________________________________________________")
                console.log(response)
                console.log("_________________________________________________________________________________________________________________________________________")
                console.log("ESSE AQUI É O TOKEN ===>", SyncStorage.get('userInactiveToken') || SyncStorage.get('userToken'))
                console.log("_________________________________________________________________________________________________________________________________________")
                console.log("ESSE AQUI É A RESPOSTA ===>", SyncStorage.get('RespostaApi'))
                console.log("_________________________________________________________________________________________________________________________________________")
                console.log("ESSE AQUI SÃO OS DADOS DO PERFIL ===>", dadosDoPerfil)
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
                console.log("ESSE AQUI SÃO OS DADOS DO PERFIL ===>", dadosDoPerfil)
                console.log("_________________________________________________________________________________________________________________________________________")
                console.log("ESSE AQUI SÃO OS DADOS SYNC STORAGE ===>", data)
                console.log("_________________________________________________________________________________________________________________________________________")
                console.log("FIM ERROR")
                console.log("=========================================================================================================================================")
            })
        
        }

    }, [])

    const [respostaApi, setRespostaApi] = useState(JSON);
    const [dadosDoPerfil, setDadosDoPerfil] = useState(JSON);
    const [token, setToken] = useState('');
    const [tokenInactive, setTokenInactive] = useState('');
    const [tokenActive, setTokenActive] = useState('');
    const [data, setData] = useState('');

}

export default dadosDaContaDoUsuario