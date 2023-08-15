import { Logs } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Welcome from './src/views/Welcome/Welcome.jsx';
import { NavigationContainer,navigate } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/views/Login/Login.jsx';

import { AuthContextProvider,UserAuth } from './src/context/AuthContext.jsx';

const Stack = createStackNavigator();

const {user,logOut}=UserAuth();
const RequireAuth = ({children})=>{
  return user?children: navigate('Login')
}

export default function App() {

  return (
    <AuthContextProvider>
      <NavigationContainer style={styles.container}>
        
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFD437'
            }
          }}
          initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            component={Welcome}
          />
          <Stack.Screen
            name='Login'
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContextProvider>
  );
}


const styles = StyleSheet.create({


  container: {

    flex: 5,
    backgroundColor: '#DFE2E7',
    alignItems: 'center',
    justifyContent: 'center',
  },


})
