import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../FormRow'

function LogoPetAdote() {

  

        return (


            <View style={styles.AlinharBotaoEsquerdo}>

                <TouchableOpacity style={styles.BotaoMais}>

                    <Image source={require('../../../assets/logo.png')} style={styles.PerfilVetor}/>
                    <Text style={styles.AjustarLinha}> </Text>
                    
                </TouchableOpacity>

            </View>
            
            
        )
    
}

const styles = StyleSheet.create({

    BotaoMais:{
        //backgroundColor: '#b4a7d6',
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
        //marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AjustarLinha: {
        fontSize: 4,
    },
    PerfilVetor: {
        height: 48,
        width: 48,
    },
})

export default LogoPetAdote