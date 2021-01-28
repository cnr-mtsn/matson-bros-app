import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import NewSite from "./src/screens/NewSite";
import { theme } from "./src/styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.orange,
          inactiveTintColor: theme.colors.grey,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({}) => (
              // You can return any component that you like here!
                <Ionicons
                  name="list-outline"
                  size={32}
                  color={theme.colors.black}
                />
              )
            }
          }
        />
        <Tab.Screen
          name="New Site"
          component={NewSite}
          options={{
            tabBarIcon: ({}) => (
              // You can return any component that you like here!
              <Ionicons
                name="add-outline"
                size={32}
                color={theme.colors.black}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
