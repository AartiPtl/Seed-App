import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const navigation=useNavigation();

    const handleNext = () => {
        if (mobileNumber.length === 10) {
            // Alert.alert('Success', `Code sent to ${mobileNumber}`);
            navigation.navigate('VerificationScreen')
            
        } else {
            Alert.alert('Error', 'Please enter a valid 10-digit mobile number');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Use Your Mobile Number To Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={(text) => setMobileNumber(text)}
                />
            </View>
            <Text style={styles.infoText}>
                You'll receive a 4-digit code on this number
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    infoText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Login;
