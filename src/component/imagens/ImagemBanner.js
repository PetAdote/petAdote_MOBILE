import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function ImagemDoBanner() {


        return (

            <View>

                <View style={styles.BannerStyle}>

                    <Image source={require('../../../assets/banner.jpg')} style={styles.ImageBannerStyle}/>

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