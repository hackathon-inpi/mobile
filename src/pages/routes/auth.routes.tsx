import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';

const Stack = createStackNavigator<AuthStackParamList>();

export default function Routes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name='Register'
				component={Register}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
