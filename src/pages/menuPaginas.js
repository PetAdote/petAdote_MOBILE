import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MenuPaginas extends React.Component {

    constructor(props){
        super(props);
    }
 
  render() {
    return (
      
      <View style={styles.background}>

        <View style={styles.backgroundMenu}>

        <Text></Text>

            <Text style={styles.textoAdicionar}>
              Visitar 
            </Text>

            <Text style={styles.textoDivisoria}>-------------------------------------------------------</Text>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('PerfilDoUsuario');}}>
            <Text style={styles.textoAdicionar}>
              Perfil
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Seguidores
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Adoções
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Mensagens
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              ONG
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Gostou/Salvou
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity>
            <Text style={styles.textoAdicionar}>
              Configurações
            </Text>
          </TouchableOpacity>

          <Text></Text>

          <TouchableOpacity onPress={() => {this.props.navigation.navigate('sair');}}>
            <Text style={styles.textoAdicionar}>
              Sair
            </Text>
          </TouchableOpacity>

          <Text></Text>

        </View>

      </View>
    )
  }
}

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
    fontSize: 20,
    color: 'white',
  },

  textoDivisoria: {
    color: '#9a82d9',
  },
})

export default MenuPaginas;
