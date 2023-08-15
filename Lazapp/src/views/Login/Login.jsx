import React, { useState } from "react";
import { StyleSheet, Button, Image, Modal, View, Text, Pressable } from 'react-native';




const Login = () => {





    return (
        <View style={styles.container}>
            <Text>Hola esde Login</Text>

        </View>
    )

}

const styles = StyleSheet.create({

    logo: {
        flex: 3,
        marginHorizontal: 20,
        width: 400,
    },

    container: {

        flex: 7,
        flexDirection: 'column',
        backgroundColor: '#DFE2E7',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    titulo: {
        flex: 1,
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',

    },
    amarillo: {
        fontSize: 40,
        textShadowColor: '#000000',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 5,
        color: '#FFD437',
    },
    button: {
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: '#000000',
        borderRadius: 50,

    },
    buttonPress: {
        justifyContent: 'center',
        height: 80,
        width: '90%',

    },
    buttonText: {
        color: '#FFD437',
        fontSize: 45,
        fontWeight: '800',
        textAlign: 'center',

    },
})

export default Login

