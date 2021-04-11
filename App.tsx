import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</AuthProvider>
	);
}
