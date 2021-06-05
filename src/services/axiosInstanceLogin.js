import axios from 'axios'
import meuAccessToken from './AutenticarCliente'

const axiosInstanceLogin = axios.create({
    baseURL: 'http://179.213.88.128:3000/autenticacoes/usuarios/login',
    headers : { 
        Authorization: `Bearer ${meuAccessToken}` 
    }
});

export default axiosInstanceLogin