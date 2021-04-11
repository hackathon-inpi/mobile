import React, { useState } from 'react';
import {
	Container,
	RegisterTextHeader,
	RegisterText,
	RegisterDisplay,
	Footer,
	TextButton,
	FooterStatus,
	Circle,
	CircleOff
} from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import Stage1 from './stage-1';
import Stage2 from './stage-2';
import Stage3 from './stage-3';


type RegisterScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Register'
>;

type Props = {
	navigation: RegisterScreenNavigationProp;
};

export default function Register({ navigation }: Props) {
	const [count, setCount] = useState(1);

	function navigateToLogin() {
		navigation.navigate('Login');
	}

	function increment(index: number){
		if(index == 1 && count < 3){
			setCount(count+1);
		}
		if(index == -1 && count > 1){
			setCount(count-1);
		}
	}

	return (
		<Container>
			<RegisterDisplay>
				<RegisterTextHeader>Fazer cadastro</RegisterTextHeader>
				<RegisterText>Etapa {count}/3</RegisterText>
			</RegisterDisplay>

			<RegisterDisplay>
				{count == 1 && (
					<Stage1></Stage1>
				)}
				{count == 2 && (
					<Stage2></Stage2>
				)}
				{count == 3 && (
					<Stage3></Stage3>
				)}
			</RegisterDisplay>
			
			<RegisterDisplay>
				<Footer>
					<TextButton onPress={() => increment(-1)}>
						<RegisterText>Voltar</RegisterText>
					</TextButton>
					<TextButton onPress={() => increment(1)}>
						<RegisterText>Próximo</RegisterText>
					</TextButton>
				</Footer>
				{count == 1 && (
					<FooterStatus>
						<Circle></Circle>
						<CircleOff></CircleOff>
						<CircleOff></CircleOff>
					</FooterStatus>
				)}
				{count == 2 && (
					<FooterStatus>
						<Circle></Circle>
						<Circle></Circle>
						<CircleOff></CircleOff>
					</FooterStatus>
				)}
				{count == 3 && (
					<FooterStatus>
						<Circle></Circle>
						<Circle></Circle>
						<Circle></Circle>
					</FooterStatus>
				)}
			</RegisterDisplay>
		</Container>
	);
}
