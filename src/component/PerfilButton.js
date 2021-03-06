import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'
import { useNavigation } from '@react-navigation/native';
import FotoPerfil from '../component/FotoDePerfil'

function BotaoPerfil() {

    const navigation = useNavigation(); 

        return (


            <View style={styles.AlinharBotaoEsquerdo}>

                <TouchableOpacity style={styles.BotaoMais} onPress={() => {navigation.navigate('PerfilDoUsuario');}}>

                    <FotoPerfil style={styles.PerfilVetor}/>
                    
                </TouchableOpacity>

            </View>
            
            
        )
}

const styles = StyleSheet.create({

    BotaoMais:{
        backgroundColor: '#b4a7d6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: 45,
    },
    Mais: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    AlinharBotaoEsquerdo: {
        marginRight: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    PerfilVetor: {
        maxHeight: 49,
        maxWidth: 49,
    },
})

export default BotaoPerfil