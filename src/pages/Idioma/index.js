import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

const styles = StyleSheet.create({
    textRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
    }
})

export default function Idioma(props) {

    const [value, setValue] = useState('portugues');
    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Image source={require('../../../assets/logo.jpg')}
                style={{ width: 415, height: 400 }}
            />

            <Text style={{ fontSize: 20, textAlign: 'center' }}>
            {value == 'portugues' ? `ESCOLHA UM IDIOMA DE SUA PREFERÊNCIA` :
                                value == 'ingles' ? `CHOOSE A LANGUAGE OF YOUR CHOICE` :
                                    value == 'frances' ? `CHOISISSEZ UNE LANGUE DE VOTRE CHOIX` :
                                        value == 'espanhol' ? `ELIJA UN IDIOMA DE SU ELECCIÓN` : ``}
            </Text>
            <RadioButton.Group style={styles.radioGroup} onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.textRadio}>
                    <RadioButton value="ingles" />
                    <Text>Inglês</Text>
                </View>
                <View style={styles.textRadio}>
                    <RadioButton value="portugues" />
                    <Text>Português</Text>
                </View>
                <View style={styles.textRadio}>
                    <RadioButton value="frances" />
                    <Text>Francês</Text>
                </View>
                <View style={styles.textRadio}>
                    <RadioButton value="espanhol" />
                    <Text>Espanhol</Text>
                </View>
            </RadioButton.Group>
            <Button title="TRADUZIR" onPress={() => props.navigation.navigate('Listagem', { 'idioma': value })} />
        </View>
    )
}
