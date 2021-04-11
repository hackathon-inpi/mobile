import React from 'react';
import {
	Container,
	LoginButton,
	LoginButtonText,
	RegisterMessage,
} from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../../context/auth';

type LoginScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;

type Props = {
	navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
	const { signInUser } = useAuth();

	function navigateToRegister() {
		navigation.navigate('Register');
	}

	function attemptLogin() {
		signInUser();
	}

	return (
		<Container>
			<LoginButton onPress={attemptLogin}>
				<LoginButtonText>Login</LoginButtonText>
			</LoginButton>

			<RegisterMessage onPress={navigateToRegister}>
				<LoginButtonText>Não tenho uma conta</LoginButtonText>
			</RegisterMessage>
		</Container>
	);
}
