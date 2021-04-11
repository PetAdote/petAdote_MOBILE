import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function BotaoSeguirUsuario() {

  

        return (

            <View style={styles.PosicaoSeguir}>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.TextoSeguir}>Seguir</Text>
                </TouchableOpacity>
            
            </View>
            
        )
    
}

const styles = StyleSheet.create({
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
})

export default BotaoSeguirUsuario