import React from 'react'
import { StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function VotaoDeVoltar() {

    const navigation = useNavigation(); 

        return (


            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../../../assets/botao-voltar.png')} style={styles.botaoVoltar}/>

            </TouchableOpacity>
            
            
        )
}

const styles = StyleSheet.create({

    botaoVoltar: {
        margin: 20,
        height: 50,
        width: 50,
    },

})

export default VotaoDeVoltar