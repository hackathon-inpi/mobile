import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}
