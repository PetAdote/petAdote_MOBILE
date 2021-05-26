import React from 'react'
import { StyleSheet, Image, TouchableOpacity} from 'react-native'

function VotaoDeVoltar() {


        return (


            <TouchableOpacity>

                <Image source={require('../../../assets/botao-voltar.png')} style={styles.botaoVoltar}/>

            </TouchableOpacity>
            
            
        )
}

const styles = StyleSheet.create({

    botaoVoltar: {
        maxHeight: 70,
        maxWidth: 70,
    },

})

export default VotaoDeVoltar