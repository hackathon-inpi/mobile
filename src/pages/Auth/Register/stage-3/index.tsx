import React from 'react';
import {
	RegisterDisplay,
	RegisterText,
	RegisterInputText,
	RegisterDisplayButton,
	RegisterButton,
	RegisterButtonText
} from '../style';

export default function Stage3() {
	return (
		<RegisterDisplay>
            <RegisterText>E-mail</RegisterText>
			<RegisterInputText placeholder="Digite seu e-mail aqui..."></RegisterInputText>
			<RegisterText>Login</RegisterText>
			<RegisterInputText placeholder="Digite seu login aqui..."></RegisterInputText>
			<RegisterText>Senha</RegisterText>
			<RegisterInputText placeholder="Digite sua senha aqui..."></RegisterInputText>
            <RegisterText>Confirmar senha</RegisterText>
			<RegisterInputText placeholder="Digite sua senha novamente aqui..."></RegisterInputText>
			<RegisterDisplayButton>
				<RegisterButton>
					<RegisterButtonText>Cadastrar</RegisterButtonText>
				</RegisterButton>
			</RegisterDisplayButton>
		</RegisterDisplay>
		
	);
}
