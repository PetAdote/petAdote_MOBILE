import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants';
import FormRow from '../component/FormRow'



export class TelaCadastro2 extends React.Component {

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
        console.log(result);
    } 

    _pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            this.setState({image2: result.uri});
        }
        console.log(result);
    } 

    state = {
        image: null,
        image2: null,
    }

    constructor(props){

        super(props)
      }    

    render() {
        
        let { image, image2 } = this.state;

        return (

            <View style={styles.background}>

                <KeyboardAvoidingView>

                    <ScrollView>

                        <View style={styles.flexBoxCabecalho}>

                            <View style={styles.cabecalho}>

                                <Text style={styles.tituloCadastro}>Cadastro 2/3: </Text>

                            </View>

                            <Text>                                 </Text>

                            <View style={styles.logo}>

                                <Image source={require('../../assets/logo.png')}/>

                            </View>

                        </View>

                        <View style={styles.container}>

                            <Text>                                 </Text>

                            <Text style={styles.textCadastro}>Foto (opicional):</Text>

                            <Text>                                 </Text>

                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                            <Text>                                 </Text>

                            <View>
                                <TouchableOpacity style={styles.btnProximoEscolher} onPress={this._pickImage}>
                                    <Text style={styles.submitTextProximoEscolher}>Escolher</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>                                 </Text>


                            <Text style={styles.textCadastro}>Capa (opicional):</Text>

                            <Text>                                 </Text>

                            {image2 && <Image source={{ uri: image2 }} style={{ width: 200, height: 200 }} />}

                            <Text>                                 </Text>

                            <View>
                                <TouchableOpacity style={styles.btnProximoEscolher} onPress={this._pickImage2}>
                                    <Text style={styles.submitTextProximoEscolher}>Escolher</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>                                 </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Bios/Detalhes (opicional):</Text>
                                <AutoGrowingTextInput style={styles.inputBiosDetalhes}/>

                            </FormRow>

                        </View>

                        <Text>                      </Text>

                        <View style={styles.loginProximoEscolher}>


                            <View>
                                <TouchableOpacity style={styles.btnLogin} onPress={() => {this.props.navigation.navigate('LoginPetAdote');}}>
                                    <Text style={styles.submitLogin}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>                                              </Text>

                            <View>
                                <TouchableOpacity style={styles.btnProximoEscolher} onPress={() => {this.props.navigation.navigate('CadastroPetAdote3');}}>
                                    <Text style={styles.submitTextProximoEscolher}>Proximo</Text>
                                </TouchableOpacity>

                                <Text>                                              </Text>

                            </View>

                        </View>

                    </ScrollView>

                </KeyboardAvoidingView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    background:{
        flex:1,
        backgroundColor: '#674ea7',
      },
    
    tituloCadastro: {
        color: '#FFF',
        fontSize: 25,
    },

    cabecalho: {
        marginLeft: 12,
        marginTop: 30,
    },

    logo: {
        marginTop: 30,
    },

    flexBoxCabecalho: {
        flexDirection: 'row',
    },
    textCadastro: {
        color: '#FFF',
        fontSize: 20,
    },
    container: {
        margin: 12,
        width: '100%',
    },
    textEspacos: {
        fontSize: 5,
    },
    loginProximoEscolher: {
        marginLeft: 12,
        flexDirection: 'row',
    },
    btnProximoEscolher: {
        backgroundColor: '#FFF',
        height: 38,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitTextProximoEscolher: {
        color: '#000000',
        fontSize: 18,
    },
    btnLogin: {
        color: '#ebbe4b',
        fontSize: 18,
    },
    submitLogin: {
        color: '#ebbe4b',
        fontSize: 18,
    },
    inputBiosDetalhes: {
        backgroundColor: '#FFF',
        width: '49%',
        color: '#222',
        fontSize: 17,
    },
})

export default TelaCadastro2
