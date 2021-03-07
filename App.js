import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import  TelaLogin  from './src/pages/LoginPage'

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


const Stack = createStackNavigator()

function App() {

  return(

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login PetAdote"
          component={ TelaLogin }
          options={

          {

            headerShown: false,
            
            /*
            headerTintColor: '#CCC',

            headerStyle: {

              backgroundColor: '#674ea7',
              borderBottomColor: '#674ea7',

            },
        
            headerTitleStyle: {

              color: '#FFF',
              fontSize: 0

            }
            */
          }

        }
        />

      </Stack.Navigator>

    </NavigationContainer>

    )

  }

export default App