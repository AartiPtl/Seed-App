import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useRef } from 'react'

const OTPInput = (navigation) => {
    const input = useRef([]);

    const handleTextChange = (text, index) => {
        if (text.length === 1 && index < 3) {
            input.current[index + 1].focus();
            navigation.navigate('SuccessScreen')
        }
    };

    return (
        <View style={Styles.container}>
            {Array(4)
                .fill('')
                .map((_, index) => (
                    <TextInput
                        key={index}
                        style={Styles.input}
                        keyboardType='number-pad'
                        maxLength={1}
                        onChangeText={(text) =>
                            handleTextChange(text, index)}
                        ref={(ref) => (input.current[index] = ref)}
                    />
                ))}
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '40',
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 10,

    },
})

export default OTPInput;