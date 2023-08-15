import React, { useState } from "react";
import {StyleSheet, Image, Modal, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {



    return (
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={require('../../../assets/logo.png')}
            />
            <View style={styles.space}></View>
            <Icon
                onPress={() => { showModal() }}
                style={styles.icon}
                name="bars" size={30} color="#fff" />
            
        </View>
    )

    

}

const styles = StyleSheet.create({

    header:{
        height:50,
        marginTop:40,
        flexDirection:'row',
        backgroundColor:'#FFD437',
        justifyContent:'space-between',
        alignItems:'center',
    },

    space:{
        flex:6,
        
    },
    icon:{
        marginHorizontal:20,
        flex:1,
        color:'#000000'
        
    },
    logo:{
        
        marginHorizontal:20,
        width: 200,
        height: 200,
        
        
    },
    
    container: {
        
        flex: 1,
        backgroundColor: '#C5DAF5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    titulo: {
        flex:9,
        fontSize: 20,
        fontWeight: '800',
    }
    
})

export default Header