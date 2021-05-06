import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import FormRow from '../component/FormRow'
import * as ImagePicker from 'expo-image-picker'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import axios from 'axios';
import React from 'react';
//import api from '../services/api'
//import Autenticacao, { token } from '../component/AutenticarCliente';
//import * as SecureStore from 'expo-secure-store';
import AsyncStorage from "@react-native-community/async-storage";
import meuAccessToken from "../services/AutenticarCliente"
import meuClientToken from '../../App'

export class CadastroForm extends React.Component {

    componentDidMount(){
    
        meuAccessToken()
        .then((result) => {
            this.state.token = result
        })
        .catch((error) =>{
            console.log("Opa, temos um probleminha aqui: ", error.response)
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

    constructor(props) {
        super(props)
            this.state = {
    
                image: null,
                image2: null,
                biosUsuario: '',
                nomeUsurario : '',
                sobreNomeUsurario : '',
                emailUsuario : '',
                emailRecuperacaoUsuario : '',
                senhaUsuario : '',
                confirmarSenhaUsuario : '',
                dataDeNascimentoUsuario : '',
                estadoUsuario : '',
                cepUsuario : '',
                cidadeUsuario : '',
                bairroUsuario : '',
                logadouroUsuario : '',
                numeroUsuario : '',
                complementoUsuario : '',
                cpf : '',
                telefone : '',

                token : null,
            }
        }
        
    //image = axios.post()
    //image2 = axios.post()    

      [ console.log(image) ]
      [ console.log(image2) ]

    ProximaTela(){
        //this.props.navigation.navigate('HomePage');

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log('TOKEN ENVIADO COM SUCESSO ==>', this.state.token)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

        axios.post('http://179.213.88.128:3000/contas/', 
        {

                email: this.state.emailUsuario,
                senha: this.state.senhaUsuario,
                confirma_senha: this.state.confirmarSenhaUsuario,

                primeiro_nome: this.state.nomeUsurario,
                sobrenome: this.state.sobreNomeUsurario,
                data_nascimento: this.state.dataDeNascimentoUsuario,
                cpf: this.state.cpf,
                telefone: this.state.telefone,
                descricao: this.state.biosUsuario,

                cep: this.state.cepUsuario,
                logradouro: this.state.logadouroUsuario,
                numero: this.state.numeroUsuario,
                bairro: this.state.bairroUsuario,
                cidade: this.state.cidadeUsuario,
                complemento: this.state.complementoUsuario,
                uf: this.state.estadoUsuario,

        },
        {

        headers : {
            'Authorization': `Bearer ${this.state.token}`
        }
        })
        .then((successResult) => {
            console.log(successResult.response);
        })
        .catch((errorResult) => {
            console.error('Temos um problema ==>', errorResult.response);
        });

    }

    onChangeNomeUsurario(nomeUsurario) {
        this.setState({ nomeUsurario });
    }

    onChangeSobreNomeUsurario(sobreNomeUsurario) {
        this.setState({ sobreNomeUsurario });
    }

    onChangeEmailUsuario(emailUsuario){
        this.setState({ emailUsuario });
    }

    onChangeEmailRecuperacao(emailRecuperacaoUsuario){
        this.setState({ emailRecuperacaoUsuario });
    }

    onChangeSenhaUsuario(senhaUsuario){
        this.setState({ senhaUsuario });
    }
    
    onChangeConfirmarSenhaUsuario (confirmarSenhaUsuario){
        this.setState({ confirmarSenhaUsuario });
    }

    onChangeDataDeNascimentoUsuario (dataDeNascimentoUsuario){
        this.setState({ dataDeNascimentoUsuario });
    }

    onChangeBios (biosUsuario) {
        this.setState({ biosUsuario });
    }

    onChangeEstado (estadoUsuario) {
        this.setState({ estadoUsuario });
    }

    onChangeCEP (cepUsuario) {
        this.setState({ cepUsuario });
    }

    onChangeCidade (cidadeUsuario) {
        this.setState({ cidadeUsuario });
    }

    onChangeBairro (bairroUsuario) {
        this.setState({ bairroUsuario });
    }

    onChangeLogadouro (logadouroUsuario) {
        this.setState({ logadouroUsuario });
    }

    onChangeNumero (numeroUsuario) {
        this.setState({ numeroUsuario });
    }

    onChangeComplemento (complementoUsuario) {
        this.setState({ complementoUsuario });
    }

    onChangeCPF (cpf) {
        this.setState({ cpf });
    }

    onChangeTelefone (telefone) {
        this.setState({ telefone });
    }

  render() {

    let { image, image2 } = this.state;

    return(

        
        <View style={styles.background}>

            <KeyboardAvoidingView>

                <ScrollView>

                      <View style={styles.flexBoxCabecalho}>

                                <View style={styles.cabecalho}>

                                    <Text style={styles.tituloCadastro}>Cadastro: </Text>

                                </View>

                                <Text>                                 </Text>

                                <View style={styles.logo}>

                                    <Image source={require('../../assets/logo.png')}/>

                                </View>

                            </View>

                            <View style={styles.container}>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Nome:</Text>
                                    
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.nomeUsurario}
                                        onChangeText={(valueNome) => this.onChangeNomeUsurario(valueNome)}
                                        style={styles.inputNomeSobrenomeESenha}
                                    ></TextInput>
                                    
                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Sobrenome:</Text>
                                    
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.sobreNomeUsurario}
                                        onChangeText={(valueSobrenome) => this.onChangeSobreNomeUsurario(valueSobrenome)}
                                        style={styles.inputNomeSobrenomeESenha}
                                    ></TextInput>
                                    

                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Email:</Text>
                                
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.emailUsuario}
                                        onChangeText={(valueEmail) => this.onChangeEmailUsuario(valueEmail)}
                                        style={styles.inputEmailERecuperacao}
                                    ></TextInput>

                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Email de recuperação:</Text>
                                    
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.emailRecuperacaoUsuario}
                                        onChangeText={(valueRecuperar) => this.onChangeEmailRecuperacao(valueRecuperar)}
                                        style={styles.inputEmailERecuperacao}
                                    ></TextInput>

                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Senha:</Text>
                                    
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.senhaUsuario}
                                        onChangeText={(valueSenha) => this.onChangeSenhaUsuario(valueSenha)}
                                        style={styles.inputNomeSobrenomeESenha}
                                        secureTextEntry={true}
                                    ></TextInput>

                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Confirmar senha:</Text>
                                    
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.confirmarSenhaUsuario}
                                        onChangeText={(valueConfirmar) => this.onChangeConfirmarSenhaUsuario(valueConfirmar)}
                                        style={styles.inputNomeSobrenomeESenha}
                                        secureTextEntry={true}

                                    ></TextInput>

                                </FormRow>

                                <Text style={styles.textEspacos}>                      </Text>

                                <FormRow>

                                <Text style={styles.textCadastro}>Data de nascimento:</Text>

                                    <View style={styles.dataNascimentoFlexBox}>

                                            <TextInput
                                                autoCorrect={false}
                                                value={this.state.dataDeNascimentoUsuario}
                                                onChangeText={(valueData) => this.onChangeDataDeNascimentoUsuario(valueData)}
                                                style={styles.inputDataDeNascimento}
                                            ></TextInput>

                                        <Image source={require('../../assets/calendario.png')}/>

                                    </View>

                                </FormRow>


                            </View>

                            <Text style={styles.textEspacos}>                      </Text>

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

                            <View>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Bios/Detalhes (opicional):</Text>
                                    <AutoGrowingTextInput 
                                        style={styles.inputBiosDetalhes}
                                        value={this.state.biosUsuario}
                                        onChangeText={(valueBios) => this.onChangeBios(valueBios)}
                                    />

                                </FormRow>

                            </View>
                            
                        </View>

                        <Text>                      </Text>

                        <View style={styles.container}>

                         <Text style={styles.tituloEndereco}>Endereço: </Text>

                        <Text>                                 </Text>

                            <View style={styles.estadoCepFlexBox}>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Estado:</Text>
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.estadoUsuario}
                                        onChangeText={(valueEstado) => this.onChangeEstado(valueEstado)}
                                        style={styles.inputEstado}
                                    ></TextInput>

                                </FormRow>

                                <Text>                                       </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>CEP:</Text>
                                    <TextInput
                                        autoCorrect={false}
                                        value={this.state.cepUsuario}
                                        onChangeText={(valueCep) => this.onChangeCEP(valueCep)}
                                        style={styles.inputCep}
                                    ></TextInput>

                                </FormRow>
                            </View>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Cidade:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.cidadeUsuario}
                                    onChangeText={(valueCidade) => this.onChangeCidade(valueCidade)}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Bairro:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.bairroUsuario}
                                    onChangeText={(valueBairro) => this.onChangeBairro(valueBairro)}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Logradouro:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.logadouroUsuario}
                                    onChangeText={(valueLogadouro) => this.onChangeLogadouro(valueLogadouro)}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Número:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.numeroUsuario}
                                    onChangeText={(valueNumero) => this.onChangeNumero(valueNumero)}
                                    style={styles.inputNumero}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Complemento: (opcional)</Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.complementoUsuario}
                                    onChangeText={(valueComplemento) => this.onChangeComplemento(valueComplemento)}
                                    style={styles.inputComplemento}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>CPF: </Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.cpf}
                                    onChangeText={(valueCPF) => this.onChangeCPF(valueCPF)}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Telefone: </Text>
                                <TextInput
                                    autoCorrect={false}
                                    value={this.state.telefone}
                                    onChangeText={(valueTelefone) => this.onChangeTelefone(valueTelefone)}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                        <Text>                      </Text>

                        </View>

                        <Text style={styles.textEspacos}>                      </Text>

                        <View style={styles.loginProximo}>


                            <View>
                                <TouchableOpacity style={styles.btnLogin} onPress={() => {this.props.navigation.navigate('LoginPetAdote');}}>
                                    <Text style={styles.submitLogin}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>                                              </Text>

                            <View>
                                <TouchableOpacity style={styles.btnProximo}>
                                    <Text style={styles.submitTextProximo} onPress={() => {this.ProximaTela()}}>Cadastrar</Text>
                                </TouchableOpacity>
                                <Text>                                              </Text>
                            </View>
                        
                        </View>

                </ScrollView>

            </KeyboardAvoidingView>

        </View>

    )

  }

  /*

*/

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
    inputNomeSobrenomeESenha: {
        backgroundColor: '#FFF',
        width: '50%',
        color: '#222',
        fontSize: 17,
        padding: 1,
    },
    container: {
        margin: 12,
        width: '100%',
    },
    inputEmailERecuperacao: {
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


export default CadastroForm