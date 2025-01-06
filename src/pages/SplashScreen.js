import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSplash(false);
            navigation.navigate('WelcomeScreen');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            {showSplash && (
                <View style={styles.SplashContainer}>
                    <Image source={require('../../assets/footer-logo.png')}
                        style={styles.logo} />
                    <Text style={styles.welcomeText}>Welcome to PAN SEEDS</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    SplashContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom: 50,
    },
    welcomeText: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
    }
});

export default SplashScreen;