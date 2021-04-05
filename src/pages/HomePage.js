import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'


export class Home extends React.Component {

    constructor(props){

        super(props)
      }    

    render() {

        return (

            <View style={styles.background}>

                <KeyboardAvoidingView>

                    <ScrollView>

                        

                    </ScrollView>

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
    
})

export default Home
