import React from "react";
import { View, Text } from "react-native";
import {
  Container,
	SiteDetailsHeader,
	SiteDetailsHeaderText,
	SiteDetailsCard,
	SiteDetailsCardTitle,
	SiteDetailsInfoLine,
	SiteDetailsInfoText
} from "../styles/style";

export default function SiteDetails({ route }) {
	const { site } = route.params;

	return (
		<View>
			<SiteDetailsHeader>
				<SiteDetailsHeaderText>{site.builder}</SiteDetailsHeaderText>
				<SiteDetailsHeaderText>{site.location}</SiteDetailsHeaderText>
				<SiteDetailsHeaderText>{site.startDate}</SiteDetailsHeaderText>
			</SiteDetailsHeader>

			<SiteDetailsCard>
				<SiteDetailsCardTitle>Interior</SiteDetailsCardTitle>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Walls:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.walls || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Trim:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.interiorTrim || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Cabinets:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.enamel || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Ceiling:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.ceiling || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Garage:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.garage || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Stain:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.interiorStain || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
			</SiteDetailsCard>

			<SiteDetailsCard>
				<SiteDetailsCardTitle>Exterior</SiteDetailsCardTitle>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Body:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.body || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Trim:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.exteriorTrim || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Stain:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.exteriorStain || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
				<SiteDetailsInfoLine>
					<SiteDetailsInfoText>Front Door:</SiteDetailsInfoText>
					<SiteDetailsInfoText>{site.exteriorStain || `N/A`}</SiteDetailsInfoText>
				</SiteDetailsInfoLine>
			</SiteDetailsCard>
		</View>
	);
}
