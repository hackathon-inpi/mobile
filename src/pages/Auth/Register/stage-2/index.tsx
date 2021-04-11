import React from 'react';
import {
	RegisterDisplay,
	RegisterText,
	RegisterInputText
} from '../style';

export default function Stage2() {
	return (
		<RegisterDisplay>
            <RegisterText>País</RegisterText>
			<RegisterInputText placeholder="Escolha o seu País"></RegisterInputText>
			<RegisterText>Estado</RegisterText>
			<RegisterInputText placeholder="Escolha o seu Estado"></RegisterInputText>
			<RegisterText>Cidade</RegisterText>
			<RegisterInputText placeholder="Escolha a sua Cidade"></RegisterInputText>
            <RegisterText>Endereço</RegisterText>
			<RegisterInputText placeholder="Digite o seu endereço..."></RegisterInputText>
            <RegisterText>CEP</RegisterText>
			<RegisterInputText placeholder="Digite o seu CEP..."></RegisterInputText>
		</RegisterDisplay>
	);
}
