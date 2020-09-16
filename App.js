import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from  './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';

export default class App extends Component<Props>{
  state={
    suggestionList:[],
    categoryList:[],
  }
  async componentDidMount(){
   const movies = await API.getSuggestion(10);
   const categories = await API.getMovies();

   this.setState({
    suggestionList: movies,
    categoryList: categories,
   })
  }
  render(){
    return(
      <Home>
        <Header><Text>Icon and User</Text></Header>
        <Text>Buscador</Text>
        <CategoryList
         list={this.state.categoryList}
         />
        <SuggestionList
         list={this.state.suggestionList}
         />
        
      </Home>
    )
  }
}
