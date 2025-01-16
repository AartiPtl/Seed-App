import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {

    return (
        <ImageBackground

            source={require('../../assets/Leaf-bg.png')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/footer-logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>Welcome to</Text>

                <Text style={styles.title}>PAN SEEDS</Text>

                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <View
                        style={{
                            backgroundColor: 'green',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            padding: 10,
                        }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 100
    },
    logo: {
        width: 180,
        height: 60,
        marginBottom: 60,
    },
    welcomeText: {
        fontSize: 25,
        color: 'black',
        marginBottom: 10,
    },
    title: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    

    //buttonStyle: {
      //  paddingHorizontal: 20,
        //paddingVertical: 10,
        //backgroundColor: 'green',
        //margin: 20
    }

});

export default WelcomeScreen;