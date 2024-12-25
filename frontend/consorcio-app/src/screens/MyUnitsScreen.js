import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyUnitsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('units'); // 'units' or 'requests'

  const TabButton = ({ title, isActive, onPress }) => (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={onPress}
    >
      <Text style={[
        styles.tabButtonText,
        isActive && styles.activeTabButtonText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const UnitCard = ({ unit, location, management }) => (
    <View style={styles.unitCard}>
      <View style={styles.unitInfo}>
        <Text style={styles.unitTitle}>{unit}</Text>
        <Text style={styles.unitLocation}>{location}</Text>
        <Text style={styles.unitManagement}>{management}</Text>
      </View>
      <TouchableOpacity style={styles.unitIcon}>
        <Ionicons name="document-text-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mis unidades</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TabButton
          title="Unidades asociadas"
          isActive={activeTab === 'units'}
          onPress={() => setActiveTab('units')}
        />
        <TabButton
          title="Mis solicitudes"
          isActive={activeTab === 'requests'}
          onPress={() => setActiveTab('requests')}
        />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {activeTab === 'units' && (
          <UnitCard
            unit="DONNA TERRA - 1502"
            location="C.A.B.A. - San Nicolás"
            management="ADMINISTRACIÓN BURGUEÑO HAPPEL"
          />
        )}
      </ScrollView>

      {/* Add Unit Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Agregar unidad</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 20,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabButtonText: {
    color: '#4A90E2',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  unitCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  unitInfo: {
    flex: 1,
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  unitLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  unitManagement: {
    fontSize: 14,
    color: '#666',
  },
  unitIcon: {
    padding: 4,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    margin: 16,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
}); 