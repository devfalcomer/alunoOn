import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

export default function Boleto(props) {

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
                {idioma == 'portugues' ? `BOLETOS A PAGAR` :
                    idioma == 'ingles' ? `BOLETOS PAYABLE` :
                        idioma == 'frances' ? `BOLETOS PAYABLE` :
                            idioma == 'espanhol' ? `BOLETOS PAGADEROS` : ``}</Text>

            <Text style={{ textAlign: 'center' }}>03399.63290 64000.000006 00125.201020 4 56140000017832</Text>
            <Text style={{ textAlign: 'center' }}>04587.63290 78000.100006 00125.201020 4 56140000017832</Text>
            <Text style={{ textAlign: 'center' }}>03399.63290 64000.000006 00125.201020 4 56140000070478</Text>
            <Text style={{ textAlign: 'center' }}>03399.63290 64000.000006 00125.201020 4 56140000058021</Text>
        </View>
    )
}