import React from 'react';
import {
	RegisterDisplay,
	RegisterText,
	RegisterInputText
} from '../style';

export default function Stage1() {
	return (
		<RegisterDisplay>
            <RegisterText>Natureza Jurídica</RegisterText>
			<RegisterInputText placeholder="Escolha a Natureza Jurídica..."></RegisterInputText>
			<RegisterText>CNPJ</RegisterText>
			<RegisterInputText placeholder="Digite o CNPJ aqui..."></RegisterInputText>
			<RegisterText>Razão Social</RegisterText>
			<RegisterInputText placeholder="Digite a razão social aqui..."></RegisterInputText>
		</RegisterDisplay>
	);
}
