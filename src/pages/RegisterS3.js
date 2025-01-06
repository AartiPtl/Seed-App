import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';

const SuccessScreen = ({ navigation }) => {
  const [showSuccess, setShowSuccess] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccess(false);
      navigation.navigate('ProfileScreen');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have logged in Successfully</Text>
    </View>
  )
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
    color: 'black',
    marginBottom: 30,
    textAlign: 'center'
  }
}
);
export default SuccessScreen;