import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sites from './src/screens/Sites';
import NewSite from './src/screens/NewSite';
import { theme } from './src/styles/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.orange,
          inactiveTintColor: theme.colors.grey,
        }}>
        <Tab.Screen
          name="Sites"
          component={Sites}
         options={({route}) => ({
            tabBarIcon: () => {
            // You can return any component that you like here!
            return <Ionicons name="list-outline" size={32} color={theme.colors.black} />;
          },
          })}
        />
        <Tab.Screen
          name="New Site"
          component={NewSite}
          options={({route}) => ({
            tabBarIcon: () => {
            // You can return any component that you like here!
            return <Ionicons name="add-outline" size={32} color={theme.colors.black} />;
          },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



