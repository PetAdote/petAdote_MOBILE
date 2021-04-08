import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'

function AnuncioMomentos() {

  

        return (

            <View style={styles.alinharAnuncioMomento}>

                <View style={styles.BotaoAnuncio}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Anuncio</Text>

                    </TouchableOpacity>

                </View>


                <View style={styles.BotaoMomento}>

                    <TouchableOpacity>
                        
                        <Text style={styles.TextoAnuncioMomento}>Momentos</Text>

                    </TouchableOpacity>
                    
                </View>

            </View>

        )
    
}

const styles = StyleSheet.create({
    BotaoAnuncio: {
        backgroundColor: '#597eaa',
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BotaoMomento: {
        backgroundColor: '#597eaa',
        width: 180,
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
    },
})

export default AnuncioMomentos