import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from  './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';

export default class App extends Component<Props>{
  state={
    suggestionList:[]
  }
  async componentDidMount(){
   const movies = await API.getSuggestion(10);
   this.setState({
    suggestionList: movies,
   })
  }
  render(){
    return(
      <Home>
        <Header><Text>Icon and User</Text></Header>
        <Text>Buscador</Text>
        <Text>Categoria</Text>
        <SuggestionList
         list={this.state.suggestionList}
         />
      </Home>
    )
  }
}
