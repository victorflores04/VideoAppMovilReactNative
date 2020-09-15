import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from  './src/screens/containers/home';

export default class App extends Component<Props>{
  render(){
    return(
      <Home>
        <Text>Home</Text>
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <Text>Sugerencias</Text>
      </Home>
    )
  }
}
