import React from 'react'
import { StyleSheet, Image, View} from 'react-native'

function ImagemDoAnimalDoAnuncio() {

        return (

            <View style={styles.ViewImagemAnimal}>

                <Image source={require('../../../assets/imagemPostagemX.png')} style={styles.imagemAnimal}/>

            </View>

        )
    
}

const styles = StyleSheet.create({
    imagemAnimal: {
        height: 180,
        width: 340,
        bottom: 260,
    },

})

export default ImagemDoAnimalDoAnuncio