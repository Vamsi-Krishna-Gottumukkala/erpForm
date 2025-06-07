import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/shared/RootStackedList';

type FormDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FormDetail'
>;

type Props = {
  navigation: FormDetailNavigationProp;
};


const FormDetail: React.FC<Props> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [farmerName, setFarmerName] = useState('Ravi Kumar');
  const [cropName, setCropName] = useState('Peanut');
  const [season, setSeason] = useState('Rabi');
  const [region, setRegion] = useState('');
  const [landArea, setLandArea] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', {
      farmerName,
      cropName,
      season,
      region,
      landArea
    });
    setModalVisible(true);
    // Add your submit logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>ERP 1</Text>
        <TouchableOpacity style={styles.translateButton}>
          <Image
            source={require('../assets/translate.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Form Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.formTitle}>Form 1</Text>
        <Text style={styles.formSubtitle}>
          Make sure you entre the farmer details are correct.
        </Text>

        {/* Form Fields */}
        <View style={styles.formFields}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Farmer Name</Text>
            <TextInput
              style={styles.textInput}
              value={farmerName}
              onChangeText={setFarmerName}
              placeholder="Enter farmer name"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Crop Name</Text>
            <TextInput
              style={styles.textInput}
              value={cropName}
              onChangeText={setCropName}
              placeholder="Enter crop name"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Season</Text>
            <TextInput
              style={styles.textInput}
              value={season}
              onChangeText={setSeason}
              placeholder="Enter season"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Region</Text>
            <TextInput
              style={styles.textInput}
              value={region}
              onChangeText={setRegion}
              placeholder="Region"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Land Area</Text>
            <TextInput
              style={styles.textInput}
              value={landArea}
              onChangeText={setLandArea}
              placeholder="Land Area"
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View> */}
      <Modal
  animationType="fade"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Form is ready to upload!</Text>
      <Text style={styles.modalMessage}>
        Form needs to be uploaded after the network is available.
      </Text>
      <View style={styles.modalButtons}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => {
            setModalVisible(false);
            // add upload logic here
          }}
        >
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  translateButton: {
    padding: 8,
  },
  image: {
    height: 30,
    width: 30,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginTop: 24,
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#8e8e93',
    marginBottom: 32,
    lineHeight: 22,
  },
  formFields: {
    marginBottom: 32,
  },
  fieldContainer: {
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  submitButton: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  navIcon: {
    fontSize: 20,
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  width: '80%',
  backgroundColor: '#fff',
  padding: 24,
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 8,
  color: '#1c1c1e',
},
modalMessage: {
  fontSize: 14,
  color: '#666',
  marginBottom: 24,
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
},
cancelButton: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  marginRight: 10,
},
cancelButtonText: {
  color: '#333',
  fontWeight: '500',
},
uploadButton: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  backgroundColor: '#1c1c1e',
},
uploadButtonText: {
  color: '#fff',
  fontWeight: '600',
},

});

export default FormDetail;