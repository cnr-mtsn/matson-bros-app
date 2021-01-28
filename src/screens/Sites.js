import React, { useState, useEffect } from "react";

import { Container, HomeImage, StyledList } from "../styles/style.js";
import { firebase } from "../firebase/config";
import SiteCard from "../components/SiteCard";
import logo from "../media/logo.png";

const Sites = ({ navigation }) => {
	const siteRef = firebase.firestore().collection("sites");
	const [sites, setSites] = useState([]);

	useEffect(() => {
		siteRef.onSnapshot(
			querySnapshot => {
				const data = [];
				querySnapshot.forEach(doc => {
					const site = doc.data();
					site.id = doc.id;
					data.push(site);
				});
				setSites(data);
			},
			error => {
				console.log(error);
			}
		);
	}, []);

	const renderSite = ({ item }) => <SiteCard navigation={navigation} site={item} />;

	return (
		<Container>
			<HomeImage source={logo} />
			<StyledList data={sites} renderItem={renderSite} keyExtractor={item => item.id} />
		</Container>
	);
};

export default Sites;
