import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from  './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';

export default class App extends Component<Props>{
  render(){
    return(
      <Home>
        <Header><Text>Icon and User</Text></Header>
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <SuggestionList/>
      </Home>
    )
  }
}
