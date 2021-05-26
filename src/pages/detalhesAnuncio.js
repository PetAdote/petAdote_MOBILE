import React from 'react'
import { StyleSheet, View } from 'react-native'
import FotoPerfil from '../component/imagens/FotoDePerfil'
import VotaoDeVoltar from '../component/botoes/botaoVoltar'
import MenuDetalhesAnuncio from '../component/botoes/menuTresPontosDetalhesAnuncio'
import BarraAzul from '../component/caixasEbarras/BarraAnimalIcones'
import DescicaoDoAnimal from '../component/textos/descricaoAnimal'
import NomeDoUsuario from '../component/textos/NomeUsuario'
import ImagemDoAnimalDoAnuncio from '../component/imagens/ImagemAnimal'
import BotaoPropor from '../component/botoes/ProporDetalhesAnuncio'

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
                        <NomeDoUsuario/>
                        <MenuDetalhesAnuncio/>

                    </View>

                    <View style={styles.barraAnimal}>

                        <BarraAzul/>

                    </View>

                    <View>

                        <ImagemDoAnimalDoAnuncio/>

                    </View>

                    <View>
        
                        <DescicaoDoAnimal/>

                    </View>

                    <View>

                        <BotaoPropor/>

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
        width: 360,
    },
    barraAnimal: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        bottom: 260,
    },
    ViewImagemAnimal: {
        bottom: 260,
    },

})

export default paginaAnuncio