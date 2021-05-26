import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import ImagemDoBanner from '../component/imagens/ImagemBanner'
import FotoPerfil from '../component/imagens/FotoDePerfil'
import BotaoSeguirUsuario from '../component/botoes/BotaoSeguirPerfil'

function Banner() {


        return (

            <View>
                
                <View>

                    <ImagemDoBanner/>

                </View>
                
                <View style={styles.PosicaoDoPerfil}>

                        <FotoPerfil/>

                </View>

                <View>

                    <Text style={styles.NomePerfil}>Nome</Text>

                </View>

                <View >

                    <Text style={styles.Seguidores}>Seguidores: XX</Text>

                </View>

                <View>

                    <Text style={styles.Seguindo}>Seguindo: XX</Text>

                </View>

                <View>

                    <BotaoSeguirUsuario/>

                </View>

            </View>
            
        )
}

const styles = StyleSheet.create({

    PosicaoDoPerfil: {
        left: 256,
        bottom: 150,
    },
    NomePerfil: {
        fontSize: 20,
        margin: 50,
        bottom: 510,
        color: 'white',
    },
    Seguidores: {
        fontSize: 10,
        margin: 50,
        bottom: 530,
        color: 'white',
    },
    Seguindo: {
        fontSize: 10,
        left: 140,
        bottom: 594,
        color: 'white',
    },
    flexBox: {
        flexDirection: 'row',
    },


})

export default Banner