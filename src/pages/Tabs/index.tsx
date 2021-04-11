import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo name='home' size={24} color='black' />
					),
				}}
			/>
			<Tab.Screen
				name='Perfil'
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name='user-alt' size={24} color='black' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
