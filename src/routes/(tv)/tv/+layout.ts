import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
	let user = {};

	if (url.searchParams.get('userid')) {
		user = {
			userid: url.searchParams.get('userid'),
			username: url.searchParams.get('username'),
			gender: url.searchParams.get('gender'),
			phone: url.searchParams.get('phone'),
			email: url.searchParams.get('email')
		};
	}
	// console.log(user);
	return {
		user: user
	};
}) satisfies LayoutLoad;
