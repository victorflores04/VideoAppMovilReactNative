import React from 'react';
import {
Text,
ImageBackground,
StyleSheet,
} from 'react-native';

function Category(props){
    return(
        <ImageBackground
        style={styles.wrapper}
        source={{
            uri: props.background_image
        }}
        >
            <Text style={styles.titleGenre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width: 290,
        height: 120,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    titleGenre:{
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor:'rgba(0,0,0,.75)',
        textShadowOffset:{
            width: 2,
            height: 2,

        },
        textShadowRadius:0,

    },
})

export default Category;