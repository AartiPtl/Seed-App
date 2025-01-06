import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* <Image
        source={require('./assets/account-circle.png')}
        style={styles.profileImage}
      /> */}
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile No."
        value={mobileNo}
        onChangeText={setMobileNo}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Aadhar No."
        value={aadharNo}
        onChangeText={setAadharNo}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Village"
        value={village}
        onChangeText={setVillage}
      />
      <TextInput
        style={styles.input}
        placeholder="District"
        value={district}
        onChangeText={setDistrict}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <Text style={styles.saveButton}>Save</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default EditProfileScreen;
