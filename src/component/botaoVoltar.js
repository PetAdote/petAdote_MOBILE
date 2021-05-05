import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function VotaoDeVoltar() {


        return (


            <TouchableOpacity>

                <Image source={require('../../assets/botao-voltar.png')} style={styles.botaoVoltar}/>

            </TouchableOpacity>
            
            
        )
}

const styles = StyleSheet.create({

    botaoVoltar: {
        maxHeight: 70,
        maxWidth: 70,
    },

})

export default VotaoDeVoltar