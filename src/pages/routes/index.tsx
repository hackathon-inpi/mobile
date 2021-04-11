import React from 'react';
import { useAuth } from '../../context/auth';

import Main from './main.routes';
import Auth from './auth.routes';

export default function Routes() {
	const { isAuthenticated } = useAuth();

	return <>{isAuthenticated ? <Main /> : <Auth />}</>;
}
