import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import FormRow from '../component/FormRow'
import * as ImagePicker from 'expo-image-picker'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import axios from 'axios';
import React from 'react';
import meuAccessToken from "../services/AutenticarCliente"

export class CadastroForm extends React.Component {

    componentDidMount(){
    
        meuAccessToken()
        .then((result) => {
            this.state.token = result
        })
        .catch((error) =>{
            console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
            console.log("Opa, temos um probleminha aqui: ", error.response)
            console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
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
            console.log(successResult);

            this.props.navigation.navigate('LoginPetAdote');

            Alert.alert(
                    'Usuário cadastrado com sucesso',
                    "Checa o seu email já deve ter chegado lá o nosso código de ativação",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            
        })
        .catch((error) => {
            console.log('Temos um problema ==>', error.response);

            if(error.response.data.code == "ACCESS_TO_RESOURCE_NOT_ALLOWED"){
                Alert.alert(
                    'ACCESS_TO_RESOURCE_NOT_ALLOWED',
                    "Sei la que erro é esse mas preenche direito esse formulário aí",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INTERNAL_SERVER_API_ERROR"){
                Alert.alert(
                    'INTERNAL_SERVER_API_ERROR',
                    "Erro interno da api, eu acho.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INTERNAL_SERVER_API_ERROR"){
                Alert.alert(
                    'INTERNAL_SERVER_API_ERROR',
                    "Erro interno da api, eu acho.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INTERNAL_SERVER_ERROR"){
                Alert.alert(
                    'INTERNAL_SERVER_ERROR',
                    "Deu pau do server.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INTERNAL_SERVER_MODULE_ERROR"){
                Alert.alert(
                    'INTERNAL_SERVER_MODULE_ERROR',
                    "Torce pra que seja algo fácil de resolver por que se não fudeu.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "RESOURCE_NOT_FOUND"){
                Alert.alert(
                    'RESOURCE_NOT_FOUND',
                    "Recurso não encontrado, não sei oque significa.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "ACCESS_NOT_ALLOWED"){
                Alert.alert(
                    'ACCESS_NOT_ALLOWED',
                    "Acesso não permitid.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "ACCESS_NOT_ALLOWED"){
                Alert.alert(
                    'ACCESS_NOT_ALLOWED',
                    "Acesso não permitid.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "EXPIRED_AUTH"){
                Alert.alert(
                    'EXPIRED_AUTH',
                    "Acho que teu acesso expirou.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "BAD_REQUEST"){
                Alert.alert(
                    'BAD_REQUEST',
                    "Você não digitou nada errado né?",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_INPUT"){
                Alert.alert(
                    'INVALID_INPUT',
                    "Você não digitou nada errado né?",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_PARAM"){
                Alert.alert(
                    'INVALID_PARAM',
                    "Tenta outra vez",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_REQUEST_QUERY"){
                Alert.alert(
                    'INVALID_REQUEST_QUERY',
                    "Tenta outra vez",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_REQUEST_FIELDS"){
                Alert.alert(
                    'INVALID_REQUEST_FIELDS',
                    "Tenta outra vez",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_EMAIL_LENGTH"){
                Alert.alert(
                    'O comprimento do email está invalido',
                    "Ou tá muito curto ou ta muito longo, coloque um outro email.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_EMAIL_INPUT"){
                Alert.alert(
                    'A entrada do email está incorreta',
                    "Tu tem certeza que esse email tá correto? acho que tem coisa faltando aí em.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "EMAIL_ALREADY_TAKEN"){
                Alert.alert(
                    'Esse email já ta sendo usado amigão',
                    "Tenta colocar outro, ou talvez tu já tenha uma conta aqui e se esqueceu, tenta logar, quem sabe.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_PASSWORD_LENGTH"){
                Alert.alert(
                    'O tamanho da senha está inválido',
                    "Ou tua senha é muito curta eu ela é muito longa pra ta mostrando esse erro.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                
            }

            if(error.response.data.code == "PASSWORD_WITHOUT_NUMBER"){
                Alert.alert(
                    'Sua senha esta sem um número',
                    "A senha precisa ter pelo menos um número.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "PASSWORD_WITHOUT_UPPERCASE_LETTER"){
                Alert.alert(
                    'A senha está sem um a letra maiúscola',
                    "É necessário que sua senha tenha pelo menos uma letra em caixa alta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "PASSWORD_WITHOUT_LOWERCASE_LETTERS"){
                Alert.alert(
                    'A senha está sem um a letra minuscola',
                    "É necessário que sua senha tenha pelo menos uma letra em caixa baixa.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_PASSWORD_CONFIRMATION"){
                Alert.alert(
                    'A confirmação da senha deve estar incorreta',
                    "Ambas as senhas digitadas precisam ser idênticas.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_PRIMEIRO_NOME_LENGTH"){
                Alert.alert(
                    'O tamanho do teu nome é invalido',
                    "O primeiro nome não pode ser muito longo nem muito curto.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_PRIMEIRO_NOME_INPUT"){
                Alert.alert(
                    'O nome inserido não é valido',
                    "Você ditou ele de alguma maneira estranha.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_SOBRENOME_LENGTH"){
                Alert.alert(
                    'O tamanho do sobrenome não é valido',
                    "Ou ta muito grande ou ta muito pequeno.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_SOBRENOME_INPUT"){
                Alert.alert(
                    'O sobrenome não é valido',
                    "Você digitou alguma coisa inválida aí.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_DATA_NASCIMENTO_LENGTH"){
                Alert.alert(
                    'O tamanho da data de nascimento não é valida',
                    "Ou ta muito grande ou ta muito pequeno.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_DATA_NASCIMENTO_INPUT"){
                Alert.alert(
                    'O formato de incerção da data de nascimento está incorreta',
                    "Coloca de novo, tem algo errado aí, o formato certo é ANO-MÊS-DIA, quando for digitar não use barras use traços, exemplo: aaaa-mm-dd",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_DATA_NASCIMENTO_FOR_LEAP_YEAR"){
                Alert.alert(
                    'Data de nascimento invalida para ano bissexto',
                    "A data de nascimento esta incorreta para um ano bissexto.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_DATA_NASCIMENTO_FOR_COMMON_YEAR"){
                Alert.alert(
                    'Data de nascimento invalida para ano comum',
                    "A data de nascimento esta incorreta para um ano comum.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "FORBIDDEN_USER_AGE"){
                Alert.alert(
                    'A idade do usuario parece estar errada',
                    "Ou você ta muito velho ou ta muito novo, coloque uma idade válida.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_CPF_INPUT"){
                Alert.alert(
                    'O CPF inserido está incompleto ou em um formato incorreto',
                    "por favor o insira da seguinte maneira 123.123.123-12 ou 12312312312",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "CPF_DIGITS_ARE_REPEATING"){
                Alert.alert(
                    'Digitos do CPF se repetem',
                    "por favor o insira da seguinte maneira 123.123.123-12 ou 12312312312, não pode haver repetições",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "CPF_ALREADY_TAKEN"){
                Alert.alert(
                    'Esse CPF já está sendo usado',
                    "Tem certeza que já não tem uma conta aqui? ou você digitou seu CPF errado.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_CPF"){
                Alert.alert(
                    'Esse CPF é invalido',
                    "Digite um CPF válido.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_TELEFONE_INPUT"){
                Alert.alert(
                    'Você inseriu o telefone de maneira errada',
                    "O ensira de maneira correta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_TELEFONE_INPUT"){
                Alert.alert(
                    'Você inseriu o telefone de maneira errada',
                    "O ensira de maneira correta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "TELEFONE_DIGITS_ARE_REPEATING"){
                Alert.alert(
                    'Os digitos do telefone se repetem',
                    "O ensira de maneira correta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_TELEFONE_DDD"){
                Alert.alert(
                    'O DDD está errado',
                    "O ensira de maneira correta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_CEP_INPUT"){
                Alert.alert(
                    'O CEP está errado',
                    "O ensira de maneira correta.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "CEP_NOT_FOUND"){
                Alert.alert(
                    'O CEP não foi encontrado',
                    "Ensira um CEP válido.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_LOGRADOURO_LENGTH"){
                Alert.alert(
                    'O tamanho do nome do logradouro está incorreto',
                    "Ou ta muito grande ou ta muito pequeno esse nome aí.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_BAIRRO_LENGTH"){
                Alert.alert(
                    'O tamanho do nome do bairro está incorreto',
                    "Ou ta muito grande ou ta muito pequeno esse nome aí.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_CIDADE_LENGTH"){
                Alert.alert(
                    'O tamanho do nome da cidade está incorreto',
                    "Ou ta muito grande ou ta muito pequeno esse nome aí.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "CIDADE_DONT_BELONG_TO_CEP"){
                Alert.alert(
                    'Esta cidade não pertence a este CEP',
                    "Ensira o CEP novamente você deve ter errado ele.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_DESCRICAO_LENGTH"){
                Alert.alert(
                    'O tamanho da descrição está invalido',
                    "Ou ta muito curto ou ta muito longo.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "INVALID_REQUEST_CONTENT"){
                Alert.alert(
                    'INVALID_REQUEST_CONTENT',
                    "Os conteúdos desta request são inválidos.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "TOKEN_NOT_FOUND"){
                Alert.alert(
                    'TOKEN_NOT_FOUND',
                    "Token de acesso não encontrado.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }

            if(error.response.data.code == "USER_HAS_ACTIVE_TOKEN"){
                Alert.alert(
                    'USER_HAS_ACTIVE_TOKEN',
                    "O usuário já possuí um token ativado.",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
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