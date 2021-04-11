import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function PublicacoesAnimais() {

  

        return (

            <View style={styles.alinharAnuncioMomento}>

                <View style={styles.BotaoAnuncio}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Publicações</Text>

                    </TouchableOpacity>

                </View>


                <View style={styles.BotaoMomento}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Animais</Text>

                    </TouchableOpacity>
                    
                </View>

            </View>

        )
    
}

const styles = StyleSheet.create({
    BotaoAnuncio: {
        backgroundColor: '#6fa8dc',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BotaoMomento: {
        backgroundColor: '#6fa8dc',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextoAnuncioMomento: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    alinharAnuncioMomento: {
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        bottom: 610,
    },
})

export default PublicacoesAnimais