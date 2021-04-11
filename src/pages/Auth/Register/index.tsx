import React from 'react';
import {
	Container,
	LoginButton,
	LoginButtonText,
	RegisterMessage,
} from './style';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Register'
>;

type Props = {
	navigation: RegisterScreenNavigationProp;
};

export default function Register({ navigation }: Props) {
	function navigateToLogin() {
		navigation.navigate('Login');
	}

	return (
		<Container>
			<LoginButton>
				<LoginButtonText>Fazer cadastro</LoginButtonText>
			</LoginButton>
			<RegisterMessage onPress={navigateToLogin}>
				<LoginButtonText>Já tenho uma conta</LoginButtonText>
			</RegisterMessage>
		</Container>
	);
}
