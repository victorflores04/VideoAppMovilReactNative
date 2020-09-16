import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


function  SuggestionListLayout(props){
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        flex: 1,
        backgroundColor: 'rgba(10,134,203, .06)'
    },
    title:{
        color: "#4c4c4c",
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        marginLeft: 20,
    }
});

export default SuggestionListLayout;