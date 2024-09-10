import React, {useState} from "react";
import { FlatList, View, Image, Text, Dimensions } from "react-native";

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
			img_url: "https://sakasu.com.tr/files/uploads/damacana.png",
			price: "120 TL"
		},
		{
			name: "0.33 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/0_33l.png?v=234",
			price: "5 TL"

		},
		{
			name: "0.5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/15439187770_5l_2.png?v=234",
			price: "10 TL"
		},
		{
			name: "1.5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1_5l.png?v=234",
			price: "15 TL"
		},
		{
			name: "5 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/5l.png?v=234",
			price: "25 TL"
		},
		{
			name: "10 Lt Pet Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/10l.png?v=234",
			price: "80 TL"
		},
		{
			name: "200 Ml Bardak",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1548342891bardaksu_200ml.png?v=234",
			price: "2 TL"
		},
		{
			name: "250 Ml Bardak",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1548342917bardaksu_250ml.png?v=234",
			price: "3 TL"
		},
		{
			name: "0,33 Lt Cam Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1606903135cam33w.png?v=234",
			price: "15 TL"
		},
		{
			name: "0,75 Lt Cam Şişe",
			type: "su",
			img_url: "https://www.sakasu.com.tr/files/uploads/1606903152cam75w.png?v=234",
			price: "25 TL"
		},
		{
			name: "Sade Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585223saka%20soda%20sade-min.png?v=234",
			price: "10 TL"
		},
		{
			name: "Limon Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585239saka%20soda%20limon-min.png?v=234",
			price: "15 TL"
		},
		{
			name: "Elma Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585200saka%20soda%20elma-min.png?v=234",
			price: "15 TL"
		},
		{
			name: "Karpuz-Çilek Aromalı Maden Suyu",
			type: "maden suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585515saka%20soda%20sise%20karpuz%20%C3%A7ilek%20aromali.png?v=234",
			price: "15 TL"
		},

	];

	const handlePageChange = (pageName) => {
		setCurrentPage(pageName);
	}

	const ProductItem = ({product}) => {
		<View style={styles.productContainer}>
			<Image source={{uri: product.img_url}} style={styles.productImage} />
			<Text style={styles.productName}>{product.name}</Text>
			<Text style={styles.productPrice	}>{product.price}</Text>
		</View>
	}

	const productGrid = () => {
		const numberOfColumns = 2; // ızgarada kaç ürün olacağını belirler.

		return (
			<FlatList
				data={product}
				renderItem={({item}) => <ProductItem product={item} />}
				keyExtractor={item => item.name}
				numColumns={numberOfColumns}
			/>
		)
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
				productGrid()
			}
			{
				currentPage === "maden_suyu" &&
				productGrid()
			}
		</View>
	);


const styles = StyleSheet.create({
	listContainer: {
		padding: 10,
	},
   	productContainer: {
	flex: 1,
	margin: 5,
	backgroundColor: "#fff",
	padding: 10,
	borderradius: 5,
	shadowcolor: "#000",
	shadowopoacity: 0.2,
	shadowradius: 1.41,
	elevation: 2,
	alignitems: "center", 
	},
	productImage: {
	width: Dimensions.get("window").width / 2 - 20,
	height: 150,
	resaizeMode: "contain",
	},
	productName: {
	fontSize: 16,
	fontweight: "bold",
	marginTop: 10,
	},	
	productPrice: {
	fontsize: 16,
	fontweight: "bold",
	color: "#00f",
	marginTop: 5,
	},
});

export default Home;

