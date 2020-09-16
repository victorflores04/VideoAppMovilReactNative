import React, { Component } from 'react';

import {
View,
FlatList,

} from 'react-native';

import Empty from '../components/emtpy';
import Separator from '../../sections/components/horizaontal-separator';
import Suggestions from '../components/suggestions';
import Layout from '../components/category-list-layout';

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
        <Layout title="Categorias">
        <FlatList
        horizontal={true}
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

export default CategoriesList;