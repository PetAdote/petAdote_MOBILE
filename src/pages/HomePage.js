import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import BarraMomentos from '../component/BarraMomentos'
import FormRow from '../component/FormRow'
import BotaoPesquisar from '../component/BotaoPesquisar'
import CaixaDePostagem from '../component/CaixaDePostagem'
import AnuncioMomentos from '../component/BarraAnunciosMomentos'

export class Home extends React.Component {

    constructor(props){

        super(props)
      }    

    render() {

        return (

            <View style={styles.background}>

                <ScrollView>

                    <View style={styles.flexBoxStoriesPesquisar}>      

                        <BarraMomentos/>
                        <BotaoPesquisar/>

                    </View>

                    <AnuncioMomentos/>

                    <View style={styles.flexBoxCaixaDePostagem}>

                        <View style={styles.PostagensAEsquerda}>

                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>

                        </View>

                        <Text>            </Text>

                        <View style={styles.PostagensADireita}>

                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>
                            <CaixaDePostagem/>

                        </View>

                    </View>

                </ScrollView>

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
    flexBoxStoriesPesquisar: {
        flexDirection: 'row',
    },  
    flexBoxCaixaDePostagem: {
        flexDirection: 'row',
    },
    PostagensAEsquerda: {
        marginTop: 15,
        marginLeft: 10,
    },
    PostagensADireita: {
        marginTop: 15,
        marginRight: 10,
    },
    
})

export default Home
