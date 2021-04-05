import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import BarraMomentos from '../component/BarraMomentos'
import FormRow from '../component/FormRow'
import BotaoPesquisar from '../component/BotaoPesquisar'

export class Home extends React.Component {

    constructor(props){

        super(props)
      }    

    render() {

        return (

            <View style={styles.background}>

                <KeyboardAvoidingView>

                    <View style={styles.flexBoxStoriesPesquisar}>      

                        <BarraMomentos/>
                        <BotaoPesquisar/>

                    </View>

                </KeyboardAvoidingView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    background:{
        flex:1,
        backgroundColor: '#93c47d',
      },
    flexBoxStoriesPesquisar: {
        flexDirection: 'row',
    },  
    
})

export default Home
