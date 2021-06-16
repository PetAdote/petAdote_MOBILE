import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MenuAdicionar extends React.Component {
 
  render() {
    return (
      
      <View style={styles.background}>

        <View style={styles.backgroundMenu}>

        <Text></Text>

            <Text style={styles.textoAdicionar}>
              Adicionar 
            </Text>

            <Text style={styles.textoDivisoria}>-------------------------------------------------------</Text>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('publicarPostagem');}}>
            <Text style={styles.textoAdicionar}>
              Postagem
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Momentos
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('PublicarAnuncioAnimal');}}>
            <Text style={styles.textoAdicionar}>
              Anúncio
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('CadastroAnimal');}}>
            <Text style={styles.textoAdicionar}>
              Animal
            </Text>
          </TouchableOpacity>

          <Text></Text>

        </View>

      </View>
    )
  }
}

export default MenuAdicionar;

const styles = StyleSheet.create({

  background: {
    flex:1,
    backgroundColor: '#93c47d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundMenu: {
    backgroundColor: '#674ea7',
    maxHeight: 500,
    width: 250,
    alignItems: 'center',
  },

  textoAdicionar: {
    fontSize: 40,
    color: 'white',
  },

  textoDivisoria: {
    color: '#9a82d9',
  },
})