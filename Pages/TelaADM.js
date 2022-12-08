import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaBarCode from './TelaBarCode';
import TelaInicial from './TelaInicial';
import TelaQrCode from './TelaQRCode';
import TelaText from './TelaText';
import TelaFormulario from './TelaFormulario';
import TelaImagem from './TelaImagem';

const Stack = createNativeStackNavigator();

export default function TelaAdm (){
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={TelaInicial} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/>
          <Stack.Screen name='QRcode' component={TelaQrCode} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/>
          <Stack.Screen name='BarCode' component={TelaBarCode} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/>
          <Stack.Screen name='Text' component={TelaText} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/> 
          <Stack.Screen name='Formulario' component={TelaFormulario} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/> 
          <Stack.Screen name='Imagem' component={TelaImagem} options={{headerStyle:{backgroundColor:'darkgrey'},headerTitleAlign:'center'}}/> 
        </Stack.Navigator>  
      </NavigationContainer>
  );
} 