import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function FotoPerfil() {


        return (


            <View>

                <Image source={require('../../../assets/perfil-vetor2.png')} style={styles.PerfilVetor}/>

            </View>
            
            
        )
}

const styles = StyleSheet.create({

    PerfilVetor: {
        maxHeight: 49,
        maxWidth: 49,
    },

})

export default FotoPerfil