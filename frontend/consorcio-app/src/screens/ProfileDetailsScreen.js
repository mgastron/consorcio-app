import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  TextInput,
  Modal,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import API_URL from '../config/api';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProfileDetailsScreen({ navigation, route }) {
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [formData, setFormData] = useState({
    name: 'FABIAN',
    lastName: 'GARCIA',
    email: 'fabian630618@hotmail.com',
    birthDate: 'Fecha de nacimiento',
    identification: 'Identificación',
    phone: 'Celular'
  });

  const getInputType = (field) => {
    switch (field) {
      case 'birthDate':
        return 'date';
      case 'phone':
        return 'numeric';
      default:
        return 'text';
    }
  };

  const formatDate = (date) => {
    if (!date || date === 'Fecha de nacimiento') return 'Fecha de nacimiento';
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const EditModal = ({ field, value, visible, onClose, onSave }) => {
    const [localValue, setLocalValue] = useState(value);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const inputType = getInputType(field);

    const handleDateChange = (event, selectedDate) => {
      setShowDatePicker(false);
      if (selectedDate) {
        setLocalValue(selectedDate.toISOString());
      }
    };

    const renderInput = () => {
      switch (inputType) {
        case 'date':
          return (
            <>
              <TouchableOpacity 
                style={styles.modalInput}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{formatDate(localValue)}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={localValue === 'Fecha de nacimiento' ? new Date() : new Date(localValue)}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                />
              )}
            </>
          );
        case 'numeric':
          return (
            <TextInput
              style={styles.modalInput}
              value={localValue}
              onChangeText={setLocalValue}
              keyboardType="numeric"
              maxLength={10}
            />
          );
        default:
          return (
            <TextInput
              style={styles.modalInput}
              value={localValue}
              onChangeText={setLocalValue}
            />
          );
      }
    };

    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar {field}</Text>
            {renderInput()}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={() => onSave(localValue)}
              >
                <Text style={styles.modalButtonTextPrimary}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const handleFieldSave = async (value) => {
    const newFormData = { ...formData, [editingField]: value };
    setFormData(newFormData);
    
    // Si se modificó el nombre o apellido, actualizar la pantalla principal
    if (editingField === 'name' || editingField === 'lastName') {
      const fullName = `${newFormData.name} ${newFormData.lastName}`;
      // Actualizar el nombre en la pantalla principal
      route.params?.onUpdateName?.(fullName);
    }
    
    setEditingField(null);
  };

  const handleSaveAll = async () => {
    try {
      const response = await axios.put(`${API_URL}/users/profile`, formData);
      if (response.status === 200) {
        // Actualizar el nombre en la pantalla principal
        const fullName = `${formData.name} ${formData.lastName}`;
        route.params?.onUpdateName?.(fullName);
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const FormField = ({ label, field, value, editable = true, validated = false }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.fieldValue}>{value}</Text>
        {editable && (
          <TouchableOpacity onPress={() => setEditingField(field)}>
            <Ionicons name="pencil" size={20} color="#4A90E2" />
          </TouchableOpacity>
        )}
      </View>
      {validated && (
        <View style={styles.validationContainer}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <Text style={styles.validationText}>Correo electrónico validado</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Datos de perfil</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Form Fields */}
        <FormField label="*Nombre" field="name" value={formData.name} />
        <FormField label="*Apellido" field="lastName" value={formData.lastName} />
        <FormField 
          label="*Correo electrónico" 
          field="email"
          value={formData.email} 
          validated={true}
        />
        <FormField 
          label="Fecha de nacimiento" 
          field="birthDate" 
          value={formatDate(formData.birthDate)}
        />
        <FormField label="Identificación" field="identification" value={formData.identification} />
        <FormField label="Celular" field="phone" value={formData.phone} />

        {/* Phone Verification Warning */}
        <View style={styles.warningContainer}>
          <Ionicons name="warning" size={20} color="#FFA000" />
          <Text style={styles.warningText}>
            Es necesario verificar el número de teléfono
          </Text>
        </View>

        {/* Emergency Contact */}
        <TouchableOpacity style={styles.emergencyContact}>
          <Text style={styles.emergencyContactText}>Contacto de emergencia</Text>
          <Ionicons name="chevron-down" size={24} color="#666" />
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity style={styles.deleteAccount}>
          <Ionicons name="trash-outline" size={24} color="#666" />
          <Text style={styles.deleteAccountText}>Eliminar cuenta</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAll}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>

      <EditModal
        field={editingField}
        value={formData[editingField] || ''}
        visible={!!editingField}
        onClose={() => setEditingField(null)}
        onSave={handleFieldSave}
      />
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  fieldContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldValue: {
    fontSize: 16,
    color: '#333',
  },
  validationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  validationText: {
    fontSize: 14,
    color: '#4CAF50',
    marginLeft: 8,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  warningText: {
    fontSize: 14,
    color: '#FFA000',
    marginLeft: 8,
  },
  emergencyContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  emergencyContactText: {
    fontSize: 16,
    color: '#333',
  },
  deleteAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  deleteAccountText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    padding: 12,
    marginLeft: 8,
  },
  modalButtonPrimary: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#666',
  },
  modalButtonTextPrimary: {
    color: 'white',
  },
}); 