import React from 'react';
import {
	Container,
	LoginButton,
	LoginButtonText,
	RegisterMessage,
} from './style';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;

type Props = {
	navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
	function navigateToRegister() {
		navigation.navigate('Register');
	}

	return (
		<Container>
			<LoginButton>
				<LoginButtonText>Login</LoginButtonText>
			</LoginButton>

			<RegisterMessage onPress={navigateToRegister}>
				<LoginButtonText>Não tenho uma conta</LoginButtonText>
			</RegisterMessage>
		</Container>
	);
}
