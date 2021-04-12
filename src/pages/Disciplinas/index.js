import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

export default function Disciplinas(props) {

    const [idioma, setIdioma] = useState('portugues')
    useEffect(() => {
        if (props?.route?.params?.idioma) {
            setIdioma(props?.route?.params?.idioma)
        }
    })

    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Image source={require('../../../assets/logo.jpg')}
                style={{ width: 415, height: 400 }}
            />
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
                {idioma == 'portugues' ? `DISCIPLINAS` :
                    idioma == 'ingles' ? `COURSES` :
                        idioma == 'frances' ? `DISCIPLINES` :
                            idioma == 'espanhol' ? `DISCIPLINAS` : ``}
            </Text>

            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                {idioma == 'portugues' ? `Programação para Dispositivos Móveis` :
                    idioma == 'ingles' ? `Mobile Programming` :
                        idioma == 'frances' ? `Programmation mobile` :
                            idioma == 'espanhol' ? `Programación móvil` : ``}</Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                {idioma == 'portugues' ? `Construção de Backend` :
                    idioma == 'ingles' ? `Backend Construction` :
                        idioma == 'frances' ? `Backend Construction` :
                            idioma == 'espanhol' ? `Construcción back-end` : ``}</Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                {idioma == 'portugues' ? `Projeto Integrado - Backend` :
                    idioma == 'ingles' ? `Integrated Project - Backend` :
                        idioma == 'frances' ? `Projet intégré - Backend` :
                            idioma == 'espanhol' ? `Proyecto integrado - Backend` : ``}</Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                {idioma == 'portugues' ? `Gerenciamento de Projetos e do Conhecimento` :
                    idioma == 'ingles' ? `Project and Knowledge Management` :
                        idioma == 'frances' ? `Gestion de projets et de connaissances` :
                            idioma == 'espanhol' ? `Gestión de proyectos y conocimiento` : ``}</Text>
        </View>
    )
}