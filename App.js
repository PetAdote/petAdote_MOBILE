import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  TelaLogin  from './src/pages/LoginPage'
import CadastroForm from './src/pages/CadastroForm'
import Home from './src/pages/HomePage';
import BotaoAdicionar from './src/component/botoes/AdicionarButton'
import BotaoPerfil from './src/component/botoes/PerfilButton';
import LogoPetAdote from './src/component/botoes/HeaderLogo';
import PerfilUsuario from './src/pages/PerfilUsuario';
import paginaAnuncio from './src/pages/detalhesAnuncio'
import meuAccessToken from './src/services/AutenticarCliente'
import ativarConta from './src/services/ativarConta';
import AtivarContaPage from './src/pages/pageAtivarConta';

function LoginPage() {

  return(

    <TelaLogin/>

  )
  
}

const Stack = createStackNavigator()

//export const meuClientToken = meuAccessToken();

function App() {

  const [token, setToken] = useState({});

  useEffect(() => {

    meuAccessToken()
    .then((result) =>{
      console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
      console.log('MeuClientToken: ', result)
      console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
      setToken(result);
    })
    .catch((error) =>{
      console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
      console.log("Opa, temos um probleminha aqui: ", error)
      console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
  })

  }, []);

  console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
  console.log('MeuClientToken Antes do Retorno do JSX: ', token);
  console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

    return(

      <NavigationContainer>
        { console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------') }
        { console.log('MeuClientToken no Retorno do JSX: ', token) }
        { console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------') }
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

          <Stack.Screen
            name="ativaConta"
            component={ AtivarContaPage }
            options =  {
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