import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SiteDetails from '../screens/SiteDetails';
import Sites from '../screens/Sites';

export default function Home() {

  const Stack = createStackNavigator();

  return (
		<Stack.Navigator
      initialRouteName="Sites"
    >
			<Stack.Screen name="Site Details" component={SiteDetails} />
			<Stack.Screen name="Sites" component={Sites} />
		</Stack.Navigator>
	);
}
