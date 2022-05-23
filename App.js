import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";
import react, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtherScreen from "./components/otherScreen";
const Stack = createNativeStackNavigator();
export default function App() {
	const [counter, setCounter] = useState(0);
	function handleChange() {
		setCounter((prev) => prev + 1);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Other" component={OtherScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Other")}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	counter_text: {
		fontSize: 50,
	},
});
