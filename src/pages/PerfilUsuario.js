import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import Banner from '../component/BannerUsuario'
import BiosDetalhesUsuario from '../component/textos/BiosEDetalhes'
import PublicacoesAnimais from '../component/caixasEbarras/BarraPublicacoesAnimaisPerfilUsuario'
import CaixaPublicacoes from '../component/caixasEbarras/CaixaPublicacoesPerfil'

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
