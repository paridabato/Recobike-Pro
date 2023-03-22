import {Image, StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";

function Enregisterer({ navigation }){
    const styles = StyleSheet.create({
            am_signin_wrapper: {
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
                fontSize: wp(5.5),
                fontWeight: '500',
                marginVertical: hp(5),
            },
            button_red: {
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(7),
                width: wp(80),
                borderRadius: hp(3),
                backgroundColor: '#9a0013',
                marginVertical: hp(1),
                marginTop: hp(17),
            },
            button: {
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(10),
                width: wp(80),
                borderRadius: hp(3),
                backgroundColor: '#96bf1f',
                marginVertical: hp(1),
            },
            text_button: {
                fontSize: wp(5),
                fontWeight: '800',
                color: '#fff',
                textTransform: 'uppercase'
            },
            footer:{
                position: 'absolute',
                bottom: 0,
                marginBottom: hp(5)
            }
        }
    );

    return (
        <View style={styles.am_signin_wrapper}>
            <View style={styles.am_signin_box}>
                <StatusBar style="auto" />
                <View style={styles.row_no_gutters}>
                    <View style={styles.center}>
                        <Image source={require('./../assets/logo.png')} />
                        <Text style={styles.text}>Enregistrer un vélo</Text>
                    </View>
                    <View style={styles.center}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ScannerMarquage')}>
                            <Text style={styles.text_button}>Scanner un marquage</Text>
                        </Pressable>
                    </View>
                    <View style={styles.center}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('ScannerQrCode')}>
                            <Text style={styles.text_button}>Scanner un QR-code</Text>
                        </Pressable>
                    </View>
                    <View style={styles.center}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('SaisirNumero')}>
                            <Text style={styles.text_button}>Saisir le numero</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button_red} onPress={() => navigation.navigate('Action')}>
                    <Text style={styles.text_button}>Retour au menu</Text>
                </Pressable>
            </View>
        </View>
    )
}


export default Enregisterer
