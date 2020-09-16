import React from 'react';
import {
View,
Text,
StyleSheet,
Image,
} from 'react-native';

function Suggestions(props){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} 
                source={{
                    uri: props.medium_cover_image
                }}
                />
                <View style={styles.genere}>
                    <Text style={styles.genereText}>
                        {props.genres[0]}
                    </Text>
                </View>
            </View>
            <View style={ styles.right}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.rating}>{  props.rating } Estrellas</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    left:{

    },
    right:{
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    cover:{
        height: 160,
        width: 100,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 18,
        color:'#44546b'
    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',

    },
    rating:{
        color:'#6b6b6b',
        fontSize: 14,
        fontWeight: "bold",

    },
    genere:{
        position:'absolute',
        left:0,
        top:0,
        backgroundColor: 'black',

    },
    genereText:{
        color:'white',
        fontSize:11,
        paddingHorizontal:7,
        paddingVertical:5,
    },
});
export default Suggestions;