import React from 'react';
import Tabs from '../Main/Tabs';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Main() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Tabs'
				component={Tabs}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
