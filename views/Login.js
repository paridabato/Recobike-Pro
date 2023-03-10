import {Image, StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




function Login({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const styles = StyleSheet.create({
        am_signin_wrapper: {
            // minHeight: hp(100),
            // justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#fff'
        },
        am_signin_box: {
            width: wp(100),
            marginTop: hp(5)
        },
        row_no_gutters: {
            width: wp(100),
            backgroundColor: '#fff',
            paddingHorizontal: wp(10)
        },
        center: {
            alignItems: 'center',
        },
        text: {
            alignItems: 'center',
            fontSize: wp(7),
            fontWeight: '500',
            marginVertical: hp(5),
        },
        input: {
            height: hp(7),
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: hp(3),
            paddingVertical: hp(1),
            paddingHorizontal: wp(5),
            fontSize: wp(6),
            marginBottom: hp(1)
        },
        label: {
            marginBottom: hp(1),
            fontSize: wp(6),
            fontWeight: '500',
            marginLeft: wp(2)
        },
        form_group: {
            marginBottom: hp(1)
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            height: hp(6),
            width: wp(45),
            borderRadius: hp(3),
            backgroundColor: '#96bf1f'
        },
        text_button: {
            fontSize: hp(3),
            fontWeight: '800',
            color: '#fff'
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp(3)
        },
        checkbox: {
            margin: 8
        },
        paragraph: {
            fontSize: wp(6),
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
