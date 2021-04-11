import React from 'react';
import {
	Container,
	LoginButton,
	LoginButtonText,
	RegisterMessage,
	LoginDisplay,
	LoginDisplayButton,
	LoginTextHeader,
	RegisterButtonText,
	LoginText,
	LoginInputText,
	LoginForgotPassText,
	ImgLogo
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
			<ImgLogo>
			</ImgLogo>
			<LoginDisplay>
				<LoginTextHeader>Entrar</LoginTextHeader>
				<LoginText>E-mail</LoginText>
				<LoginInputText placeholder="Digite seu e-mail aqui..."></LoginInputText>
				<LoginText>Senha</LoginText>
				<LoginInputText placeholder="Digite sua senha aqui..."></LoginInputText>
				<LoginForgotPassText>Esqueci minha senha</LoginForgotPassText>
				<LoginDisplayButton>
					<LoginButton onPress={attemptLogin}>
						<LoginButtonText>Entrar</LoginButtonText>
					</LoginButton>
				</LoginDisplayButton>
			</LoginDisplay>

			<RegisterMessage onPress={navigateToRegister}>
				<RegisterButtonText>Criar minha conta no e-INPI</RegisterButtonText>
			</RegisterMessage>
		</Container>
	);
}
