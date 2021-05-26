import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'

function BotaoPropor() {

        return (

            <TouchableOpacity style={styles.fundoBotao}>

                <Text style={styles.textoBotao}>Propor</Text>

            </TouchableOpacity>

        )
    
}

const styles = StyleSheet.create({
    fundoBotao: {
        height: 30,
        width: 100,
        bottom: 200,
        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textoBotao: {
        fontSize: 20,
        color: 'black',
    }

})

export default BotaoPropor