import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function BotaoAdicionar() {

  

        return (


            <View style={styles.AlinharBotaoEsquerdo}>

                <TouchableOpacity style={styles.BotaoMais}>

                    <Text style={styles.Mais}> + </Text>
                    <Text style={styles.AjustarLinha}> </Text>
                    
                </TouchableOpacity>

            </View>
            
            
        )
    
}

const styles = StyleSheet.create({

    BotaoMais:{
        backgroundColor: '#b4a7d6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: 45,
    },
    Mais: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    AlinharBotaoEsquerdo: {
        marginLeft: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AjustarLinha: {
        fontSize: 4,
    },
})

export default BotaoAdicionar