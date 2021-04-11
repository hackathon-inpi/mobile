import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: #1351B4;
	color: red;
	padding: 40px;
`;

export const RegisterDisplay = styled.View`
`;
export const RegisterTextHeader = styled.Text`
	color: #FFFFFF;
	font-size: 24px;
	font-weight: bold;
`;
export const RegisterText = styled.Text`
	color: #FFFFFF;
	font-size: 14px;
	margin-bottom: 4px;
`;
export const RegisterInputText = styled.TextInput`
	background-color: #FFFFFF;
	padding: 8px;
	border-radius: 6px;
	font-size: 16px;
	width: 100%;
	margin-bottom: 20px;
`;

export const ImgLogo = styled.View`
	width: 100px;
	height: 100px;
	background-color: #FFFFFF;
	margin-bottom: 52px;
`;

export const Footer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const TextButton = styled.TouchableOpacity`
`;

export const FooterStatus = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 28px;
`;

export const Circle = styled.View`
	width: 10px;
	height: 10px;
	background-color: #FFFFFF;
	border-radius: 20px;
	margin: 4px;
`;

export const CircleOff = styled.View`
	width: 10px;
	height: 10px;
	background-color: #ffffff;
	border-radius: 20px;
	margin: 4px;
	opacity: 0.4;
`;

export const RegisterDisplayButton = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	padding: 8px 24px;
	background-color: #FFFFFF;
	border-radius: 40px;
	margin-top: 40px;
`;
export const RegisterButtonText = styled.Text`
	color: #1351B4;
	font-weight: bold;
	font-size: 16px;
`;