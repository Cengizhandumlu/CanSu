import { View, Image, Text } from "react-native";
import React from "react";
import AddressSearch from "../components/AddressSearch";


const Home = () => {

	return (
		<View>
			<AddressSearch />
			{/* Create a 3 tab named like, su, gazoz, diğer */}

			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<Text>Like</Text>
				<Text>Su</Text>
				<Text>Gazoz</Text>
				<Text>Diğer</Text>
			</View>
		</View>

	);
}


export default Home;