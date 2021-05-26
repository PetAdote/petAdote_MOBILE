import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import PublicacoesDoPerfil from '../PubicacoesPerfil'

function CaixaPublicacoes() {

        return (

            <View style={styles.caixaPublicacoes}>

                <ScrollView nestedScrollEnabled = {true}>

                    <View style={styles.flexBoxPosatagem}>

                        <View style={styles.alinharPubicacaoAEsquerda}>

                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>

                        </View>

                        <Text>     </Text>
                        
                        <View style={styles.alinharPubicacaoADireita}>

                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>
                            <PublicacoesDoPerfil/>

                        </View>
                    
                    </View>

                </ScrollView>

            </View>

        )
    
}

const styles = StyleSheet.create({
    caixaPublicacoes: {
        backgroundColor: '#674ea7',
        width: 300,
        height: 500,
        marginRight: 30,
        marginLeft: 30,
        bottom: 610,
    },
    alinharPubicacaoAEsquerda: {
        marginLeft: 15,
        marginTop: 40,
    },
    alinharPubicacaoADireita: {
        marginLeft: 15,
        marginTop: 40,
    },
    flexBoxPosatagem: {
        flexDirection: 'row',
    },
})

export default CaixaPublicacoes