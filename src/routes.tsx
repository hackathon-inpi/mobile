import React from 'react';
import Home from './pages/Home';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Routes() {
	<Stack.Navigator>
		<Stack.Screen name='Home' component={Home} />
	</Stack.Navigator>;
	return <Home />;
}
