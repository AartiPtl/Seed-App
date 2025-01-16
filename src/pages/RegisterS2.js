import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

const OTPVerification = ({ navigation }) => {
    const [otp, setOtp] = useState('');


    const handleVerify = () => {
        if (otp.length === 4) {
            // Alert.alert('Success', `OTP Verified`);

            navigation.navigate('SuccessScreen')

        } else {
            Alert.alert('Error', 'Please enter a valid 4-digit OTP');
        }
    };

    const ResendOtp = () => {
        Alert.alert('Info', 'OTP has been resent to your mobile number.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Phone verification</Text>
            <Text style={styles.infoText}>Please Enter 4-Digit Code Sent To You</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    keyboardType="Number-pad"
                    value={otp}
                    onChangeText={(text) => setOtp(text)}
                />
            </View>
            <TouchableOpacity onPress={ResendOtp}>
                <Text style={styles.ResendText}>
                    Resend OTP
                </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleVerify}>
                <Text style={styles.buttonText}>Verify Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        color: 'grey',
        marginBottom: 20,
        textAlign: 'center',
    },
    ResendText: {
        color: 'green',
        fontSize: 14,
        marginBottom: '20',
        textDecorationLine: 'underline'
    },

    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default OTPVerification;
