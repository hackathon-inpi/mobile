import React, { createContext, useState, useEffect, useContext } from 'react';
import { signIn } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
	children: React.ReactNode;
}

interface User {
	name: string;
	email: string;
}

interface AuthContextData {
	isAuthenticated: boolean;
	loading: boolean;
	user: User | null;
	signInUser(): Promise<void>;
	signOutUser(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadStorageData = async () => {
			const storagedUser = await AsyncStorage.getItem('@RNAuth: user');
			const storagedToken = await AsyncStorage.getItem('@RNAuth: token');

			if (storagedUser && storagedToken) {
				// api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`; // Ainda não
				setUser(JSON.parse(storagedUser));
			}

			setLoading(false);
		};

		loadStorageData();
	}, []);

	const signInUser = async () => {
		setLoading(true);

		try {
			const res = await signIn();
			const { token, user } = res;

			setUser(user);

			// Axios request
			// api.defaults.headers['Authorization'] = `Bearer ${token}`; // Ainda não

			await AsyncStorage.setItem('@RNAuth: user', JSON.stringify(user));
			await AsyncStorage.setItem('@RNAuth: token', JSON.stringify(token));
			setLoading(false);
		} catch (error) {
			console.warn(error);
		}
	};

	const signOutUser = async () => {
		setLoading(true);

		AsyncStorage.clear().then(() => {
			setUser(null);
		});
		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: !!user,
				loading,
				user,
				signInUser,
				signOutUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
