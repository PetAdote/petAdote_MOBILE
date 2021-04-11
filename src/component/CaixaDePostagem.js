import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function CaixaDePostagem() {

  

        return (


            <View style={styles.estiloPostagem}>

                <View style={styles.BarraMarrom}>

                    <TouchableOpacity>

                        <Text style={styles.pontoPontoPonto}>...</Text>

                    </TouchableOpacity>

                </View>


                <View style={styles.alinharImagem}>

                    <TouchableOpacity style={styles.TouchableimagemPostagem}>

                        <Image source={require('../../assets/imagemPostagemX.png')} style={styles.imagemPostagem}/>

                    </TouchableOpacity>

                </View>
            
            </View>

        )
    
}

const styles = StyleSheet.create({
    BarraMarrom: {
        backgroundColor: '#783f04',
        width: 150,
        height: 20,
        //flexDirection: 'row',
        justifyContent: 'center',
    },
    pontoPontoPonto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'right',
        fontWeight: 'bold',
        marginBottom: 15,
        marginRight: 5,
    },
    imagemPostagem: {
        maxWidth: 150,
        maxHeight: 150,
    }, 
    alinharImagem: {
        justifyContent: 'space-around',
    },
    TouchableimagemPostagem: {
        maxWidth: 150,
        maxHeight: 150,
        marginBottom: 30,
    }, 
})

export default CaixaDePostagem