import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView, AppRegistry} from 'react-native'
import FormRow from '../component/FormRow'

export class TelaCadastro1 extends React.Component {


    constructor(props){

        super(props)
      }

    render() {

        return (

            <View style={styles.background}>

                <KeyboardAvoidingView>

                    <ScrollView>

                        <View style={styles.flexBoxCabecalho}>

                            <View style={styles.cabecalho}>

                                <Text style={styles.tituloCadastro}>Cadastro 1/3: </Text>

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
                                    onChangeText={()=>{}}
                                    style={styles.inputNomeSobrenomeESenha}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Sobrenome:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputNomeSobrenomeESenha}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Email:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputEmailERecuperacao}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Email de recuperação:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputEmailERecuperacao}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Senha:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputNomeSobrenomeESenha}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Confirmar senha:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputNomeSobrenomeESenha}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                            <Text style={styles.textCadastro}>Data de nascimento:</Text>

                                <View style={styles.dataNascimentoFlexBox}>

                                        <TextInput
                                            autoCorrect={false}
                                            onChangeText={()=>{}}
                                            style={styles.inputDataDeNascimento}
                                        ></TextInput>

                                    <Image source={require('../../assets/calendario.png')}/>

                                </View>
                            </FormRow>


                        </View>

                        <Text>                      </Text>
                        <Text>                      </Text>

                        <View style={styles.loginProximo}>


                            <View>
                                <TouchableOpacity style={styles.btnLogin} onPress={() => {this.props.navigation.navigate('LoginPetAdote');}}>
                                    <Text style={styles.submitLogin}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>                                              </Text>

                            <View>
                                <TouchableOpacity style={styles.btnProximo} onPress={() => {this.props.navigation.navigate('CadastroPetAdote2');}}>
                                    <Text style={styles.submitTextProximo}>Proximo</Text>
                                </TouchableOpacity>
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
})

export default TelaCadastro1
