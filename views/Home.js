import {Button, Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';


const Home = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar style="auto" />
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Login')} />
    </View>
)

export default Home
