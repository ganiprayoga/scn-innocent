import type { PageLoad } from './$types';
import axios from 'axios';
import supabase from '$lib/db/supabaseClient';

export const load = (({ params }) => {
	let stravaClub: any = [];
	let supabaseStrava: any = [];

	stravaClub = getClubActivity();
	supabaseStrava = getSupabaseStrava();

	return {
		stravaClub: stravaClub,
		supabaseStrava: supabaseStrava
	};
}) satisfies PageLoad;

const getClubActivity = async () => {
	let retVal: any = {};
	let stravaURL: string = 'https://www.strava.com/api/v3/clubs/1187707/activities';
	let accessToken: string = 'fc697e03e4186fde3d8f6c6bb0b043449a998bec';
	try {
		const res = await axios.get(stravaURL, {
			headers: {
				Authorization: 'Bearer ' + accessToken
			},
			params: { per_page: 200 }
		});

		retVal = {
			activities: res.data
		};
	} catch (err) {
		console.log(err);
		retVal = {
			error: err
		};
	}
	return retVal;
};

const getSupabaseStrava = async () => {
	const { data, error } = await supabase.from('svc_strv').select('*').eq('month', 'December');

	return {
		act: data ?? []
	};
};
