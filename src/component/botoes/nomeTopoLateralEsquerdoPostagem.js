import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import SyncStorage from 'sync-storage';

function NomeELogo() {

    const [data, setData] = useState(JSON);

    useEffect(() => {
        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            setData(data)
          }

        syncStorage();
        
    }, []);

        return (

        <View style={styles.AlinharBotaoEsquerdo}>

            <View style={styles.BotaoMais}>

                <Image source={require('../../../assets/logo.png')} style={styles.PerfilVetor}/>

            </View>
            <View style={styles.BotaoMais}>

                <ScrollView horizontal={true}>

                    <Text style={styles.nome}>{SyncStorage.get('LoginData').primeiro_nome} {SyncStorage.get('LoginData').sobrenome}</Text>

                </ScrollView>

            </View>

        </View>
        
            
        )
    
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 15,
        marginLeft: 10,
        color: 'yellow',
    },
    
    BotaoMais:{
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        //height: '50%',
        //width: 40,
    },
    AlinharBotaoEsquerdo: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    AjustarLinha: {
        fontSize: 4,
    },
    PerfilVetor: {
        height: 30,
        width: 30,
    },

})

export default NomeELogo