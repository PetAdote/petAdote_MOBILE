import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from './FormRow'

function PublicacoesDoPerfil() {

        return (

                <View>

                    <TouchableOpacity>

                        <Image source={require('../../assets/imagemPostagemX.png')} style={styles.alinharPubicacao}/>

                    </TouchableOpacity>

                </View>
        
        )
    
}

const styles = StyleSheet.create({
    alinharPubicacao: {
        width: 120,
        height: 120,
        marginBottom: 40,

    },
})

export default PublicacoesDoPerfil