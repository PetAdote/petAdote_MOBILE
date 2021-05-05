import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useState } from "react";

let meuAccessToken = async () => {

    const accessToken = await axios.get('http://179.213.88.128:3000/autenticacoes/apis/login?cliente=2&senha=petMobile')
        .then((response) => {
            console.log("Ok, aqui estão seus tokens: ", response.data);
            return response.data.client_accessToken;
        })
        .catch((error) => {
            console.log("Erro, tem alguma coisa dando de errado aqui: ", error);
        });
        
        return accessToken;

}

export default meuAccessToken;