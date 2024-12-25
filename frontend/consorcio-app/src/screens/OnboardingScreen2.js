import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function OnboardingScreen2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={24} color="#666" />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.content}>
          {/* Illustration */}
          <View style={styles.illustration}>
            <Ionicons name="analytics" size={width * 0.4} color="#4A90E2" />
          </View>

          {/* Text Content */}
          <Text style={styles.title}>
            Optimizá la{'\n'}organización y la{'\n'}transparencia
          </Text>
          
          <Text style={styles.description}>
            Con la nueva función de Actividad de la Unidad, consultá eventos y acciones relevantes, con detalles de quién los realizó
          </Text>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('OnboardingStep3')}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 8,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  illustration: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4A90E2',
    width: 24,
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    marginHorizontal: 24,
    marginBottom: 32,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
}); 