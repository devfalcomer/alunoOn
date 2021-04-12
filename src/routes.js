import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Boleto from './pages/Boleto';
import Disciplinas from './pages/Disciplinas';
import Idioma from './pages/Idioma';

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#800000' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Listagem" component={Listagem} />
      <Stack.Screen name="Boleto" component={Boleto} />
      <Stack.Screen name="Disciplinas" component={Disciplinas} />
      <Stack.Screen name="Idioma" component={Idioma} />
    </Stack.Navigator>
  );

}