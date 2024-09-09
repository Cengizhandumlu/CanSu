import React, {useState} from "react";
import { View, Image, Text } from "react-native";

import AddressSearch from "../components/AddressSearch";

// interface productInformation {
// 	name: string,
// 	type: "su" | "maden_suyu" | "diger",
// 	img_url: string 
// } 

const Home = () => {

	const [currentPage, setCurrentPage] = useState("su")

	// TODO: Product listesini güncelle. Dinamik olarak tablerde yazdır. + Style
	// ♥️

	const product = [
		{
			name: "19 LT Plastik Damacana",
			type: "su",
			img_url: "https://sakasu.com.tr/files/uploads/damacana.png"
		},
		{
			name: "0.33 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/0_33l.png?v=234"
		},
		{
			name: "0.5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/15439187770_5l_2.png?v=234"
		},
		{
			name: "1.5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1_5l.png?v=234"
		},
		{
			name: "5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/5l.png?v=234"
		},
		{
			name: "10 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/10l.png?v=234"
		},
		{
			name: "200 Ml Bardak",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1548342891bardaksu_200ml.png?v=234"
		},
		{
			name: "250 Ml Bardak",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1548342917bardaksu_250ml.png?v=234"
		},
		{
			name: "0,33 Lt Cam Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1606903135cam33w.png?v=234"
		},
		{
			name: "0,75 Lt Cam Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1606903152cam75w.png?v=234"
		},
		{
			name: "Sade Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585223saka%20soda%20sade-min.png?v=234"
		},
		{
			name: "Limon Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585239saka%20soda%20limon-min.png?v=234"
		},
		{
			name: "Elma Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585200saka%20soda%20elma-min.png?v=234"
		},
		{
			name: "Karpuz-Çilek Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585515saka%20soda%20sise%20karpuz%20%C3%A7ilek%20aromali.png?v=234"
		},
		
	];

	const handlePageChange = (pageName) => {
		setCurrentPage(pageName);
	}

	return (
		<View>
			<AddressSearch />
			{/* Tablerin olduğu kısım. Bu kısma styling lazım. */}
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<Text onPress={() => handlePageChange("su")}>Su</Text>
				<Text onPress={() => handlePageChange("maden_suyu")}>Maden Suyu</Text>
				<Text>Diğer</Text>
			</View>
			{
				currentPage === "su" && 
				<View>
					<Text>19 lt</Text>
					<Text>15 lt Cam</Text>
				</View>
			}
			{
				currentPage === "maden_suyu" &&
				<View>
					<Text>Saka Maden Suyu</Text>
					<Text>Cengizhan Maden Suları</Text>
					<Text>Mustafa Gazozları</Text>
				</View>
			}
		</View>

	);
}


export default Home;