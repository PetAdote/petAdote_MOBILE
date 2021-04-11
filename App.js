import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  TelaLogin  from './src/pages/LoginPage'
import TelaCadastro1 from './src/pages/CadastroPage1'
import TelaCadastro2 from './src/pages/CadastroPage2'
import TelaCadastro3 from './src/pages/CadastroPage3'
import Home from './src/pages/HomePage';
import BotaoAdicionar from './src/component/AdicionarButton'
import BotaoPerfil from './src/component/PerfilButton';
import LogoPetAdote from './src/component/HeaderLogo';
import PerfilUsuario from './src/pages/PerfilUsuario';

 /*
import  TelaCadastro3 from './src/pages/CadastroPage3' 

function CadastroPage3() {

 
  return(

    <TelaCadastro3></TelaCadastro3>

  )
  
}
*/

function LoginPage() {

  return(

    <TelaLogin/>

  )
  
}

const Stack = createStackNavigator(/*{
  "Cadastro1": {
    screen: TelaCadastro1
  }
}, { 
  defaultNavigationOptions: {
    title: 'TituloDaSuaPagina',
    headerStyle:{
      backgroundColor: '#d7d7d7',
      borderBottomWidth: 3,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      fontSize: 25,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
}*/)

export class App extends React.Component {

  render() {

    return(

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="LoginPetAdote"
            component={ TelaLogin }
            options={

              {

                headerShown: false,
                
              }

            }
            
          />

          <Stack.Screen 
            name="CadastroPetAdote"
            component={ TelaCadastro1 }
            options = {
              {

                headerShown: false,
                
              }
            }
          />

          <Stack.Screen
            name="CadastroPetAdote2"
            component={ TelaCadastro2 }
            options = {
              {

                headerShown: false,
                    
              }
            }
          />

          <Stack.Screen
            name="CadastroPetAdote3"
            component={ TelaCadastro3 }
            options = {
              {

                headerShown: false,
                    
              }
            }
          />

          <Stack.Screen
            name="HomePage"
            component={ Home }
            options =  {
              {

                headerShown: true,
                title: <LogoPetAdote/>,
                headerLeft : BotaoAdicionar,
                headerRight: () => (<BotaoPerfil/>),
                headerBackTitle: LogoPetAdote,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#674ea7',
                }

              }
            }
          />

          <Stack.Screen
            name="PerfilDoUsuario"
            component={ PerfilUsuario }
            options =  {
              {

                headerShown: true,
                title: <LogoPetAdote/>,
                headerLeft : BotaoAdicionar,
                headerRight: BotaoPerfil,
                headerBackTitle: LogoPetAdote,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#674ea7',
                }

              }
            }
          />

        </Stack.Navigator>

      </NavigationContainer>

      )

  }

}
export default App