import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

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

export default function Cadastro({ navigation }) {

    return (
        <ScrollView>
            <View>
                <Image source={{ uri: 'https://th.bing.com/th/id/OIP.CaywjIRYDLq-cTn6Hj1cogAAAA?pid=ImgDet&rs=1' }}
                    style={{ width: 415, height: 370 }}
                />
                <Text style={styles.text}>PREENCHA OS DADOS ABAIXO</Text>
                <Input
                    placeholder="Nome"
                    leftIcon={<Icon name="user" size={24} color="black" />}
                />
                <Input
                    placeholder="CPF"
                    leftIcon={<Icon name="id-badge" size={24} color="black" />}
                />
                <Input
                    placeholder="Endereço"
                    leftIcon={<Icon name="home" size={24} color="black" />}
                />
                <Input
                    placeholder="Data de nascimento"
                    leftIcon={<Icon name="birthday-cake" size={24} color="black" />}
                />
                <Input
                    placeholder="Celular"
                    leftIcon={<Icon name="mobile" size={24} color="black" />}
                />
                <Input
                    placeholder="Telefone Residencial"
                    leftIcon={<Icon name="phone" size={24} color="black" />}
                />
                <Input
                    placeholder="Senha"
                    leftIcon={
                        <Icon name="lock" size={24} color="black" secureTextEntry={true} />
                    }
                />
                <Button title="REGISTRAR-SE" onPress={() => navigation.navigate('Listagem')}/>
                <Button title="VOLTAR" onPress={()=> navigation.goBack()}/>
            </View>
        </ScrollView>
    )
}