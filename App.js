import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./views/Login";
import Home from "./views/Home";
import Action from "./views/Action";
import Enregisterer from "./views/Enregisterer";
import ScannerMarquage from "./views/ScannerMarquage";
import ScannerQrCode from "./views/ScannerQrCode";
import SaisirNumero from "./views/SaisirNumero";

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />
        <Stack.Screen name="Enregisterer" component={Enregisterer} options={{ headerShown: false }} />
        <Stack.Screen name="ScannerMarquage" component={ScannerMarquage} options={{ headerShown: false }} />
        <Stack.Screen name="ScannerQrCode" component={ScannerQrCode} options={{ headerShown: false }} />
        <Stack.Screen name="SaisirNumero" component={SaisirNumero} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default App
