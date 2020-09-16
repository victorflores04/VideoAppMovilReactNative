import React, { Component } from 'react';

import {
View,
FlatList,

} from 'react-native';

import Empty from '../components/emtpy';
import Separator from '../components/vertical-separator';
import Suggestions from '../components/suggestions';


class CategoriesList extends Component{
    keyExtractor = item => item.id.toString();
    renderEmtpy =()=> <Empty text="No hay sugerencias :c"/>
    itemSeparator =()=> <Separator />
    renderItem =({item})=>{
        return(
            <Suggestions {...item}/>
        );
    }

render(){
    return(
        <FlatList
        horizontal={true}
        keyExtractor={this.keyExtractor}
        data={this.props.list} 
        ListEmptyComponent={this.renderEmtpy}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
        />
    )
}
}

export default CategoriesList;