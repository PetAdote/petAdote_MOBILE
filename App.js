import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  TelaLogin  from './src/pages/LoginPage'
import CadastroForm from './src/pages/CadastroForm'
import Home from './src/pages/HomePage';
import BotaoAdicionar from './src/component/AdicionarButton'
import BotaoPerfil from './src/component/PerfilButton';
import LogoPetAdote from './src/component/HeaderLogo';
import PerfilUsuario from './src/pages/PerfilUsuario';
import paginaAnuncio from './src/pages/detalhesAnuncio'
import meuAccessToken from './src/services/AutenticarCliente'

function LoginPage() {

  return(

    <TelaLogin/>

  )
  
}

const Stack = createStackNavigator()

export const meuClientToken = meuAccessToken();

function App() {

  meuAccessToken();

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
            component={ CadastroForm }
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

          <Stack.Screen
            name="detalhesDoAnuncio"
            component={ paginaAnuncio }
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
export default App