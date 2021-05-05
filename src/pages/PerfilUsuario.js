import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import BarraMomentos from '../component/BarraMomentos'
import FormRow from '../component/FormRow'
import BotaoPesquisar from '../component/BotaoPesquisar'
import CaixaDePostagem from '../component/CaixaDePostagem'
import AnuncioMomentos from '../component/BarraAnunciosMomentos'
import Banner from '../component/BannerUsuario'
import BiosDetalhesUsuario from '../component/BiosEDetalhes'
import PublicacoesAnimais from '../component/BarraPublicacoesAnimaisPerfilUsuario'
import CaixaPublicacoes from '../component/CaixaPublicacoesPerfil'

export class PerfilUsuario extends React.Component {

    constructor(props){

        super(props)
      }    

    render() {

        return (

            <View style={styles.background}>

                <ScrollView style={styles.scrollView}>

                    <Banner/>
                    <BiosDetalhesUsuario/>
                    <PublicacoesAnimais/>
                    <CaixaPublicacoes/>

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    background:{
        backgroundColor: '#93c47d',
        alignItems: 'center',
      },
    scrollView:{
        maxHeight: 1150,
    },

})

export default PerfilUsuario
