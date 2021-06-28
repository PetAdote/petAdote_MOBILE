import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { getUserTokensSave } from '../utils/storeUserToken'
import SyncStorage from 'sync-storage';
import { saveAnimalData } from '../utils/storeDadoAnimal'

function PublicarAnuncio2() {

    useEffect(() => {
        
        async function syncStorage(){
            const data = await SyncStorage.init();
            console.log('AsyncStorage is ready!', data);
            //setData(data)
          }

        syncStorage();

        Alert.alert(
            'Vamos puxar os albuns do seu animal',
            "Aperte OK, e espere um pouquinho, as vezes demora um pouco.",
            [
                { text: "OK", onPress: () => capturaIDAnimal() }
            ]
        );

    }, []);

    const [albumData, setAlbumData] = useState([]);

    function capturaIDAnimal(){

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log('USER TOKEN ENVIADO COM SUCESSO ==>', SyncStorage.get('userToken'))
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

        axios.get('http://179.213.88.128:3000/usuarios/animais/albuns/?getAllFromAnimal=' + SyncStorage.get('AnimalSelecionadoAnuncio').cod_animal, 
        {
            headers : {
                'Authorization': `Bearer ${SyncStorage.get('userToken')}`
            }
        })
        .then((response) => {
            console.log(response);

            setAlbumData(response.data.albuns)

        })
        .catch((error) => {
            console.log('Temos um problema ==>', error.response);

            if(error.response.data.error.code == "RESOURCE_NOT_FOUND"){
                Alert.alert(
                    'Recurso não encontrado!',
                    "Falha, erro no servidor, por favor tente mais tarde.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

        });

    }

    return(
        
        <View style={styles.background}>

            <KeyboardAvoidingView>

                <View style={styles.container}>

                    <ScrollView>

                        <View style={styles.containerForm}>

                            <Text style={styles.tituloCadastro}>Faça um anuncio de um animal</Text>

                            <Text style={styles.textEspacos}/>

                            <Text style={styles.textCadastro}>Selecione um album</Text>

                            <Text style={styles.textEspacos}/>

                            <View>

                                <ScrollView nestedScrollEnabled = {true}>
                                    
                                    {

                                        albumData.map(album => (

                                            <TouchableOpacity
                                            onPress={() => {
                                        
                                            Alert.alert(
                                                'Album selecionado ' + album.titulo,
                                                "Esse é o album que deseja usar?",
                                                [
                                                    { text: "NÃO", onPress: () => console.log("Operação cancelada pelo usuário.") },
                                                    { text: "SIM", onPress: () => {console.log("O album foi selecionado: ", album)}},
                                                ]
                                            );

                                        }}
                                            style={styles.touchableAnimal}
                                            key={album.cod_album}>
                                                <Text 
                                                    style={styles.submitAnimal}>
                                                    {album.titulo}
                                                </Text>
                                            </TouchableOpacity>

                                        ))

                                    }

                                </ScrollView>

                            </View>

                        </View>

                    </ScrollView>

                </View>

            </KeyboardAvoidingView>


        </View>

    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    caixaListaAnimais: {
        width: 300,
        height: 150,
    },
    pickerStyle:{
        fontSize: 16,
        marginRight: 20,
        width: 290,
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
        marginLeft: 20,
        marginTop: 10,
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
    textCadastroBlack: {
        color: 'black',
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
    touchableAnimal: {
        backgroundColor: '#FFF',
        height: 38,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    submitTextProximo: {
        color: '#000000',
        fontSize: 18,
    },
    btnLogin: {
        color: '#ebbe4b',
        fontSize: 18,
    },
    submitAnimal: {
        color: 'black',
        fontSize: 14,
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


export default PublicarAnuncio2