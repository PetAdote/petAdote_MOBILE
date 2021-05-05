import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FotoPerfil from '../component/FotoDePerfil'
import VotaoDeVoltar from '../component/botaoVoltar'
import MenuDetalhesAnuncio from '../component/menuTresPontosDetalhesAnuncio'
import BarraAzul from '../component/BarraAnimalIcones'
import DescicaoDoAnimal from '../component/descricaoAnimal'

export class paginaAnuncio extends React.Component {

    constructor(props){

        super(props)
      }

    render() {

        return (

                <View style={styles.background}>

                    <View style={styles.cabecarioAnuncio}>

                        <VotaoDeVoltar/>
                        <FotoPerfil/>
                        <Text style={styles.nome}>Fulano</Text>
                        <MenuDetalhesAnuncio/>

                    </View>

                    <View style={styles.barraAnimal}>

                        <BarraAzul/>

                    </View>

                    <View style={styles.ViewImagemAnimal}>

                        <Image source={require('../../assets/imagemPostagemX.png')} style={styles.imagemAnimal}/>

                    </View>

                    <View>
        
                        <DescicaoDoAnimal/>

                    </View>

                </View>
        
        )
    }
}

const styles = StyleSheet.create({

    background:{
        flex:1,
        backgroundColor: '#93c47d',
        alignItems: 'center',

    },
    cabecarioAnuncio: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        bottom: 130,
    },
    nome: {
        fontSize: 20,
        marginLeft: 20,
    },
    barraAnimal: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        bottom: 260,
    },
    imagemAnimal: {
        height: 580,
        width: 580,
    },
    ViewImagemAnimal: {
        bottom: 260,
    },

})

export default paginaAnuncio