import React from 'react';
import { Container, LogoutButton, LogoutButtonText } from './style';
import { useAuth } from '../../../context/auth';

export default function Home() {
	const { signOutUser } = useAuth();

	function logoutUser() {
		signOutUser();
	}

	return (
		<Container>
			<LogoutButton onPress={logoutUser}>
				<LogoutButtonText>Logout</LogoutButtonText>
			</LogoutButton>
		</Container>
	);
}
