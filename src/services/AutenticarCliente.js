import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useState } from "react";

let meuAccessToken = async () => {

    const accessToken = await axios.get('http://179.213.88.128:3000/autenticacoes/apis/login?cliente=2&senha=petMobile')
        .then((response) => {
            console.log('----------------------------------------------------------------------------');
            console.log('[AutenticarClient.js]');
            console.log("Ok, aqui estão seus tokens: ", response.data);
            console.log('----------------------------------------------------------------------------');
            return response.data.client_accessToken;
        })
        .catch((error) => {
            console.log('----------------------------------------------------------------------------');
            console.log('[AutenticarClient.js]');
            console.log("Erro, tem alguma coisa dando de errado aqui: ", error);
            console.log('----------------------------------------------------------------------------');
        });
        
        return accessToken;

}

export default meuAccessToken;