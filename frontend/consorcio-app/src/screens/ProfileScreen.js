import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState('FABIAN GARCIA');
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const handleUpdateName = (newName) => {
    setFullName(newName);
  };

  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemContent}>
        <Ionicons name={icon} size={24} color="#666" />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  const AboutSection = () => (
    <>
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => setIsAboutExpanded(!isAboutExpanded)}
      >
        <View style={styles.menuItemContent}>
          <Ionicons name="information-circle-outline" size={24} color="#666" />
          <Text style={styles.menuItemText}>Acerca de ConsorcioAbierto</Text>
        </View>
        <Ionicons 
          name={isAboutExpanded ? "chevron-up" : "chevron-down"} 
          size={24} 
          color="#666" 
        />
      </TouchableOpacity>
      
      {isAboutExpanded && (
        <View style={styles.submenuContainer}>
          <TouchableOpacity style={[styles.menuItem, styles.submenuItem]}>
            <View style={styles.menuItemContent}>
              <Ionicons name="document-text-outline" size={24} color="#666" />
              <Text style={styles.menuItemText}>Términos y Condiciones</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.menuItem, styles.submenuItem, styles.lastSubmenuItem]}>
            <View style={styles.menuItemContent}>
              <Ionicons name="shield-outline" size={24} color="#666" />
              <Text style={styles.menuItemText}>Políticas de Privacidad</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('UnitExpenses')}>
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Greeting and Name */}
      <View style={styles.profileHeader}>
        <Text style={styles.greeting}>
          Hola <Text style={styles.emoji}>👋</Text>
        </Text>
        <Text style={styles.name}>{fullName}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem 
          icon="person-outline" 
          title="Datos de perfil" 
          onPress={() => navigation.navigate('ProfileDetails', {
            onUpdateName: handleUpdateName
          })} 
        />
        <MenuItem 
          icon="key-outline" 
          title="Cambiar contraseña" 
          onPress={() => {}} 
        />
        <MenuItem 
          icon="location-outline" 
          title="Mis unidades" 
          onPress={() => navigation.navigate('MyUnits')} 
        />
        <AboutSection />
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Cerrar sesión</Text>
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
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
  },
  profileHeader: {
    padding: 16,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  signOutButton: {
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  signOutText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
  },
  submenuContainer: {
    backgroundColor: '#F8F8F8',
  },
  submenuItem: {
    backgroundColor: '#F8F8F8',
    paddingLeft: 32, // Indentación para el submenú
  },
  lastSubmenuItem: {
    borderBottomWidth: 0,
  },
}); 