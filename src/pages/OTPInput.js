import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleInputChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) {
            refs[index + 1].focus();

        }
        if (index == 3) {
            const otpString = newOtp.join('');

            handleVerify(otpString);
        }
    };
    const handleVerify = (otpString) => {
        console.log('otp.length', otp)
        if (otpString.length === 4) {
            // Alert.alert('Success', `OTP Verified`);

            navigation.navigate('SuccessScreen')

        } else {
            Alert.alert('Error', 'Please enter a valid 4-digit OTP');
        }
    };
    const refs = [];


    const ResendOtp = () => {
        Alert.alert('Info', 'OTP has been resent to your mobile number.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify your Phone number</Text>
            <Text style={styles.subtitle}>Please Enter your 4-digit OTP code here</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(value) => handleInputChange(value, index)}
                        ref={(input) => (refs[index] = input)}
                    />
                ))}
            </View>
            <TouchableOpacity onPress={ResendOtp}>
                <Text style={styles.resendText}>
                    Didn't you receive any code?{" "}
                    <Text style={styles.resendLink}>Resend Code</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleVerify(otp.join(''))}>
                <Text style={styles.buttonText}> Verify Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fff',
    },
    resendText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    resendLink: {
        color: 'green',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
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

export default OTPVerificationScreen;
