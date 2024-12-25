import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UnitExpensesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="business-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>1502</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Expenses Card */}
        <View style={styles.expensesCard}>
          <View style={styles.expensesHeader}>
            <Text style={styles.expensesTitle}>Expensas Septiembre 2024</Text>
            <TouchableOpacity>
              <Text style={styles.detailsLink}>Ver detalle</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.totalLabel}>Total a pagar:</Text>
            <Text style={styles.amount}>$ 1.152.260,00</Text>
            <Text style={styles.dueDate}>Primer vencimiento 10/09/2024</Text>
          </View>

          <View style={styles.dotIndicator}>
            <View style={styles.dot} />
          </View>
        </View>

        {/* Payment Options */}
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Opciones de Pago</Text>
        </TouchableOpacity>

        <View style={styles.transferInfo}>
          <Text style={styles.transferQuestion}>
            ¿Pagaste por transferencia o depósito bancario?
          </Text>
          <TouchableOpacity>
            <Text style={styles.informPaymentLink}>Informá tu pago</Text>
          </TouchableOpacity>
        </View>

        {/* Communications Section */}
        <View style={styles.communicationsHeader}>
          <Text style={styles.communicationsTitle}>Últimos comunicados</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Communications')}>
            <Text style={styles.viewAllLink}>Ir a comunicados</Text>
          </TouchableOpacity>
        </View>

        {/* Communication Card */}
        <TouchableOpacity 
          style={styles.communicationCard}
          onPress={() => navigation.navigate('Communications')}
        >
          <View style={styles.communicationDot} />
          <View style={styles.communicationContent}>
            <Text style={styles.communicationTitle}>
              Liquidación de expensas - Periodo ...
            </Text>
            <Text style={styles.communicationDate}>30 ago</Text>
            <Text style={styles.communicationText}>
              Señores Residentes DONNA TERRA Presente{'\n'}
              De nuestra mayor consideración: Por medio de la presente s...
            </Text>
          </View>
        </TouchableOpacity>

        {/* Reservations Section */}
        <View style={styles.communicationsHeader}>
          <Text style={styles.communicationsTitle}>Reservas activas</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllLink}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        {/* Reservations Card */}
        <View style={[styles.communicationCard, styles.reservationsCard]}>
          <View style={styles.reservationsContent}>
            <Text style={styles.noReservationsText}>
              No hay reservas activas en este momento
            </Text>
            <TouchableOpacity style={styles.addReservationButton}>
              <Text style={styles.addReservationText}>Agregar reserva</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#4A90E2" />
          <Text style={[styles.navText, styles.activeNavText]}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Onboarding')}
        >
          <Ionicons name="business-outline" size={24} color="#666" />
          <Text style={styles.navText}>Mi unidad</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Communications')}
        >
          <Ionicons name="mail-outline" size={24} color="#666" />
          <Text style={styles.navText}>Comunicados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#666" />
          <Text style={styles.navText}>Reservas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu-outline" size={24} color="#666" />
          <Text style={styles.navText}>Más</Text>
        </TouchableOpacity>
      </View>
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
    color: '#4A90E2',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  expensesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
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
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  expensesTitle: {
    fontSize: 18,
    color: '#666',
  },
  detailsLink: {
    color: '#4A90E2',
    fontSize: 16,
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  dueDate: {
    fontSize: 16,
    color: '#666',
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
  },
  paymentButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  paymentButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
  },
  transferInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  transferQuestion: {
    color: '#666',
    marginBottom: 8,
  },
  informPaymentLink: {
    color: '#4A90E2',
    fontSize: 16,
  },
  communicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  communicationsTitle: {
    fontSize: 18,
    color: '#333',
  },
  viewAllLink: {
    color: '#4A90E2',
    fontSize: 16,
  },
  communicationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
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
  communicationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
    marginTop: 6,
    marginRight: 12,
  },
  communicationContent: {
    flex: 1,
  },
  communicationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  communicationDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  communicationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#4A90E2',
  },
  reservationsCard: {
    marginBottom: 24,
  },
  reservationsContent: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  noReservationsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  addReservationButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  addReservationText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
  },
}); 