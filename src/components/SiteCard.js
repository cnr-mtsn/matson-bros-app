import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Card, CardText, CardTitle } from "../styles/style";


export default function SiteCard({ site, navigation }) {
  return (
    <Card onPress={() => navigation.navigate("Site Details", {
      site,
      headerTitle: site.location
    })}>
      <View>
        <CardTitle>{site.builder}</CardTitle>
        <CardText>{site.location}</CardText>
      </View>
    </Card>
  );
}
