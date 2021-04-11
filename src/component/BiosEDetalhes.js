import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function BiosDetalhesUsuario() {


        return (

            <View>

                <View style={styles.EstiloDetalhes}>

                    <Text style={styles.EstiloTextoDetalhes}>Bios e detalhes</Text>

                </View>


            
            </View>
            
        )
}

const styles = StyleSheet.create({

    EstiloDetalhes: {
        backgroundColor: '#8e7cc3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 130,
        marginRight: 30,
        marginLeft: 30,
        bottom: 609,
    },
    EstiloTextoDetalhes: {
        fontSize: 20,
    },

})

export default BiosDetalhesUsuario