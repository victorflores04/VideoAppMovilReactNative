import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image source={require('../../../assets/logoMovie.png')}
                    style={style.logo} />
                    <View style={style.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const style =StyleSheet.create({
    logo:{
        width: 190,
        height: 50,
        resizeMode: 'contain',
    },
    container:{
        flexDirection:"row",
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
    ,
    right:{
        flex:1,
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
});
export default Header;