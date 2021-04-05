import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'


export class TelaCadastro3 extends React.Component {

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

                                <Text style={styles.tituloCadastro}>Cadastro 3/3: </Text>

                                <Text>                      </Text>
                                <Text>                      </Text>


                            </View>

                            <Text>                                 </Text>

                            <View style={styles.logo}>

                                <Image source={require('../../assets/logo.png')}/>

                            </View>

                        </View>

                        <View style={styles.container}>

                        <Text style={styles.tituloEndereco}>Endereço: </Text>

                        <Text>                                 </Text>

                            <View style={styles.estadoCepFlexBox}>

                                <FormRow>

                                    <Text style={styles.textCadastro}>Estado:</Text>
                                    <TextInput
                                        autoCorrect={false}
                                        onChangeText={()=>{}}
                                        style={styles.inputEstado}
                                    ></TextInput>

                                </FormRow>

                                <Text>                                       </Text>

                                <FormRow>

                                    <Text style={styles.textCadastro}>CEP:</Text>
                                    <TextInput
                                        autoCorrect={false}
                                        onChangeText={()=>{}}
                                        style={styles.inputCep}
                                    ></TextInput>

                                </FormRow>
                            </View>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Cidade:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Bairro:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Logradouro:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputCidadeBairroLogradouro}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Número:</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputNumero}
                                ></TextInput>

                            </FormRow>

                            <Text style={styles.textEspacos}>                      </Text>

                            <FormRow>

                                <Text style={styles.textCadastro}>Complemento: (opcional)</Text>
                                <TextInput
                                    autoCorrect={false}
                                    onChangeText={()=>{}}
                                    style={styles.inputComplemento}
                                ></TextInput>

                            </FormRow>

                        </View>

                        <Text>                      </Text>
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
                                    <Text style={styles.submitTextProximo} onPress={() => {this.props.navigation.navigate('HomePage');}}>Finalizar</Text>
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
    inputCidadeBairroLogradouro: {
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
})

export default TelaCadastro3
