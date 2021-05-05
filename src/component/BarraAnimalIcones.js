import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function BarraAzul() {


        return (


            <View style={styles.fundoAzul}>

                <View style={styles.flexBoxAnimalIcones}>

                    <Text style={styles.textoAnimal}>Animal</Text>
                    <Text>                                                       </Text>
                    <Text style={styles.textoIcones}>ICONES</Text>

                </View>

            </View>
            
            
        )
}

const styles = StyleSheet.create({

    fundoAzul: {
        backgroundColor: '#597eaa',
        height: 50,
        width: 580,
        justifyContent: 'center',
    },
    flexBoxAnimalIcones:{
        flexDirection: 'row',

    },
    textoAnimal: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
    },
    textoIcones: {
        color: 'white',
        fontSize: 20,
    },

})

export default BarraAzul