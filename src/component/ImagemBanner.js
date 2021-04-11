import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import FormRow from '../component/FormRow'

function ImagemDoBanner() {


        return (

            <View>

                <View style={styles.BannerStyle}>

                    <Image source={require('../../assets/banner.jpg')} style={styles.ImageBannerStyle}/>

                </View>


            
            </View>
            
        )
}

const styles = StyleSheet.create({

    BannerStyle: {
        marginRight: 30,
        marginLeft: 30,
    },
    ImageBannerStyle: {
        width: 300,
        height: 176,
    },


})

export default ImagemDoBanner