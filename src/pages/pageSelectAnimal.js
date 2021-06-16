import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import axios from 'axios';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { getUserTokensSave } from '../utils/storeUserToken'

export class SelecionarAnimal extends React.Component {

    componentDidMount(){
        
        getUserTokensSave('userToken')
        .then((result) => {
            console.log(result)
            this.state.token = result
        })
        
    }

    constructor(props) {
        super(props)
            this.state = {

                token : '',
            }

        }
        
      [ console.log(image) ]

    CadastrarAnimal(){

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log('USER TOKEN ENVIADO COM SUCESSO ==>', this.state.token)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

        axios.post('http://179.213.88.128:3000/usuarios/animais/', 
        {


            
        },
        {

        headers : {
            'Authorization': `Bearer ${this.state.token}`
        }
        })
        .then((successResult) => {
            console.log(successResult);

            this.props.navigation.navigate('HomePage');

            Alert.alert(
                    'Anuncio feito com sucesso!',
                    "Agora você pode ver ele na sua pagina inicial.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            
        })
        .catch((error) => {
            console.log('Temos um problema ==>', error.response);

            
            if(error.response.data.code == "INVALID_REQUEST_FIELDS"){
                Alert.alert(
                    'Campos vazios foram detectados.',
                    "Preencha todos os campos antes de enviar",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
            
          
        });

    }

  render() {

    return(

        
        <View style={styles.background}>

            <KeyboardAvoidingView>

                <View style={styles.container}>
                    
                    <ScrollView>

                        <View style={styles.containerForm}>

                            <Text style={styles.tituloCadastro}>Selecione</Text>

                            <Text style={styles.textEspacos}/>
                            <Text style={styles.textEspacos}/>
                            <Text style={styles.textEspacos}/>

                            <TouchableOpacity style={styles.btnSelect}>

                                <Text style={styles.textSelect}>Animal</Text>

                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                </View>

            </KeyboardAvoidingView>

        </View>

    )

  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    pickerStyle:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
    tituloIMGText: {
        color: '#FFF',
        fontSize: 20,
    },
    tituloIMG: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    containerIMG:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtongroup:{
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    containerForm:{
        //marginLeft: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background:{
        flex: 1,
        backgroundColor: '#93c47d',
        alignItems: 'center',
        justifyContent: 'center',
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
    inputNomeSobrenomeESenha: {
        backgroundColor: '#FFF',
        width: '50%',
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    container: {
        margin: 12,
        backgroundColor: '#674ea7',
        height: 479,
        width: 330,
        maxHeight: 850,
        maxWidth: 330,
    },
    inputNomeDoAnimal: {
        backgroundColor: '#FFF',
        width: '80%',
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    inputDataDeNascimento: {
        backgroundColor: '#FFF',
        width: '33%',
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    textEspacos: {
        fontSize: 5,
    },
    loginProximo: {
        marginLeft: 12,
        flexDirection: 'row',
    },
    btnProximo: {
        backgroundColor: '#FFF',
        height: 38,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSelect: {
        backgroundColor: '#a892de',
        height: 38,
        width: 310,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitTextProximo: {
        color: '#000000',
        fontSize: 18,
    },
    textSelect: {
        color: '#FFF',
        fontSize: 17,
    },
    btnLogin: {
        color: '#ebbe4b',
        fontSize: 19,
    },
    submitLogin: {
        color: '#ebbe4b',
        fontSize: 18,
    },
    dataNascimentoFlexBox: {
        flexDirection: 'row',
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
    inputCidadeBairroLogradouro: {
        backgroundColor: '#FFF',
        width: '50%',
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    inputComplemento: {
        backgroundColor: '#FFF',
        width: 130,
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    inputNumero: {
        backgroundColor: '#FFF',
        width: 102,
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    inputEstado: {
        backgroundColor: '#FFF',
        color: '#222',
        width: 120,
        fontSize: 17,
        padding: 1,
    },
    inputCep: {
        backgroundColor: '#FFF',
        width: 75,
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    textEspacos: {
        fontSize: 5,
    },
    loginProximo: {
        marginLeft: 12,
        flexDirection: 'row',
    },
    btnProximo: {
        backgroundColor: '#FFF',
        height: 38,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitTextProximo: {
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
    estadoCepFlexBox: {
        flexDirection: 'row',
    },
    tituloEndereco: {
        color: '#FFF',
        fontSize: 23,
    },
    textCadastro: {
        color: '#FFF',
        fontSize: 20,
    },
    inputBiosDetalhes: {
        backgroundColor: '#FFF',
        width: '49%',
        color: '#222',
        fontSize: 17,
    },
})


export default SelecionarAnimal