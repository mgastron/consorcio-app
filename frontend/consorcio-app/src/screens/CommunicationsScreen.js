import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const communications = [
  {
    id: '1',
    title: 'Liquidación de expensas - P...',
    date: '30 Ago',
    time: '06:42',
    preview: 'Señores Residentes DONNA TERRA Presente De nuestra mayor consideración: Por medio de la presente s...',
    isUnread: true,
  },
  {
    id: '2',
    title: 'Ascensor N° 1 fuera de serv...',
    date: '26 Ago',
    time: '15:46',
    preview: 'Sres. residentes: Se informa que el ASCENSOR PRINCIPAL N° 1 por tareas de mantenimiento permanecerá fuera de servic...',
    isUnread: true,
  },
  {
    id: '3',
    title: 'Limpieza de tanques - Vier...',
    date: '22 Ago',
    time: '18:35',
    preview: 'Sres. Residentes: Se informa que el día de mañana viernes 23 de agosto a partir de las 9 hs se iniciarán las tareas ...',
    isUnread: true,
  },
  {
    id: '4',
    title: 'Información sobre manteni...',
    date: '21 Ago',
    time: '19:35',
    preview: 'Sres. Propietarios Se informa que en la próxima liquidación a procesar, correspondiente al periodo AGOSTO 2024, ser...',
    isUnread: true,
  },
];

export default function CommunicationsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const CommunicationItem = ({ item }) => (
    <TouchableOpacity style={styles.communicationItem}>
      <View style={styles.communicationHeader}>
        <View style={styles.titleContainer}>
          {item.isUnread && <View style={styles.unreadDot} />}
          <Text style={styles.communicationTitle}>{item.title}</Text>
        </View>
        <Text style={styles.communicationDate}>
          {item.date} {item.time}
        </Text>
      </View>
      <Text style={styles.communicationPreview} numberOfLines={2}>
        {item.preview}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comunicados</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por título"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="alert-circle-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Communications List */}
      <ScrollView style={styles.communicationsList}>
        {communications.map((item) => (
          <CommunicationItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  filterText: {
    color: '#4A90E2',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  communicationsList: {
    flex: 1,
  },
  communicationItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  communicationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
  },
  communicationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  communicationDate: {
    fontSize: 14,
    color: '#4A90E2',
    marginLeft: 8,
  },
  communicationPreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
}); 