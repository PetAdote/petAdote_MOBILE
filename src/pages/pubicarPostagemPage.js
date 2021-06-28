import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'

export class PublicarPostagem extends React.Component{

    enviarPostagem() {

        //axios.post()

    }

    constructor(props) {
        super(props)
            this.state = {
    
                image: null,
                ConteudoPostagem: '', 

                token : null,
            }
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

        return (

                <View style={styles.background}>

                        <View style={styles.containerPost}>

                            <ScrollView>

                                <AutoGrowingTextInput
                                    style={styles.inputPost}
                                    value={null}
                                    onChangeText={null}
                                />

                                <View style={styles.scrollview}>

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
                                
                            </ScrollView>

                            <TouchableOpacity style={styles.BotaoAnexoPostagem} onPress={this._pickImage}>

                                <Image source={require('../../assets/anexo-postagem.png')} style={styles.AnexoPostagem}/>

                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.btnPostar} onPress={this.enviarPostagem()}>
                            <Text style={styles.submitTextPostar}>Postar</Text>
                        </TouchableOpacity>

                </View>
            
        ) 
    }
}


const styles = StyleSheet.create({

    background:{
        flex: 1,
        backgroundColor: '#93c47d',
        alignItems: 'center',
    },
    containerPost: {
        margin: 30,
        marginTop: 50,
        minHeight: 300,
        maxHeight: 750,
        width: 350,
        backgroundColor: '#674EA7',
    },
    inputPost: {
        margin: 20,
        backgroundColor: '#674EA7',
        width: '92%',
        minHeight: 300, 
        color: 'white',
        fontSize: 20,
    },
    AnexoPostagem: {
        width: 30,
        height: 30,
    },
    BotaoAnexoPostagem: {
        left: 400,
        marginBottom: 10,
    },
    btnPostar: {
        backgroundColor: '#FFF',
        height: 38,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
    },
    submitTextPostar: {
        color: '#000000',
        fontSize: 18,
    },
    scrollview: {
        alignItems: 'center',
        justifyContent: 'center',
    },  
})

export default PublicarPostagem