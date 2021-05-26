import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

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
        marginLeft: 120,
    },

})

export default MenuDetalhesAnuncio