import type { LayoutLoad } from './$types';
import supabase from '$lib/db/supabaseClient';

export const load = (async ({ url }) => {
	// let user = {};
	// let sParam = {};
	// if (url.searchParams.get('userid')) {
	// 	user = {
	// 		userid: url.searchParams.get('userid'),
	// 		username: url.searchParams.get('username'),
	// 		gender: url.searchParams.get('gender'),
	// 		phone: url.searchParams.get('phone'),
	// 		email: url.searchParams.get('email')
	// 	};
	// 	sParam = url.searchParams.getAll;
	// 	if (!url.searchParams.get('test')) {
	// 		// const { data, error } = await supabase
	// 		// 	.from('innocent_app_user')
	// 		// 	.insert([{ ic_app_data: url.search }])
	// 		// 	.select();
	// 	}
	// 	console.log({ logFront: JSON.stringify(url.search) });
	// }
	// return {
	// 	user: user,
	// 	sparam: sParam
	// };
}) satisfies LayoutLoad;
