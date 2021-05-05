import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function DescicaoDoAnimal() {


        return (

            <View>

                <View style={styles.EstiloDetalhes}>

                    <Text style={styles.descricaoTexto}>DESCRIÇÃO</Text>

                </View>
            
            </View>
            
        )
}

const styles = StyleSheet.create({

    EstiloDetalhes: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 580,
        height: 130,
        marginRight: 30,
        marginLeft: 30,
        bottom: 260,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    EstiloTextoDetalhes: {
        fontSize: 50,
    },

})

export default DescicaoDoAnimal