import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import BarraMomentos from '../component/caixasEbarras/BarraMomentos'
import BotaoPesquisar from '../component/botoes/BotaoPesquisar'
import CaixaDePostagem from '../component/caixasEbarras/CaixaDePostagem'
import AnuncioMomentos from '../component/caixasEbarras/BarraAnunciosMomentos'
import { getUserTokensSave } from '../utils/storeUserToken'
import { useNavigation } from '@react-navigation/native'; 
import SyncStorage from 'sync-storage';

export function Home(){

    const navigation = useNavigation();

    useEffect(() => {

        /*
        async function getToken() {
            const result = await getUserTokensSave('userToken');
            setToken(result)
        }

        getToken();
        */
    }, [])

    //const [token, setToken] = useState('');

        return (

            <View style={styles.background}>

                <ScrollView>

                    <View style={styles.flexBoxStoriesPesquisar}>      

                        <BarraMomentos/>
                        <BotaoPesquisar/>

                    </View>


                    <AnuncioMomentos/>

                    <View style={styles.flexBoxCaixaDePostagem}>

                        <View style={styles.PostagensAEsquerda}>

                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>

                        </View>

                        <Text>            </Text>

                        <View style={styles.PostagensADireita}>

                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>

                        </View>

                    </View>

                </ScrollView>

            </View>
        )
    }

const styles = StyleSheet.create({

    background:{
        flex:1,
        backgroundColor: '#93c47d',
        alignItems: 'center',
      },
    flexBoxStoriesPesquisar: {
        flexDirection: 'row',
    },  
    flexBoxCaixaDePostagem: {
        flexDirection: 'row',
    },
    PostagensAEsquerda: {
        marginTop: 15,
        marginLeft: 10,
    },
    PostagensADireita: {
        marginTop: 15,
        marginRight: 10,
    },

})

export default Home

/**
 *     textoToken:{
        fontSize: 20,
        color: 'white',
    }
    <Text style={styles.textoToken}>{token}</Text>

 */