import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import  TelaLogin  from './src/pages/LoginPage'
import TelaCadastro1 from './src/pages/CadastroPage1'
import TelaCadastro2 from './src/pages/CadastroPage2'
import TelaCadastro3 from './src/pages/CadastroPage3'

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

    <TelaLogin></TelaLogin>

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

function App() {

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

      </Stack.Navigator>

    </NavigationContainer>

    )

  }

export default App