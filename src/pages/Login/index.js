import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    text: {
        marginTop: 50,
        marginBottom: 20,
        textAlign: "center"
    }
});

export default function Login(props) {

    const [idioma, setIdioma] = useState('portugues')
    useEffect(() => {
        if (props?.route?.params?.idioma) {
            setIdioma(props?.route?.params?.idioma)
        }
    })

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <Image source={require('../../../assets/logo.jpg')}
                    style={{ width: 415, height: 370 }}
                />
                <Text style={styles.text}>
                    {idioma == 'portugues' ? `FAÇA SEU LOGIN OU FACA SEU CADASTRO` :
                        idioma == 'ingles' ? `LOG IN OR SIGN UP` :
                            idioma == 'frances' ? `CONNECTEZ-VOUS OU INSCRIVEZ-VOUS` :
                                idioma == 'espanhol' ? `INICIE SESIÓN O REGÍSTRESE` : ``}
                </Text>
                <Input

                    placeholder=
                    {idioma == 'portugues' ? `E-mail` :
                        idioma == 'ingles' ? `Email` :
                            idioma == 'frances' ? `Messagerie électronique` :
                                idioma == 'espanhol' ? `Correo electrónico` : ``}
                    leftIcon={<Icon name="user" size={24} color="black" />}
                />
                <Input
                    placeholder=
                    {idioma == 'portugues' ? `Senha` :
                        idioma == 'ingles' ? `Password` :
                            idioma == 'frances' ? `Mot de passe` :
                                idioma == 'espanhol' ? `Contraseña` : ``}
                    leftIcon={
                        <Icon name="lock" size={24} color="black" secureTextEntry={true} />
                    }
                />
                <TouchableHighlight
                    style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', marginLeft: 8, borderRadius: 10, marginBottom: 5 }}
                    onPress={() => props.navigation.navigate('Listagem', { 'idioma': idioma })}
                    underlayColor="transparent"
                >
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                    >
                        {idioma == 'portugues' ? `ENTRAR` :
                            idioma == 'ingles' ? `LOGIN` :
                                idioma == 'frances' ? `ENTRER` :
                                    idioma == 'espanhol' ? `ENTRAR` : ``}
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', borderRadius: 10, marginLeft: 8 }}
                    onPress={() => props.navigation.navigate('Cadastro', { 'idioma': idioma })}
                    underlayColor="transparent"
                >
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                    >
                        {idioma == 'portugues' ? `REGISTRAR-SE` :
                            idioma == 'ingles' ? `SING UP` :
                                idioma == 'frances' ? `S'ENREGISTRER` :
                                    idioma == 'espanhol' ? `ÚNETE` : ``}
                    </Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}