import React from 'react'
import { StyleSheet, View } from 'react-native'

const FormRow = props => {

    const { children } = props

    return (

        <View>
            { children }
        </View>

    )

}

export default FormRow;