import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function MenuDetalhesAnuncio() {


        return (


            <TouchableOpacity>

                <Text style={styles.TresPontos}>...</Text>

            </TouchableOpacity>
            
            
        )
}

const styles = StyleSheet.create({

    TresPontos: {
        fontSize: 50,
        fontWeight: 'bold',
        transform: [{ rotate: '90deg'}],
        marginLeft: 350,
    },

})

export default MenuDetalhesAnuncio