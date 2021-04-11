import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function FotoPerfil() {


        return (


            <View>

                <Image source={require('../../assets/perfil-vetor2.png')} style={styles.PerfilVetor}/>

            </View>
            
            
        )
}

const styles = StyleSheet.create({

    PerfilVetor: {
        maxHeight: 49,
        maxWidth: 49,
    },

})

export default FotoPerfil