import axios from 'axios'

const axiosInstanceAutenticarCliente = axios.create({
    baseURL: 'http://179.213.88.128:3000/autenticacoes/apis/login?cliente=2&senha=petMobile',
})

export default axiosInstanceAutenticarCliente