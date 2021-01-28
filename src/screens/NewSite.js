import React, { useState } from "react";
import { NewSiteContainer, SiteInput, theme, NewSiteInputFields } from "../styles/style.js";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { firebase } from "../firebase/config";

const NewSite = ({ navigation }) => {
	const [newSite, setNewSite] = useState({
		builder: "",
		location: "",
		startDate: "",
	});

	const siteRef = firebase.firestore().collection("sites");

	const getDate = () => {
		const d = new Date();
		const month = d.getMonth() + 1;
		const date = d.getDate();
		const year = d.getFullYear();

		return `${month}/${date}/${year}`;
	};
	function submitSite() {
		if (newSite.builder === "" || newSite.location === "" || newSite.startDate === "") {
			alert("Please enter: Builder, Location, Start Date");
		} else {
      const timestamp = getDate();
      const data = {...newSite, createdOn: timestamp}
			siteRef
				.add(data)
				.then(_doc => {
					setNewSite({});
          Keyboard.dismiss();
          navigation.navigate('Sites');
				})
				.catch(err => alert(err));
		}
	}

	return (
		<NewSiteContainer >
      <NewSiteInputFields>
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, builder: text })}
					value={newSite.builder}
					placeholder="Builder"
				/>
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, location: text })}
					value={newSite.location}
					placeholder="Location"
				/>
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, startDate: text })}
					value={newSite.startDate}
					placeholder="Start Date"
				/>
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, walls: text })}
          placeholder="Interior Walls"
          value={newSite.walls}
				/>
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, ceiling: text })}
          placeholder="Ceiling"
          value={newSite.ceiling}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, interiorTrim: text })}
					placeholder="Interior Trim"
          value={newSite.interiorTrim}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, enamel: text })}
					placeholder="Enamel"
          value={newSite.enamel}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, interiorStain: text })}
					placeholder="Interior Stain"
          value={newSite.interiorStain}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, garage: text })}
					placeholder="Garage"
          value={newSite.garage}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, body: text })}
					placeholder="Body"
          value={newSite.body}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, exteriorTrim: text })}
					placeholder="Exterior Trim"
          value={newSite.exteriorTrim}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, frontDoor: text })}
					placeholder="Front Door"
          value={newSite.frontDoor}
          />
				<SiteInput
					onChangeText={text => setNewSite({ ...newSite, exteriorStain: text })}
					placeholder="Exterior Stain"
          value={newSite.exteriorStain}
				/>
			</NewSiteInputFields>
			<TouchableOpacity style={{
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.orange,

      }}onPress={submitSite}>
				<Text style={{
          color: theme.colors.white,
          fontWeight: "bold",
          textTransform: "uppercase"
        }}>Add Site</Text>
			</TouchableOpacity>
		</NewSiteContainer>
	);
};

export default NewSite;
