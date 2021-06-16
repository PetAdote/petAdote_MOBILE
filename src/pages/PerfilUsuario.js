import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Alert } from 'react-native'
import PublicacoesDoPerfil from '../component/PubicacoesPerfil'
import { getUserTokensSave } from '../utils/storeUserToken'
import { getTokensSave } from '../utils/storeInactiveTokens'
import { getRespostaApi } from '../utils/storeRespostaApiLogin'
import axios from 'axios'
import SyncStorage from 'sync-storage';

//import { SyncInstance } from '../utils/syncStorageInstance'

//import { SyncInstance } from '../utils/syncStorageInstance'

    /**
     * Comentário sobre o problema de assincronicidade:
     * 
     * 1 - Quando se carrega pela primeira vez a tela de perfil do usuário a reposta da api é listada mas não é armazenada dentro da state respostaApi através do método setResposta api,
     * isso significa que a função do asyncstorage esta funcionando perfeitamente, oque ocorre é que não é armazenado dentro da state no primeiro reload, por causa disso não há como checar
     * os dados da respostaApi na estrutura condicional feita para checar se o úsuário é ativo ou não e por isso não retorna o token pois o if não é acessado.
     * 
     * 2 - Na segunda vez que essa tela é carregada o resultado da operação feita pelo metodo getRespostaApi é armazenado dentro da state respostaApi e por isso o token é acessado só que dessa
     * vez o token não é armazendado fazendo com que a requisição seja negada por não possuir um token de acesso válido.
     * 
     * 3 - Agora na terceira vez o acesso é feito com sucesso isso ocorre porque depois da pagina carregar duas vezes a state de resposta e de token foram carregadas com sucesso com os dados de
     * acesso necessário, assim posso dizer que esse erro está ocorrendo devido a um erro na armazenagem dos valores no hooks, eu acho.
     * 
     * TESTE:
     * 
     * 1 - Tentei dividir cada função que chama algo de dentro do asyncStorage em hooks de efeito useEffect diferentes e nada, o mesmo erro persistiu.
     * 
     * 2 -Tentei usar o try catch da seguinte maneira:
     * 
        const getResposta = async () => {
            try {
                const getData = await AsyncStorage.getItem('RespostaApi')
                setRespostaApi(getData)
                console.log("RESPOSTA DA API ----------------->", respostaApi)
            }catch(e) {
                console.log("ERRO AO PEGAR DADOS DO ASYNCSTORAGE")
            }
        }
        getResposta()

        não deu certo, o resultado foi praticamente o mesmo.

        3 - Ao invés de functional components com o hooks aplicado para poder solucionar o problema tentei utilizar um class component com as states normais do método constructor. E nada
        ao invés de retornar algo depois de três vezes ele simplesmente persiste o mesmo erro para sempre sem gravar dentro da state algo.

        VOLTANDO A COMENTAR SOBRE O PROBLEMA EM SÍ

        1- Pelo que percebi a primeira vez que entro no perfil a resposta é pega pelo async storage mas não é armazenada dentro do estado(state)

        2- Pela segunda vez a resposta consegue ser armazenada e por causa disso é possível verificar o token e se o usuário é ativo assim pode-se instânciar o token do usuário dentro da state
        que é salvo dentro da state token.

        3- Pela terceira vez que o código é salvo e ele é atualizado o resultado da request é 200, ou seja, sucesso pois na terceira vez o token já esta armazenado e é possível fazer a request,
        ou sejá o token foi armazenado no segundo reload e no terceiro ele é usado.

        Assim pode-se concluir que o problema de assincronicidade aqui funciona da seguinte maneira: é necessário achar primeiro uma forma de armazenar tanto a resposta quanto o token dentro
        da state de forma imediata para poder fazer essa requisição dar certo.

        Assim talvez seja necessário um banco de dados síncrono para o async storage tal como o sync-storage (https://github.com/raphaelpor/sync-storage)

        4- Tentei com o syncStorage, é meio caminho andado! com o sync storage eu só preciso salvar uma vez para o resultado da requisição ser 200, isso significa que estou mais perto da solu
        ção usando algo mais sincrono doque assíncrono no caso das requisições get, talvez instanciar esses tokens na memória usando o syncStorage foi uma boa idéia.

        5- Percebi que todo conteúdo do data do syncStorage é instanciado como um array na memória, talvez se eu pegar esse array e encontrar uma forma de transforma-lo num objeto(JSON), 
        seja possível pegar partes desse objeto para usar na aplicação, tais como o token e a resposta da API mas mesmo assim preciso carregar outra vez a pagina através do salvamento para poder
        ter o request autorizado pela rest.

        OS CÓDIGO ABAIXO NÃO DERAM CERTO:

        
        
        getRespostaApi('RespostaApi')
        .then((result) => {
            console.log("============================================================================================================================================")
            console.log("RESPOSTA API ==>", result)
            console.log("============================================================================================================================================")
            //SyncStorage.set('resultAPI', result);
            setRespostaApi(result)
        })

        //setRespostaApi(SyncStorage.get('resultAPI'));
        
        if(respostaApi.inactiveUser_accessToken){
            //setToken(respostaApi.inactiveUser_accessToken)
            getTokensSave('userInactiveToken')
            .then((result) => {
                console.log("============================================================================================================================================")
                console.log("TOKEN INATIVO ==>", result)
                console.log("============================================================================================================================================")
                //SyncStorage.set('tokenINATIVO', result);
                setToken(result)
                //setToken(SyncStorage.get('tokenINATIVO'));
            })
        }
        if(respostaApi.user_accessToken){
            //setToken(respostaApi.user_accessToken)
            getUserTokensSave('userToken')
            .then((result) => {
                console.log("============================================================================================================================================")
                console.log("TOKEN ATIVO ==>", result)
                console.log("============================================================================================================================================")
                //SyncStorage.set('tokenATIVO', result);
                setToken(result)
                //setToken(SyncStorage.get('tokenATIVO'));
            })
        }
        
        
        
        switch(respostaApi == true){
            case respostaApi.inactiveUser_accessToken:
                getTokensSave('userInactiveToken')
                .then((result) => {
                    console.log("TOKEN INATIVO ==>", result)
                    setToken(result)
                })
            break;

            case respostaApi.user_accessToken:
                getUserTokensSave('userToken')
                .then((result) => {
                    console.log("TOKEN ATIVO ==>", result)
                    setToken(result)
                })
            break;
        }
        

        //setToken(respostaApi.user_accessToken || inactiveUser_accessToken)
     *

        6- Percebi que se armazenar o valor recebido de dentro do syncstorage numa variavel (var) ao invés de um estado(state) o valor é acrecentado de imediato, assim acho que isso pode evitar
        os erros de assincronicidade.

        7- Armazenar as informações em variáveis ao invés de armazena-las em estados acaba com o problema da assincronicidade, eu acho, mas cria outro que é o primeiro reload retorna um erro, acho
        que o primeiro load da pagina não captura a resposta da api.

        8- é, checando aqui é isso mesmo, o problema de assincronicidade perciste mesmo com o uso das variáveis, isso porque o primeiro reload não grava as informações no objeto e é necessário
        dar outro reload, porém o syncstorage sempre retorna os valores que estão guardados no asyncstorage, se houvesse uma forma de trabalhar com esses valores diretamente consiguiria extrair
        dele todo resto necessário, eu acho.
     */

export function PerfilUsuario() {

    
    useEffect(() => {

        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            setData(data)
          }
          
/*
        async function getApiResponse() {
            const result = await getRespostaApi('RespostaApi');
            setRespostaApi(result)
        }
        getApiResponse();

        if(respostaApi.inactiveUser_accessToken) {

            async function getTokenInactive() {
                const result = await getTokensSave('userInactiveToken');
                setTokenInactive(result)
            }
            getTokenInactive();
        }

        if(respostaApi.user_accessToken){

            async function getTokenActive() {
                const result = await getUserTokensSave('userToken');
                setTokenActive(result)
            }
            getTokenActive();

        }
        */

        /*
        getRespostaApi()
        .then((result) => {
            setRespostaApi(result)
        })

        if(respostaApi.inactiveUser_accessToken){
            getTokensSave()
            .then((result) => {
                setToken(result)
            }) 
        }

        if(respostaApi.user_accessToken){
        getUserTokensSave()
            .then((result) => {
                setToken(result)
            })
        }
        */

/*
        setRespostaApi(SyncStorage.get('RespostaApi'))
        
        if(SyncStorage.get('RespostaApi').user_accessToken){
            setToken(SyncStorage.get('userToken'))
        }

        if(SyncStorage.get('RespostaApi').inactiveUser_accessToken){
            setToken(SyncStorage.get('userInactiveToken'))
        }
  */     

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

    //var dataSync = JSON;
    //var token = '';
    //var resposta = JSON;
    //var dadosDoPerfil = JSON;
        
        return (

            <View style={styles.background}>

                <ScrollView style={styles.scrollView}>

                <View>
                
                <View>

                    <View>

                        <View style={styles.BannerStyle}>

                            <Image source={require('../../assets/banner.jpg')} style={styles.ImageBannerStyle}/>

                        </View>
                    
                    </View>
            
                </View>
                
                <View style={styles.PosicaoDoPerfil}>

                <View>

                    <Image source={require('../../assets/perfil-vetor2.png')} style={styles.PerfilVetor}/>

                </View>
            

                </View>

                <View>

                    <Text style={styles.NomePerfil}>{dadosDoPerfil.primeiro_nome} {dadosDoPerfil.sobrenome}</Text>

                </View>

                <View >

                    <Text style={styles.Seguidores}>{dadosDoPerfil.qtd_seguidores}</Text>

                </View>

                <View>

                    <Text style={styles.Seguindo}>{dadosDoPerfil.qtd_seguidos}</Text>

                </View>

                <View>

                    <View style={styles.PosicaoSeguir}>

                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.TextoSeguir}>Seguir</Text>
                        </TouchableOpacity>
                    
                    </View>

                </View>

            </View>

            <View>

                <View style={styles.EstiloDetalhes}>

                    <Text style={styles.EstiloTextoDetalhes}>{dadosDoPerfil.descricao}</Text>

                </View>

            </View>


            <View style={styles.alinharAnuncioMomento}>

                <View style={styles.BotaoAnuncio}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Publicações</Text>

                    </TouchableOpacity>

                </View>


                <View style={styles.BotaoMomento}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Animais</Text>

                    </TouchableOpacity>
                    
                </View>

            </View>

            <View style={styles.caixaPublicacoes}>

                <ScrollView nestedScrollEnabled = {true}>

                    <View style={styles.flexBoxPosatagem}>

                        <View style={styles.alinharPubicacaoAEsquerda}>

                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>

                        </View>

                        <Text>     </Text>
                        
                        <View style={styles.alinharPubicacaoADireita}>

                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>

                        </View>
                    
                    </View>

                </ScrollView>

            </View>

                </ScrollView>

            </View>
        )
   
}

const styles = StyleSheet.create({

    background2:{
        backgroundColor: '#93c47d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background:{
        backgroundColor: '#93c47d',
        alignItems: 'center',
      },
    scrollView:{
        maxHeight: 1150,
    },
    PosicaoDoPerfil: {
        left: 256,
        bottom: 150,
    },
    NomePerfil: {
        fontSize: 20,
        margin: 50,
        bottom: 510,
        color: 'white',
    },
    Seguidores: {
        fontSize: 10,
        margin: 50,
        bottom: 530,
        color: 'white',
    },
    Seguindo: {
        fontSize: 10,
        left: 140,
        bottom: 594,
        color: 'white',
    },
    flexBox: {
        flexDirection: 'row',
    },
    PerfilVetor: {
        maxHeight: 49,
        maxWidth: 49,
    },
    BannerStyle: {
        marginRight: 30,
        marginLeft: 30,
    },
    ImageBannerStyle: {
        width: 300,
        height: 176,
    },
    botao: {
        backgroundColor: '#93c47d',
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextoSeguir: {
        fontSize: 20,
    },
    PosicaoSeguir: {
        left: 250,
        bottom: 616,
    },
    EstiloDetalhes: {
        backgroundColor: '#8e7cc3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 130,
        marginRight: 30,
        marginLeft: 30,
        bottom: 609,
    },
    EstiloTextoDetalhes: {
        fontSize: 20,
    },
    BotaoAnuncio: {
        backgroundColor: '#6fa8dc',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BotaoMomento: {
        backgroundColor: '#6fa8dc',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextoAnuncioMomento: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    alinharAnuncioMomento: {
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        bottom: 610,
    },
    caixaPublicacoes: {
        backgroundColor: '#674ea7',
        width: 300,
        height: 500,
        marginRight: 30,
        marginLeft: 30,
        bottom: 610,
    },
    alinharPubicacaoAEsquerda: {
        marginLeft: 15,
        marginTop: 40,
    },
    alinharPubicacaoADireita: {
        marginLeft: 15,
        marginTop: 40,
    },
    flexBoxPosatagem: {
        flexDirection: 'row',
    },

})

export default PerfilUsuario