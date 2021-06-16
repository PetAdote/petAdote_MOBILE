import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

function BotaoHome() {

  

        return (


            <View style={styles.AlinharBotaoEsquerdo}>

                <TouchableOpacity style={styles.BotaoMais}>

                    <Image source={require('../../../assets/home.png')} style={styles.PerfilVetor}/>
                    <Text style={styles.AjustarLinha}> </Text>
                    
                </TouchableOpacity>

            </View>
            
            
        )
    
}

const styles = StyleSheet.create({

    BotaoMais:{
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    AjustarLinha: {
        fontSize: 4,
    },
    PerfilVetor: {
        height: 48,
        width: 48,
    },
})

export default BotaoHome