import styled from 'styled-components/native';

export const Body = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	background-color: #f2f2f2;
`;

export const Container = styled.View`
	width: 100%;
	padding: 20px 54px;
	justify-content: flex-start;
	align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
	border: 1px solid black;
	padding: 20px;
`;

export const Div = styled.View``;

export const LogoutButtonText = styled.Text``;

export const Header = styled.View`
	width: 100%;
	height: 92px;
	padding: 20px;
	background-color: #1351b4;
	justify-content: center;
	align-items: flex-start;
`;

export const HeaderText = styled.Text`
	margin-top: 20px;
	font-weight: bold;
	color: #ffffff;
	font-size: 16px;
`;

export const ImgProfile = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 100px;
`;

export const TextWelcome = styled.Text`
	margin: 20px 0px;
	font-size: 20px;
	color: #6698eb;
`;

export const BoardInfo = styled.View`
	width: 100%;
	border-width: 1px;
	border-color: #1351b4;
	background-color: #ffffff;
	border-radius: 8px;
	padding: 24px 12px;
`;

export const BoardFlex = styled.View`
	flex-direction: row;
	justify-content: space-around;
`;

export const BoardText = styled.Text``;

export const BoardGraph = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border-width: 4px;
	border-color: #dbdbdb;
	border-top-color: #009846;
	padding: 20px;
`;

export const BoardHeaderText = styled.Text`
	margin-bottom: 12px;
	font-size: 14px;
	color: #1351b4;
`;

export const BoardFooterText = styled.Text`
	text-align: center;
	margin-top: 32px;
	font-size: 14px;
	color: #1351b4;
`;

export const RegisterDemand = styled.TouchableOpacity`
	width: 100%;
	border-width: 1px;
	border-color: #1351b4;
	background-color: #ead555;
	border-radius: 8px;
	padding: 24px 12px;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const RegisterText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #1351b4;
`;

export const MainDisplayButtons = styled.View`
	margin-top: 20px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const MainButtom = styled.TouchableOpacity`
	width: 30%;
	border-width: 1px;
	border-color: #1351b4;
	background-color: #dce2eb;
	border-radius: 8px;
	padding: 24px 12px;
	justify-content: center;
	align-items: center;
`;

export const ButtomText = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #1351b4;
`;
