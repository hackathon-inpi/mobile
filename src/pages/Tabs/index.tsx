import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Settings' component={Home} />
		</Tab.Navigator>
	);
}
