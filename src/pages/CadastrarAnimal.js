import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import axios from 'axios';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { getUserTokensSave } from '../utils/storeUserToken'

export class CadastroAnimal extends React.Component {

    componentDidMount(){
        
        getUserTokensSave('userToken')
        .then((result) => {
            console.log(result)
            this.state.token = result
        })
        
    }

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

    constructor(props) {
        super(props)
            this.state = {
    
                image: null,
                nomeAnimal: '',
                racaAnimal : '',
                detalhesComportamento : '',
                detalhesSaude : '',
                historiaAnimal : '',
                dataNascimento : '',

                selectedCastrado: 1,
                selectedVacinado: 1,
                selectedPossuiRGA: 1,
                selectedGenero: 1,
                genero: '',
                selectedEspecie: 1,
                especie: '',
                selectedPorte: 1,
                porte: '',

                token : '',
            }
            this.updateCastrado = this.updateCastrado.bind(this)
            this.updateVacinado = this.updateVacinado.bind(this)
            this.updatePossuiRGA = this.updatePossuiRGA.bind(this)
            this.updateGenero = this.updateGenero.bind(this)
            this.updateEspecie = this.updateEspecie.bind(this)
            this.updatePorte = this.updatePorte.bind(this)
        }
        
    CadastrarAnimal(){

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log('USER TOKEN ENVIADO COM SUCESSO ==>', this.state.token)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

        axios.post('http://179.213.88.128:3000/usuarios/animais/', 
        {
            nome: this.state.nomeAnimal,
            data_nascimento: this.state.dataNascimento,
            especie: this.state.especie,   
            raca: this.state.racaAnimal,    
            genero: this.state.genero,    
            porte: this.state.porte,  
            esta_castrado: this.state.selectedCastrado,    
            esta_vacinado: this.state.selectedVacinado,   
            detalhes_comportamento: this.state.detalhesComportamento,
            detalhes_saude: this.state.detalhesSaude,
            historia: this.state.historiaAnimal,
            possui_rga: this.state.selectedPossuiRGA,
            
        },
        {

        headers : {
            'Authorization': `Bearer ${this.state.token}`,
        }
        })
        .then((successResult) => {
            console.log(successResult);

            this.props.navigation.navigate('HomePage');

            Alert.alert(
                    'Animal cadastrado com sucesso',
                    "Agora é só fazer um anuncio para ele tocando no icone '+' na barra acima e indo na opção anuncio.",
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

            if(error.response.data.code == "INVALID_INPUT_RACA"){
                Alert.alert(
                    'Nome da raça do animal inválido.',
                    "Não pode haver nenhum caractere especial(#, -, @, etc...) ou espaço no nome da raça.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_INPUT_DATA_NASCIMENTO"){
                Alert.alert(
                    'Data de nascimento inválida.',
                    "Você deve ter digitado errado, o correto seria aaaa-mm-dd.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
            
          
        });

    }

    onChangeNomeDoAnimal(nomeAnimal) {
        this.setState({ nomeAnimal });
    }

    onChangeRacaDoAnimal(racaAnimal) {
        this.setState({ racaAnimal });
    }

    onChangeDetalhesComportamento(detalhesComportamento){
        this.setState({ detalhesComportamento });
    }

    onChangeDetalhesSaude(detalhesSaude){
        this.setState({ detalhesSaude });
    }

    onChangeHistoriaDoAnimal(historiaAnimal){
        this.setState({ historiaAnimal });
    }
    
    onChangeDataDeNascimento (dataNascimento){
        this.setState({ dataNascimento });
    }



    updateCastrado (selectedCastrado) {
        this.setState({selectedCastrado})
    }
    
    updateVacinado (selectedVacinado) {
        this.setState({selectedVacinado})
    }

    updatePossuiRGA (selectedPossuiRGA) {
        this.setState({selectedPossuiRGA})
    }

    updateGenero (selectedGenero) {
        this.setState({selectedGenero})
    }
    updateEspecie (selectedEspecie) {
        this.setState({selectedEspecie})
    }

    updatePorte (selectedPorte) {
        this.setState({selectedPorte})
    }

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

  render() {

    const buttons = ['NÃO', 'SIM']
    const buttonsGenero = ['MACHO', 'FÊMEA']
    const buttonsEspecie = ['Cão', 'Gato', 'Outros']
    const buttonsPorte = ['Pequeno', 'Médio', 'Grande']


    const { selectedCastrado } = this.state
    const { selectedVacinado } = this.state
    const { selectedPossuiRGA } = this.state
    const { selectedGenero } = this.state
    const { selectedEspecie } = this.state
    const { selectedPorte } = this.state

    let { image } = this.state;

    //Estrutura de seleção do genero
    if(this.state.selectedGenero == 0) {
        this.state.genero = 'M'
    }
    if(this.state.selectedGenero == 1) {
        this.state.genero = 'F'
    }

    //Estrutura de seleção da espécie
    if(this.state.selectedEspecie == 0) {
        this.state.especie = 'Cao'
    }
    if(this.state.selectedEspecie == 1) {
        this.state.especie = 'Gato'
    }
    if(this.state.selectedEspecie == 2) {
        this.state.especie = 'Outros'
    }

    //Estrutura de seleção do porte
    if(this.state.selectedPorte == 0) {
        this.state.porte = 'P'
    }
    if(this.state.selectedPorte == 1) {
        this.state.porte = 'M'
    }
    if(this.state.selectedPorte == 2) {
        this.state.porte = 'G'
    }


    return(

        
        <View style={styles.background}>

            <KeyboardAvoidingView>

                <View style={styles.container}>

                    <ScrollView>

                        <View style={styles.containerForm}>

                            <Text style={styles.tituloCadastro}>Cadastre seu animal</Text>

                            <Text/>
                            <Text/>
                            <Text/>
                            <Text/>


                            <Text style={styles.textCadastro}>Nome do animal</Text>
                            <TextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeNomeDoAnimal(value)}
                                value={this.state.nomeAnimal}
                                autoCorrect={false}
                            />

                            <Text style={styles.textCadastro}>Raça do animal</Text>
                            <TextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeRacaDoAnimal(value)}
                                value={this.state.racaAnimal}
                                autoCorrect={true}
                            />

                            <Text style={styles.textCadastro}>Detalhes do comportamento</Text>
                            <AutoGrowingTextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeDetalhesComportamento(value)}
                                value={this.state.detalhesComportamento}
                                autoCorrect={true}
                            />

                            <Text style={styles.textCadastro}>Detalhes da saúde</Text>
                            <AutoGrowingTextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeDetalhesSaude(value)}
                                value={this.state.detalhesSaude}
                                autoCorrect={true}
                            />

                            <Text style={styles.textCadastro}>História do animal</Text>
                            <AutoGrowingTextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeHistoriaDoAnimal(value)}
                                value={this.state.historiaAnimal}
                                autoCorrect={true}
                            />

                            <Text style={styles.textCadastro}>Data de nascimento</Text>
                            <TextInput
                                style={styles.inputNomeDoAnimal}
                                onChangeText={(value) => this.onChangeDataDeNascimento(value)}
                                value={this.state.dataNascimento}
                                autoCorrect={false}
                            />

                        </View>

                        <View style={styles.flexBoxCabecalho}>

                            <View style={styles.containerButtongroup}>

                                <Text style={styles.textCadastro}>Está castrado?</Text>
                                <ButtonGroup
                                    onPress={this.updateCastrado}
                                    selectedIndex={selectedCastrado}
                                    buttons={buttons}
                                    containerStyle={{height: 20, width: 100}}
                                    />

                            </View>

                            <View style={styles.containerButtongroup}>

                                <Text style={styles.textCadastro}>Está vacinado?</Text>
                                <ButtonGroup
                                    onPress={this.updateVacinado}
                                    selectedIndex={selectedVacinado}
                                    buttons={buttons}
                                    containerStyle={{height: 20, width: 100}}
                                    />

                            </View>

                        </View>

                        <View style={styles.flexBoxCabecalho}>

                            <View style={styles.containerButtongroup}>

                                <Text style={styles.textCadastro}>Possuí RGA?</Text>
                                <ButtonGroup
                                    onPress={this.updatePossuiRGA}
                                    selectedIndex={selectedPossuiRGA}
                                    buttons={buttons}
                                    containerStyle={{height: 20, width: 100}}
                                    />

                            </View>

                            <View style={styles.containerButtongroup}>

                                <Text style={styles.textCadastro}>Qual o gênero?</Text>
                                <ButtonGroup
                                    onPress={this.updateGenero}
                                    selectedIndex={selectedGenero}
                                    buttons={buttonsGenero}
                                    containerStyle={{height: 20, width: 120}}
                                    />

                            </View>

                        </View>

                        <View style={styles.flexBoxCabecalho}>

                            <View style={styles.containerButtongroup}>

                                <Text style={styles.textCadastro}>Qual a espécie?</Text>
                                <ButtonGroup
                                    onPress={this.updateEspecie}
                                    selectedIndex={selectedEspecie}
                                    buttons={buttonsEspecie}
                                    containerStyle={{height: 20, width: 142}}
                                    />

                            </View>

                        </View>

                        <View style={styles.containerButtongroup}>

                            <Text style={styles.textCadastro}>Qual o porte?</Text>
                            <ButtonGroup
                                onPress={this.updatePorte}
                                selectedIndex={selectedPorte}
                                buttons={buttonsPorte}
                                containerStyle={{height: 20, width: 200}}
                                />

                        </View>

                        <View style={styles.containerIMG}>

                            <View style={styles.tituloIMG}>

                                <Text style={styles.tituloIMGText}>Selecione uma foto do seu animal</Text>

                            </View>

                            <View>

                            <Text style={styles.textEspacos}/>

                                {this.state.image && <Image source={{ uri: this.state.image }} 
                                    style={{ 
                                        marginLeft: 10,
                                        marginRight: 10,  
                                        marginBottom: 10, 
                                        marginTop: 10, 
                                        width: 420, 
                                        height: 420 
                                        }} 
                                />}
                                
                            </View>

                            <TouchableOpacity style={styles.btnProximo} onPress={this._pickImage}>

                                <Text style={styles.submitTextProximo}>Selecionar</Text>

                            </TouchableOpacity>

                            <Text style={styles.textEspacos}/>

                        </View>

                    </ScrollView>

                </View>

            </KeyboardAvoidingView>

            <View>

                <Text style={styles.textEspacos}/>

                <TouchableOpacity style={styles.btnProximo} onPress={() => {this.CadastrarAnimal();}}>

                    <Text style={styles.submitTextProximo}>Cadastrar</Text>

                </TouchableOpacity>

            </View>

        </View>

    )

  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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


export default CadastroAnimal