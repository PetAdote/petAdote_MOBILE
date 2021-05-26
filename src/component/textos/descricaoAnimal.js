import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

function DescicaoDoAnimal() {


        return (

            <View style={styles.EstiloDetalhes}>

                <ScrollView>

                    <View>


                        <Text style={styles.descricaoTexto}>DESCRIÇÃO</Text>


                    </View>

                </ScrollView>          

            </View>
            
        )
}

const styles = StyleSheet.create({

    EstiloDetalhes: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 340,
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
    descricaoTexto: {

    },

})

export default DescicaoDoAnimal