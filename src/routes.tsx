import React from 'react';
import Tabs from './pages/Tabs';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Routes() {
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
