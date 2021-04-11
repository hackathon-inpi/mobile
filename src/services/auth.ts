interface FakeResolution {
	token: string;
	user: {
		name: string;
		email: string;
	};
}

export function signIn(): Promise<FakeResolution> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: 'example_token28372756123028',
				user: {
					name: 'User',
					email: 'user@email.com',
				},
			});
		}, 1000);
	});
}
