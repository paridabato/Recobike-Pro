import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, Image, Pressable, TextInput} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {StatusBar} from "expo-status-bar";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default function SaisirNumero({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

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
                marginTop: hp(10)

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
            text_button_s:{
                fontSize: wp(5),
                fontWeight: '800',
                color: '#fff',
            },
            button_grin: {
                alignItems: 'center',
                justifyContent: 'center',
                height: hp(6),
                width: wp(80),
                borderRadius: hp(3),
                backgroundColor: '#96bf1f'
            },
            code_scanner:{
                height: wp(70),
                width: wp(70),
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: hp(5),
            },
            footer:{
                position: 'absolute',
                bottom: 0,
                marginBottom: hp(5)
            },
            input: {
                borderWidth: 2,
                borderColor: '#000',
                paddingVertical: hp(1),
                paddingHorizontal: wp(5),
                fontSize: wp(8),
                height: hp(10),
                width: wp(80),
                borderRadius: hp(3),
                marginBottom: hp(5),
                textTransform: 'uppercase'
            },
        }
    );

    return (
        <View style={styles.am_signin_wrapper}>
            <View style={styles.am_signin_box}>
                <StatusBar style="auto" />
                <View style={styles.row_no_gutters}>
                    <View style={styles.center}>
                        <Image source={require('./../assets/logo.png')} />
                        <Text style={styles.text}>Saisir un numéro</Text>
                    </View>
                    <View style={styles.center}>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.center}>
                        <Pressable style={styles.button_grin} onPress={() => setScanned(false)}>
                            <Text style={styles.text_button_s}>Continuer</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button_red} onPress={() => navigation.navigate('Enregisterer')}>
                    <Text style={styles.text_button}>Retour au menu</Text>
                </Pressable>
            </View>
        </View>
    );
}
