import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../src/assets/logo.png';

import styles from './style';

export default function Detail() {
    const navigation = useNavigation();
    const message    = "Olá, mundo";

    function navigationBack() {
        navigation.goBack()
    }
    
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['desenvolvimento@ciapixel.com.br'],
            body: "Olá, mundo" 
        });
    }

    function whatsApp() {
        Linking.openURL(`whatsapp://send?phone=5517981304808&t=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]} > ONG: </Text>
                <Text style={styles.incidentValue} > APAD </Text>
                
                <Text style={styles.incidentProperty} > Caso: </Text>
                <Text style={styles.incidentValue} > Cadelinha </Text>
                
                <Text style={styles.incidentProperty} > Valor: </Text>
                <Text style={styles.incidentValue} > R$ 120,00 </Text>                
            </View>
        
            <View>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato.</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={whatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}