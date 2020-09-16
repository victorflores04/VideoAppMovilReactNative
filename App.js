import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Home from  './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Video from 'react-native-video';

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
        <View style={{
          flex:1,
          height:100,
          
        }}>
        <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}}
        style={{
          position:'absolute',
          left:0,
          right:0,
          bottom:0,
          top:0,
        }}
        resizeMode="cover"/>
        </View>
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
