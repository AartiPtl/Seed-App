import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/pages/WelcomeScreen';
import SplashScreen from './src/pages/SplashScreen';
import Login from './src/pages/Register';
import OTPVerification from './src/pages/RegisterS2';
import SuccessScreen from './src/pages/RegisterS3';
import EditProfileScreen from './src/pages/Profile';
import OTPInput from './src/pages/OTPInput';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LoginScreen" component={Login}
          options={{
            headerTitle: "Back to Welcome Screen", headerShown: true,
             headerStyle: {
            backgroundColor: 'green', 
          },
          }} />
        <Stack.Screen name="VerificationScreen" component={OTPInput} 
          options={{
            headerTitle: "Back to login", headerShown: true,
            headerStyle: {
            backgroundColor: 'green',
          },
          }}
        />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen}
        options={{
            headerTitle: "Back to Verification", headerShown: true,
            headerStyle: {
            backgroundColor: 'green',
          },
        }}
         />
        <Stack.Screen name="ProfileScreen" component={EditProfileScreen} 
          options={{
            headerTitle: "Profile", headerShown: true,
            headerStyle: {
            backgroundColor: 'green',
          },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
