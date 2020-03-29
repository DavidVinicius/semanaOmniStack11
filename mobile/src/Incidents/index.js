import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../assets/logo.png';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api';

export default function Incidents() {

    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    async function loadIncidents() {
        const response = await api.get('incidents')

        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve!</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty} > ONG: </Text>
                        <Text style={styles.incidentValue} > {incident.name} </Text>
                        
                        <Text style={styles.incidentProperty} > Caso: </Text>
                        <Text style={styles.incidentValue} > {incident.title} </Text>
                        
                        <Text style={styles.incidentProperty} > Valor: </Text>
                        <Text style={styles.incidentValue} > {incident.value} </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            < Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />            
        </View>
    );
}