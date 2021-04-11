import React from 'react';
import {
	Container,
	LogoutButtonText,
	Header,
	Body,
	HeaderText,
	ImgProfile,
	TextWelcome,
	BoardInfo,
	BoardText,
	Div,
	BoardGraph,
	BoardFlex,
	BoardHeaderText,
	BoardFooterText,
	RegisterDemand,
	RegisterText,
	MainDisplayButtons,
	MainButtom,
	ButtomText
} from './style';

export default function Home() {
	return (
		<Body>
			<Header>
				<HeaderText>INPI</HeaderText>
			</Header>
			<Container>
				<ImgProfile></ImgProfile>
				<TextWelcome>Bem-vinda, Ana Lúcia</TextWelcome>
				<BoardInfo>
					<BoardFlex>
						<Div>
							<BoardHeaderText>Visão Geral</BoardHeaderText>
							<BoardText>1 marca registrada</BoardText>
							<BoardText>3 patentes registradas</BoardText>
							<BoardText>2 softwares registrados</BoardText>
						</Div>
						<Div>
							<BoardGraph>
								<BoardText></BoardText>
							</BoardGraph>
						</Div>
					</BoardFlex>
					<BoardFooterText>Você possui 3 pedidos em andamento</BoardFooterText>
				</BoardInfo>
				<RegisterDemand>
					<RegisterText>Registre uma nova criação</RegisterText>
				</RegisterDemand>
				<MainDisplayButtons>
					<MainButtom>
						<ButtomText>{`Pagar\numa GRU`}</ButtomText>
					</MainButtom>
					<MainButtom>
						<ButtomText>{`Gerar\numa GRU`}</ButtomText>
					</MainButtom>
					<MainButtom>
						<ButtomText>{`Acessar o\nBuscaWeb`}</ButtomText>
					</MainButtom>
				</MainDisplayButtons>
			</Container>
		</Body>
	);
}
