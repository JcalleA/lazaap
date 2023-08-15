import React, { useState } from "react";
import {StyleSheet,Button, Image, Modal, View, Text, Pressable } from 'react-native';



const Welcome = ({navigation,route}) => {

    
    
    
    
    return (
        <View style={styles.container}>
        
            
            <Image
                style={styles.logo}
                source={require('../../../assets/logo.png')}/>
                <View style={styles.button}>
                    <Pressable
                    onPress={()=>navigation.navigate('Login')}
                    style={styles.buttonPress}>
                        <Text style={styles.buttonText}>Comenzar</Text>
                    </Pressable>
                </View>

            <Text style={styles.titulo}>Bienbenido a la mejor <Text style={styles.amarillo}>APP</Text> de comercio en Zarzal</Text>
            
        </View>
    )

}

const styles = StyleSheet.create({

    logo:{
        flex:3,
        marginHorizontal:20,
        width: 400,
    },
    
    container: {
        
        flex: 7,
        flexDirection:'column',
        backgroundColor: '#DFE2E7',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    titulo: {
        flex:1,
        fontSize: 30,
        fontWeight: '800',
        textAlign:'center',
        
    },
    amarillo:{
        fontSize:40,
        textShadowColor:'#000000',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius: 5,
        color:'#FFD437',
    },
    button:{
        marginBottom:20,
        flexDirection:'row',
        backgroundColor:'#000000',
        borderRadius:50,
        
    },
    buttonPress:{
        justifyContent:'center',
        height:80,
        width:'90%',
        
    },
    buttonText:{
        color:'#FFD437',
        fontSize:45,
        fontWeight:'800',
        textAlign:'center',
        
    },
})

export default Welcome

