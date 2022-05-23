import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	Linking,
	Pressable,
} from "react-native";
import react, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtherScreen from "./components/otherScreen";
const Stack = createNativeStackNavigator();
export default function App() {
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
	const [bored, setBored] = useState({});
	async function Fetching() {
		console.log("Begin Fetching");
		const givedata = {
			method: "GET",
		};
		await fetch(
			"http://www.boredapi.com/api/activity?type=recreational",
			givedata
		)
			.then((response) => response.json())
			.then((responseData) => setBored(responseData));
	}
	useEffect(() => {
		Fetching();
	}, []);
	console.log(bored);
	return (
		<View style={styles.container}>
			<Text style={styles.counter_text}>{bored.activity}</Text>
			<Text style={styles.type}>Price Needed : $ {bored.price * 100}</Text>
			<Text style={styles.iambored}>I am bored give me activity</Text>
			<Pressable onPress={() => Fetching()} style={styles.button}>
				<Text style={{ color: "white" }}>Press Me</Text>
			</Pressable>
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
		marginHorizontal: 20,
		textAlign: "center",
	},
	button_change: {
		fontSize: 28,
	},
	iambored: {
		fontSize: 30,
		marginTop: 10,
		marginVertical: 10,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
		margin: 30,
	},
	type: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
});
