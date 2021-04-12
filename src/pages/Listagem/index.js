import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';

export default function Listagem(props) {

    const [idioma, setIdioma] = useState('portugues')
    useEffect(() => {
        if (props?.route?.params?.idioma) {
            setIdioma(props?.route?.params?.idioma)
        }
    })

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image source={require('../../../assets/logo.jpg')}
                    style={{ width: 415, height: 500 }}
                />

                <Text style={{ textAlign: 'justify', marginHorizontal: 10, fontSize: 17 }}>
                    {
                        idioma == 'portugues' ?
                            `Começamos em 1993, quando é fundada a mantenedora Centro de Educação Superior de Brasília - CESB com o objetivo de desenvolver atividades de ensino, pesquisa e extensão em nível superior. Quatro anos depois, o MEC autoriza o funcionamento dos primeiros cursos de graduação, que funcionaram num prédio alugado na 902 Sul. Dois anos depois, o IESB faz parceria com a ESDEVA, construindo três novos prédios na 609 Norte. Em 2003, é inaugurado o Campus Edson Machado, na Asa Sul. Com uma abordagem dinâmica e inovadora, o IESB destaca-se entre as instituições de ensino pela combinação da teoria e da prática como pressuposto fundamental para uma formação de qualidade.`

                            : idioma == 'ingles' ?
                                `We started in 1993, when the maintainer Centro de Educação Superior de Brasília - CESB was founded with the aim of developing teaching, research and extension activities at a higher level. Four years later, the MEC authorises the operation of the first undergraduate courses, which worked in a rented building at 902 South. Two years later, IESB partners with ESDEVA, building three new buildings at 609 North. In 2003, the Edson Machado Campus is inaugurated in The South Asa. With an approach dynamic and innovative, IESB stands out among educational institutions by combining theory and practice as a presupposition fundamental to quality training.`

                                : idioma == 'frances' ?
                                    `Nous avons commencé en 1993, lorsque l’entretien Centro de Educação Superior de Brasília - CESB a été fondé dans le but de développer activités d’enseignement, de recherche et de vulgarisation à un niveau supérieur. Quatre ans plus tard, le MEC autorise le fonctionnement de la première cours de premier cycle, qui travaillaient dans un bâtiment loué au 902 South. Deux ans plus tard, l’IESB s’associe à l’ESDEVA, construction de trois nouveaux bâtiments au 609 Nord. En 2003, le campus Edson Machado est inauguré dans l’Asa Sud. Avec une approche dynamique et innovante, l’IESB se distingue parmi les établissements d’enseignement en combinant théorie et pratique comme présupposé base d’une formation de qualité.`

                                    : idioma == 'espanhol' ?
                                        `Comenzamos en 1993, cuando el mantenedor Centro de Educação Superior de Brasilia - CESB fue fundado con el objetivo de desarrollar actividades de enseñanza, investigación y extensión a un nivel superior. Cuatro años más tarde, el MEC autoriza el funcionamiento de la primera cursos de pregrado, que trabajaban en un edificio alquilado en 902 South. Dos años más tarde, el IESB se asocia con ESDEVA, construcción de tres nuevos edificios en 609 Norte. En 2003, el Campus Edson Machado se inaugura en The South Asa. Con un enfoque dinámico e innovador, destaca el IESB entre las instituciones educativas al combinar la teoría y la práctica como presuposición fundamental para una formación de calidad.`
                                        : ``
                    }
                </Text>

                <Text style={{ fontSize: 24, textAlign: 'center' }}>
                    {idioma == 'portugues' ? `ESCOLHA AS OPÇÕES ABAIXO` :
                        idioma == 'ingles' ? `CHOOSE THE OPTIONS BELOW` :
                            idioma == 'frances' ? `CHOISISSEZ LES OPTIONS CI-DESSOUS` :
                                idioma == 'espanhol' ? `ELIJA LAS SIGUIENTES OPCIONES` : ``}
                </Text>

                <View style={{ alignItems: "center" }}>
                    <TouchableHighlight
                        style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', marginBottom: 5, borderRadius: 10 }}
                        onPress={() => props.navigation.navigate('Boleto', { 'idioma': idioma })}
                        underlayColor="transparent"
                    >
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                        >
                            {idioma == 'portugues' ? `Boleto` :
                                idioma == 'ingles' ? `Fetlock` :
                                    idioma == 'frances' ? `Boulet` :
                                        idioma == 'espanhol' ? `Fetlock` : ``}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', marginBottom: 5, borderRadius: 10 }}
                        onPress={() => props.navigation.navigate('Disciplinas', { 'idioma': idioma })}
                        underlayColor="transparent"
                    >
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                        >
                            {idioma == 'portugues' ? `Disciplinas` :
                                idioma == 'ingles' ? `Disciplines` :
                                    idioma == 'frances' ? `Disciplines` :
                                        idioma == 'espanhol' ? `Disciplinas` : ``}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', marginBottom: 5, borderRadius: 10 }}
                        onPress={() => props.navigation.navigate('Idioma')}
                        underlayColor="transparent"
                    >
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                        >
                            {idioma == 'portugues' ? `Idioma` :
                                idioma == 'ingles' ? `Language` :
                                    idioma == 'frances' ? `Langue` :
                                        idioma == 'espanhol' ? `Idioma` : ``}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ width: '95%', height: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc2433', marginBottom: 5, borderRadius: 10 }}
                        onPress={() => props.navigation.navigate('Login', { 'idioma': idioma })}
                        underlayColor="transparent"
                    >
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}
                        >
                            {idioma == 'portugues' ? `Sair` :
                                idioma == 'ingles' ? `Logout` :
                                    idioma == 'frances' ? `Sors` :
                                        idioma == 'espanhol' ? `Salir` : ``}
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView >

    )
}