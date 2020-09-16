import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';

import Layout from '../components/suggestions-list-layout';

class SuggestionList extends Component{
    render(){
        const list =[
            {
                title: 'ing',
                key:'1',

            },
            {
                title: 'mari',
                key:'2',
            },
        ]
        return(
            <Layout title="Sugerencias para ti">
                <FlatList
                    data={list} 
                    renderItem={({item})=><Text>{item.title}</Text>}
                    />
            </Layout>
                
            
        )
    }
}
export default SuggestionList;