import {Image, StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';




function Login({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const styles = StyleSheet.create({
        am_signin_wrapper: {
            minHeight: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#fff'
        },
        am_signin_box: {
            width: '100%',
            marginTop: '15%'
        },
        tx_center: {
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '15%',
            marginBottom: '20%'
        },
        row_no_gutters: {
            backgroundColor: '#fff',
            paddingHorizontal: '10%'
        },
        center: {
            alignItems: 'center',
        },
        text: {
            alignItems: 'center',
            fontSize: '30%',
            fontWeight: '500',
            marginVertical: '15%',
        },
        tx_gray_800: {
            color: '#343a40',
            marginBottom: '10%',
            marginTop: '10%',
            fontSize: '25%',
            fontWeight: '500'
        },
        input: {
            height: 60,
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: '22',
            padding: 10,
            fontSize: '30%',
            marginBottom: '3%'
        },
        label: {
            marginBottom: '2%',
            fontSize: '25%',
            fontWeight: '500',
            marginLeft: '2%'
        },
        form_group: {
            marginBottom: '5%'
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: '60%',
            borderRadius: '22',
            backgroundColor: '#96bf1f'
        },
        text_button: {
            fontSize: 25,
            fontWeight: '800',
            color: '#fff'
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
        },
        checkbox: {
            margin: 8
        },
        paragraph: {
            fontSize: 25,
            fontWeight: '500',
        },
    });

    return (
        <View style={styles.am_signin_wrapper}>
            <View style={styles.am_signin_box}>
                <StatusBar style="auto" />
                <View style={styles.row_no_gutters}>
                    <View style={styles.center}>
                        <Image source={require('./../assets/logo.png')} />
                        <Text style={styles.text}>Veuillez vous identifier</Text>
                    </View>
                    <View style={styles.form_group}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.form_group}>
                        <Text style={styles.label}>Mot de passe</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.section}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#96bf1f' : undefined}
                        />
                        <Text style={styles.paragraph}>Rester connecté ?</Text>
                    </View>
                    <View style={styles.center}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.text_button}>Connexion</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );

}



export default Login
