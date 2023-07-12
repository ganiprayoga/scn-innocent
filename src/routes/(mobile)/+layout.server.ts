import type { LayoutServerLoad } from './$types';
import supabase from '$lib/db/supabaseClient';

export const load = (async ({ cookies, url }) => {
	let user: any = {};
	let sessionid: string | any = '';
	if (url.pathname === '/') {
		cookies.set('user', '', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 0
		});

		cookies.set('session', '', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 0
		});
	}

	if (url.searchParams.get('userid')) {
		user = {
			id: crypto.randomUUID(),
			qr: url.searchParams.get('qr'),
			userid: url.searchParams.get('userid'),
			username: url.searchParams.get('username'),
			gender: url.searchParams.get('gender'),
			phone: url.searchParams.get('phone'),
			email: url.searchParams.get('email'),
			tgllahir: url.searchParams.get('tgllahir'),
			instname: url.searchParams.get('instname'),
			insttype: url.searchParams.get('instype')
		};

		const { data, error } = await supabase.from('session').insert([user]).select();

		// console.log({
		// 	LogBack: JSON.stringify(user),
		// 	uuid: user.id
		// });

		cookies.set('user', user, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after an hour
			maxAge: 60 * 60
		});

		cookies.set('session', user.id, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after an hour
			maxAge: 60 * 60
		});
	}

	sessionid = cookies.get('session') ? cookies.get('session') : '';

	if (sessionid !== '') {
		const { data, error } = await supabase
			.from('path_journey')
			.insert([{ fk_session_id: sessionid, path: url.pathname }])
			.select();
	}

	return {
		user,
		sessionid
	};

	// console.log({ cookies: sessionid });
	// console.log({ path: url.pathname });
}) satisfies LayoutServerLoad;
