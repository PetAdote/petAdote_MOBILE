import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'

function PublicacoesDoPerfil() {

        return (

                <View>

                    <TouchableOpacity>

                        <Image source={require('../../assets/imagemPostagemX.png')} style={styles.alinharPubicacao}/>

                    </TouchableOpacity>

                </View>
        
        )
    
}

const styles = StyleSheet.create({
    alinharPubicacao: {
        width: 120,
        height: 120,
        marginBottom: 40,

    },
})

export default PublicacoesDoPerfil