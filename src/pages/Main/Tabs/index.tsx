import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Settings from '../Settings';
import Profile from '../Profile';
import Requests from '../Requests';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator tabBarOptions={{ showLabel: false }}>
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
				name='Pedidos'
				component={Requests}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name='tags' size={24} color='black' />
					),
				}}
			/>

			<Tab.Screen
				name='Notificações'
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='notifications' size={24} color='black' />
					),
				}}
			/>
			<Tab.Screen
				name='Perfil'
				component={Settings}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='user' size={24} color='black' />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
