import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';

import Layout from '../components/suggestions-list-layout';
import Empty from '../components/emtpy';
import Separator from '../components/vertical-separator';
import Suggestions from '../components/suggestions';

class SuggestionList extends Component{
    keyExtractor = item => item.id.toString()
    renderEmtpy =()=> <Empty text="No hay sugerencias :c"/>
    itemSeparator =()=> <Separator />
    renderItem =({item})=>{
        return(
            <Suggestions {...item}/>
        );
    }
    render(){

        return(
            <Layout title="Sugerencias para ti">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list} 
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                    />
            </Layout>
                
            
        )
    }
}
export default SuggestionList;