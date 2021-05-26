import React from 'react'
import { StyleSheet, Text} from 'react-native'

function NomeDoUsuario() {

        return (

            <Text style={styles.nome}>Fulano</Text> 
            
        )
    
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 20,
        marginLeft: 20,
    },

})

export default NomeDoUsuario