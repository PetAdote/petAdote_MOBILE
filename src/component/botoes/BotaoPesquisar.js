import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function BotaoPesquisar() {

        return (


            <TouchableOpacity style={styles.botao}>
                <Image source={require('../../../assets/vetor-pesquisar.png')} style={styles.Icone}/>
            </TouchableOpacity>
            
            
        )
    
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#b6d7a8',
        width: 130,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icone: {
        height: 40,
        width: 40,
    },
})

export default BotaoPesquisar