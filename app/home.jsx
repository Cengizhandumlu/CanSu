import React, {useState} from "react";
import { FlatList, View, Image, Text, Dimensions, StyleSheet } from "react-native";

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
			type: "maden_suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585223saka%20soda%20sade-min.png?v=234",
			price: "10 TL"
		},
		{
			name: "Limon Aromalı Maden Suyu",
			type: "maden_suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585239saka%20soda%20limon-min.png?v=234",
			price: "15 TL"
		},
		{
			name: "Elma Aromalı Maden Suyu",
			type: "maden_suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585200saka%20soda%20elma-min.png?v=234",
			price: "15 TL"
		},
		{
			name: "Karpuz-Çilek Aromalı Maden Suyu",
			type: "maden_suyu",
			img_url: "https://www.sakasu.com.tr/files/uploads/1668585515saka%20soda%20sise%20karpuz%20%C3%A7ilek%20aromali.png?v=234",
			price: "15 TL"
		},

	];

	const handlePageChange = (pageName) => {
		setCurrentPage(pageName);
	}

	const ProductItem = ({product}) => {
		return (
			<View style={styles.productContainer}>
				<Image source={{uri: product.img_url}} style={styles.productImage} />
				<Text style={styles.productName}>{product.name}</Text>
				<Text style={styles.productPrice	}>{product.price}</Text>
			</View>
		)
	}

	const productGrid = () => {
		const numberOfColumns = 2; // ızgarada kaç ürün olacağını belirler.

		return (
			<FlatList
				data={product.filter(p => p.type === currentPage)}
				renderItem={({item}) => <ProductItem product={item} />}
				keyExtractor={item => item.name}
				numColumns={numberOfColumns}
				contentContainerStyle={{paddingBottom: 100}}
			/>
		)
	}

	return (
		<View>
			<AddressSearch />
			{/* Tablerin olduğu kısım. Bu kısma styling lazım. */}
			<View style={{ flexDirection: "row", justifyContent: "space-between", padding:5 }}>
				<Text onPress={() => handlePageChange("su")} style={{marginLeft:12, fontFamily:"Arial", textAlign:"left", fontSize:14, fontWeight:"bold", color: currentPage === "su" ? "red" : "black"}}>Su</Text>
				<Text onPress={() => handlePageChange("maden_suyu")} style={{textAlign:"center", fontFamily:"Arial", fontSize:14, fontWeight:"bold", color: currentPage === "maden_suyu" ? "red" : "black"}}>Maden Suyu</Text>
				<Text onPress={() => handlePageChange("diğer")} style={{marginRight:12, fontFamily:"Arial", fontSize:14, fontWeight:"bold", color: currentPage === "diğer" ? "red" : "black"}}> Diğer</Text>
			</View>
			{
				currentPage === "su" && 
				productGrid()
			}
			{
				currentPage === "maden_suyu" && 
				productGrid()
			}
			{
				currentPage === "diğer" && 
				productGrid()
			}
		</View>
	);

}
const styles = StyleSheet.create({
	listContainer: {
		padding: 5,
	},
   	productContainer: {
	flex: 1,
	margin: 10,
	backgroundColor: "pink",
	padding: 5,
	borderradius: 5,
	shadowcolor: "red",
	shadowopoacity: 0.2,
	elevation: 2,
	alignitems: "center", 
	},
	productImage: {
	width: Dimensions.get("window").width / 2 - 20,
	height: 150,
	resizeMode: "stretch",
	},
	productName: {
	textAlign: "center",
	fontSize: 16,
	fontFamily: "Arial",
	fontweight: "bold",
	marginTop: 10,
	},	
	productPrice: {
	textAlign: "center",
	fontsize: 16,
	fontFamily: "Arial",
	fontweight: "bold",
	color: "red",
	marginTop: 5,
	},
});

export default Home;